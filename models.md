#

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

> pokemons (array with objects)
  * ref Pokemon

> buddyHistory
  * ref Pokemon
  * chosenDate
  * swapDate
  * totalDaysTogether
  * walkDistance
  * treatsFed
  * playedTogether
  * battlesTogether
  * snapshotsTaken
  * newPlacesVisited
  * routesFollowedTogether

> buddy
  * ref Pokemon
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

> badges (array with objects)
  * name
  * dateEarned

> friends (array with objects)
  * ref Trainee
  * level

> achievements (array with objects)
  * title (string)
  * description
  * dateAchieved (date)

> inventory (array with objects)
  * item (ref InventoryItem Model)
  * quantity

> quests (array with objects)
  * questId (ref Quest)
  * status (enum - Not Started, In Progress, Completed)

> this.pre('save')
> FN - updateBuddyStatus()
> FN - calculateLevel(this.xp)
```
