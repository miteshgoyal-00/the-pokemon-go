const default_inventory_items = [
    // Medicine
    {
        name: "Potion",
        description:
            "A spray-type medicine that restores 20 HP to a single Pokémon, providing quick relief for minor injuries.",
        category: "Medicine",
    },
    {
        name: "Super Potion",
        description:
            "An enhanced spray-type medicine that restores 50 HP to a single Pokémon, ideal for moderate healing needs.",
        category: "Medicine",
    },
    {
        name: "Hyper Potion",
        description:
            "A highly potent spray-type medicine that restores 200 HP to a single Pokémon, perfect for serious battles.",
        category: "Medicine",
    },
    {
        name: "Max Potion",
        description:
            "The ultimate spray-type medicine that fully restores the HP of a single Pokémon, regardless of its current condition.",
        category: "Medicine",
    },
    {
        name: "Revive",
        description:
            "A crystalline revival medicine that brings a fainted Pokémon back to consciousness with half of its maximum HP.",
        category: "Medicine",
    },
    {
        name: "Max Revive",
        description:
            "A miraculous revival medicine that not only revives a fainted Pokémon but also fully restores its HP, ready for immediate action.",
        category: "Medicine",
    },
    {
        name: "Full Restore",
        description:
            "A supreme medicine that completely restores the HP of a Pokémon and cures all status conditions.",
        category: "Medicine",
    },

    // Pokeballs
    {
        name: "Pokeball",
        description:
            "The standard device for catching wild Pokémon, offering a basic capture rate for most encounters.",
        category: "Pokeballs",
    },
    {
        name: "Great Ball",
        description:
            "An improved Poké Ball with a higher success rate, designed for catching slightly stronger Pokémon.",
        category: "Pokeballs",
    },
    {
        name: "Ultra Ball",
        description:
            "A high-performance Poké Ball that provides an excellent success rate for capturing wild Pokémon.",
        category: "Pokeballs",
    },
    {
        name: "Master Ball",
        description:
            "The ultimate Poké Ball with a 100% catch rate, guaranteed to catch any wild Pokémon without fail.",
        category: "Pokeballs",
    },

    // Berries
    {
        name: "Razz Berry",
        description:
            "A tasty berry that, when fed to a wild Pokémon, makes it easier to catch on the next throw.",
        category: "Berries",
    },
    {
        name: "Nanab Berry",
        description:
            "A berry that calms a wild Pokémon, making it less likely to move around or attack during a capture attempt.",
        category: "Berries",
    },
    {
        name: "Pinap Berry",
        description:
            "A special berry that doubles the amount of Candy received if the next catch attempt is successful.",
        category: "Berries",
    },

    // Other Items
    {
        name: "Incense",
        description:
            "A fragrant item that attracts wild Pokémon to the player's location for 30 minutes, increasing encounter rates.",
        category: "Other Items",
    },
    {
        name: "TM (Technical Machine)",
        description:
            "A device containing a technique that can be taught to a compatible Pokémon, expanding its movepool.",
        category: "Other Items",
    },

    // Trainer Boosts
    {
        name: "Lucky Egg",
        description:
            "A mysterious egg that doubles all experience points gained for 30 minutes, accelerating trainer growth.",
        category: "Trainer Boosts",
    },
    {
        name: "Star Piece",
        description:
            "A valuable item that increases Stardust gains by 50% for 30 minutes when activated.",
        category: "Trainer Boosts",
    },

    // Lures
    {
        name: "Lure Module",
        description:
            "A device that can be attached to a PokéStop to attract various Pokémon for 30 minutes, benefiting all nearby trainers.",
        category: "Lures",
    },
    {
        name: "Magnetic Lure Module",
        description:
            "A special lure that attracts Electric, Steel, and Rock-type Pokémon to a PokéStop for 30 minutes.",
        category: "Lures",
    },

    // Key Items
    {
        name: "Egg Incubator (Unlimited Use)",
        description:
            "A durable incubator used to hatch Pokémon Eggs through walking, featuring unlimited uses for continuous breeding.",
        category: "Key Items",
    },
    {
        name: "Super Incubator",
        description:
            "An advanced Egg incubator that reduces the walking distance required to hatch Eggs by 33%.",
        category: "Key Items",
    },

    // Evolution Items
    {
        name: "Sun Stone",
        description:
            "A peculiar stone that radiates solar energy, triggering evolution in certain species of Pokémon.",
        category: "Evolution Items",
    },
    {
        name: "King's Rock",
        description:
            "A crown-like rock that can induce evolution in specific Pokémon species when held.",
        category: "Evolution Items",
    },

    // Passes
    {
        name: "Raid Pass",
        description:
            "A special pass that grants access to Raid Battles, allowing trainers to challenge powerful Pokémon.",
        category: "Passes",
    },
    {
        name: "Premium Raid Pass",
        description:
            "An enhanced pass that provides access to multiple Raid Battles, ideal for dedicated raiders.",
        category: "Passes",
    },
];

export { default_inventory_items };
