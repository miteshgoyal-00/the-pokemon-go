# Notes for API further development and ideas to implement

## for catching pokemon

- logic for assigning green to red rgb color for the circle circulating pokemon as per the pokemon lvl cp and pokeball and berry fed.
- logic for pokemon will be caught or not
- logic for ball thrown is good great excellent (and is it curveball or not)

## in the pokedex pokemons model

- how many candies are needed for evolution of each pokemon
- is the pokemon capable of mega evolution

## in the instance pokemons model

- the xl candies concept (if pokemon will give how many xlCandies when caught)
- how much cp a pokemon will have at variuos levels.
- candies and stardust required to level up the pokemon
- after how many power ups the pokemon will go to next level (or increment by 1/2 level)

## in trainee mode

- if a pokemon is capable for mega evolution (how many mega candies trainee holds for evolution)
- the location concept
- longitude and latitude will be stored and updated as per trainee's location

## pokestops concept

- location with longitude and latitude
- place name created at
- created by (ref trainee)
- trainee will also store the id of pokestop created by him/her
- trainee can open a pokestop only after lvl 40

## gypms concept

- location with longitude and latitude
- team (blue, red, yellow, null)
- pokemons at gym (ref trainee -> ref his/her instancePokemons id)
- trainee will have array of objects for storing gym name, location, badge at gym, and the points at gym.

## research tasks

- each trainee will have max 5 research fields (each with a reward)
- tasks can be taken from pokestop or gym
- on completion of task trainee will get rewarded and task will be cleared
- there will be a stamps timeline (daily one stamp can be earned by completing atleast 1 task)
- stamp will be as of date name, and after 7 stamps grand reward will be given to trainee.
- ofcourse trainee model will have property to store the date stamps
