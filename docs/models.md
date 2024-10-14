#

## Achievement Model

```markdown
> title
> description
> dateAchieved
```

## Badge Model

```markdown
> name
> dateEarned
```

## Buddy History Model

```markdown
> specy (ref InstancePokemon)
> chosenDate
> swapDate
> totalDaysTogether (number)
> walkDistance (number)
> treatsFed (number)
> playedTogether (number)
> battlesTogether (number)
> snapshotsTaken (number)
> newPlacesVisited (number)
> routesFollowedTogether (number)
```

## Instance Pokemon Model

```markdown
> pokedexSpecyId (ref Pokedex)
> level (number)
> cp (number)
> weight
> height

> iv (object)
  * attack (1 - 15)
  * defense (1 - 15)
  * hp (1 - 15)

> gender (String with Enums) - "Male", "Female", "Null"

> fastTM (object)
  * name
  * power (number)

> chargedTMs (object with subobjects)
  * ctm1 {name, power}
  * ctm2 {name, power}
  * total (number with enums 1 or 2)

> spawnedAt (string)
> owner (ref Trainee)
```

## Invetory Item Model

```markdown
> name
> description
> category (string)
  * enum: "Medicine", "Pokeballs", "Berries", "Gifts",
    "Trainer Boosts", "Other Items", "Passes",
    "Lures", "Key Items", "Evolution Items"
```

## Pokedex Pokemon Model

```markdown
> specy (string)
> type (array with enum strings)
> weight
> height
> candiesHolded (number)
> evolutionStage (number)
> evolutions (ref PokedexPokemon)
```

## Quest Model

```markdown
> name
> description
> dateStarted
```

## Trainee Model

```markdown
> name (unique)

> linkedPlatforms
  * platforms (array - Google, Facebook)
  * googleId (string)
  * facebookId (string)

> level (number 1-50)
> xp (number) (to reach next level)
> totalXp (number) (lifetime)
> team (Mystic, Valor, Instinct)
> pokecoins (number)
> stardust (number)
> distanceWalked
> pokemonsCaught
> pokestopsVisited
> startDate

> pokemons (array with objects)
  * specy (ref InstancePokemon)
  * candies (number)
  * xlCandies (number)
  * isFavourite (Boolean)
  * isBuddy (Boolean)

> buddyHistory (array with ref objects)
  * ref BuddyHistory

> buddy
  * ref InstancePokemon
  * hearts (0 - 30)
  * status (string)
    - enum["Good Buddy", "Great Buddy", "Ultra Buddy", "Best Buddy"]
  * bonuses (array of strings)
    - enum["Adventuring Buddy", "Readable Mood", "Catch Assist",
        "Find Presents", "Find Locations", "Find Souvenirs",
        "CP Boost", "Best Buddy Ribbon"]
  * walkDistance
  * treatsFed
  * playedTogether
  * battlesTogether
  * snapshotsTaken
  * newPlacesVisited
  * routesFollowedTogether

> badges (array with ref objects)
  * ref Badge

> friends (array with objects)
  * ref Trainee
  * level

> achievements (array with objects)
  * ref Achievement

> inventory (array with objects)
  * item (ref InventoryItem Model)
  * quantity

> quests (array with objects)
  * questId (ref Quest)
  * status (enum - Not Started, In Progress, Completed)

> createdAt
> updatedAt

> this.pre('save')
> FN - updateBuddyStatus()
> FN - calculateLevel(this.xp)
> FN - genToken(type)
```
