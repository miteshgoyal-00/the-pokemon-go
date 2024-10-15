import axios from "axios";
import { promises as fs } from "fs";

const BASE_URL = "https://pokeapi.co/api/v2";

// Function to fetch all generations
async function getGenerations() {
    try {
        const response = await axios.get(`${BASE_URL}/generation/`);
        return response.data.results; // Array of generation objects
    } catch (error) {
        console.error("Error fetching generations:", error.message);
        return [];
    }
}

// Function to fetch Pokémon species for a given generation
async function getPokemonSpecies(generationUrl) {
    try {
        const response = await axios.get(generationUrl);
        // Sort species by Pokédex number
        const sortedSpecies = response.data.pokemon_species.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        return sortedSpecies.map((species) => species.name);
    } catch (error) {
        console.error(
            `Error fetching species from ${generationUrl}:`,
            error.message
        );
        return [];
    }
}

// Function to fetch Pokémon details
async function getPokemonData(pokemonName) {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon/${pokemonName}/`);
        const data = response.data;

        // Extract types
        let types = data.types.map((t) => t.type.name);

        types = types.map(
            (type) => type.charAt(0).toUpperCase() + type.slice(1)
        );

        // Extract weight and height
        const weight = (data.weight / 10).toFixed(2); // converted from hectograms to kilograms
        const height = (data.height / 10).toFixed(2); // converted from decimeters to meters.

        // Get species URL for further details
        const speciesUrl = data.species.url;
        const speciesData = await getPokemonSpeciesData(speciesUrl);
        if (!speciesData) return null;

        // Get evolution chain URL
        const evolutionChainUrl = speciesData.evolution_chain.url;
        const evolutionChain = await getEvolutionChain(evolutionChainUrl);
        if (!evolutionChain) return null;

        // Determine evolution stage
        const evolutionStage = determineEvolutionStage(
            pokemonName,
            evolutionChain
        );

        // Get list of evolutions
        const evolutions = getEvolutions(pokemonName, evolutionChain);

        // Get species string (e.g., "Mouse Pokémon")
        const speciesString = getEnglishSpecies(speciesData.genera);

        return {
            species: speciesString,
            types: types,
            weight: Number.parseFloat(weight),
            height: Number.parseFloat(height),
            evolutionStage: evolutionStage,
            evolutions: evolutions,
        };
    } catch (error) {
        console.error(
            `Error fetching data for Pokémon ${pokemonName}:`,
            error.message
        );
        return null;
    }
}

// Function to fetch Pokémon species data
async function getPokemonSpeciesData(speciesUrl) {
    try {
        const response = await axios.get(speciesUrl);
        return response.data;
    } catch (error) {
        console.error(
            `Error fetching species data from ${speciesUrl}:`,
            error.message
        );
        return null;
    }
}

// Function to fetch evolution chain
async function getEvolutionChain(evolutionChainUrl) {
    try {
        const response = await axios.get(evolutionChainUrl);
        return response.data.chain; // Evolution chain object
    } catch (error) {
        console.error(
            `Error fetching evolution chain from ${evolutionChainUrl}:`,
            error.message
        );
        return null;
    }
}

// Function to determine the evolution stage of a Pokémon
function determineEvolutionStage(pokemonName, chain, stage = 1) {
    if (chain.species.name === pokemonName) {
        return stage;
    }
    for (const evolvesTo of chain.evolves_to) {
        const result = determineEvolutionStage(
            pokemonName,
            evolvesTo,
            stage + 1
        );
        if (result !== -1) {
            return result;
        }
    }
    return -1; // Not found in this branch
}

// Function to get list of evolutions for a Pokémon
function getEvolutions(pokemonName, chain) {
    let evolutions = [];

    function traverse(chainNode) {
        if (chainNode.species.name === pokemonName) {
            chainNode.evolves_to.forEach((evolution) => {
                evolutions.push(evolution.species.name);
            });
        } else {
            chainNode.evolves_to.forEach((evolution) => {
                traverse(evolution);
            });
        }
    }

    traverse(chain);
    evolutions = evolutions.map(
        (evolution) => evolution.charAt(0).toUpperCase() + evolution.slice(1)
    );
    return evolutions;
}

// Function to get English species string
function getEnglishSpecies(genera) {
    const englishEntry = genera.find((entry) => entry.language.name === "en");
    return englishEntry ? englishEntry.genus : "Unknown";
}

// Function to process all generations and gather Pokémon data
async function processGenerations() {
    let generations = get_generations_to_fetch_data();

    const allData = {};

    for (const generation of generations) {
        console.log(`Processing Generation: ${generation.name}`);
        const speciesList = await getPokemonSpecies(
            `${BASE_URL}/generation/${generation.name}/`
        );

        allData[generation.name] = [];

        for (const speciesName of speciesList) {
            // To avoid hitting rate limits, introduce a small delay
            // await delay(1);

            const pokemonData = await getPokemonData(speciesName);
            if (pokemonData) {
                allData[generation.name].push({
                    name:
                        speciesName.charAt(0).toUpperCase() +
                        speciesName.slice(1),
                    species: pokemonData.species,
                    type: pokemonData.types,
                    weight: pokemonData.weight,
                    height: pokemonData.height,
                    evolutionStage: pokemonData.evolutionStage,
                    evolution: pokemonData.evolutions,
                });
                console.log(`Fetched data for ${speciesName}.`);
            }
        }

        // Write generation data to a JavaScript file in the form of an array of objects
        add_to_pokemons_data_file(generation.name, allData[generation.name]);
    }

    return allData;
}

// Function to get the region name based on generation
function getRegionName(generation) {
    const regions = {
        "generation-i": "Kanto",
        "generation-ii": "Johto",
        "generation-iii": "Hoenn",
        "generation-iv": "Sinnoh",
        "generation-v": "Unova",
        "generation-vi": "Kalos",
        "generation-vii": "Alola",
        "generation-viii": "Galar",
        "generation-ix": "Paldea",
    };

    return regions[generation].toLowerCase() || "unknown";
}

function get_generations_to_fetch_data() {
    // let generations = await getGenerations();
    return [
        {
            name: "generation-i",
            url: "https://pokeapi.co/api/v2/generation/1/",
        },
        {
            name: "generation-ii",
            url: "https://pokeapi.co/api/v2/generation/2/",
        },
        {
            name: "generation-iii",
            url: "https://pokeapi.co/api/v2/generation/3/",
        },
        {
            name: "generation-iv",
            url: "https://pokeapi.co/api/v2/generation/4/",
        },
        {
            name: "generation-v",
            url: "https://pokeapi.co/api/v2/generation/5/",
        },
        {
            name: "generation-vi",
            url: "https://pokeapi.co/api/v2/generation/6/",
        },
        {
            name: "generation-vii",
            url: "https://pokeapi.co/api/v2/generation/7/",
        },
        {
            name: "generation-viii",
            url: "https://pokeapi.co/api/v2/generation/8/",
        },
        {
            name: "generation-ix",
            url: "https://pokeapi.co/api/v2/generation/9/",
        },
    ];
}

async function add_to_pokemons_data_file(name, content) {
    try {
        const filePath = "./api/fetched-pokemons-data.js";
        const fileContent = `const ${getRegionName(name)}_region_pokemons = ${JSON.stringify(content, null, 2)};\n\n`;
        await fs.appendFile(filePath, fileContent);
        console.log(
            `Data for ${name} ${getRegionName(name)} has been appended to ${filePath}`
        );
    } catch (error) {
        console.log(`Error writing data for ${name} to file:`, error.message);
    }
}

// Utility function to introduce delays
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Main function
(async () => {
    console.log("--------------------\nStarting to fetch Pokémon data...");
    await processGenerations();
})();
