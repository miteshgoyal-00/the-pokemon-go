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

> buddy
  * ref Pokemon
  * level

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
> FN - calculateLevel(this.xp)
```
