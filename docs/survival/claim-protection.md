---
sidebar_position: 5
---

# Claim Protection

This guide will walk you through the basic commands needed to protect your land and manage permissions efficiently.

---

## Basic Commands and Usage

### Claiming Land
| Command    | Description                                                                              |
| ---------- | ---------------------------------------------------------------------------------------- |
| **/claim** | Creates a claim where you are standing. The size depends on your available claim blocks. |

#### How to Use:
1. Stand in the area you want to claim.
2. Type `/claim` in chat.
3. The land will be protected using your available claim blocks.

---

### Managing Permissions
| Command               | Description                                                     |
| --------------------- | --------------------------------------------------------------- |
| **/trust [player]**   | Grants a player permission to build and interact in your claim. |
| **/untrust [player]** | Revokes permissions for a specific player in your claim.        |
| **/untrust all**      | Removes all trusted players from the claim.                     |
| **/trustlist**        | Displays a list of players trusted in your claim.               |

#### Advanced Trust System
While standing in your claim, run the command:
```
/gd trust player <player_name> <type>
```
Enter the player name you want to give access to on your claim, and then specify the type of access. Types include:
- **public** - trusts all users to access your claim.
- **accessor** - grants a player access to interact with all blocks except their inventory.
- **container** - grants a player access to interact with all blocks including inventory.
- **builder** - grants a player access to build on your claim.

Example:
To grant player `shadowolfyt` access to build on your claim, run this command while standing in it:
```
/gd trust player shadowolfyt builder
```

---

### Abandoning Claims
| Command               | Description                            |
| --------------------- | -------------------------------------- |
| **/abandonclaim**     | Deletes the claim you are standing in. |
| **/abandonallclaims** | Deletes all of your claims.            |

#### Important Notes:
- Abandoning a claim will remove all protections.
- Abandoned land becomes unclaimed and can be claimed by others.

---

### Additional Features
| Command                      | Description                                               |
| ---------------------------- | --------------------------------------------------------- |
| **/claimexplosions**         | Toggles whether explosions are allowed in your claim.     |
| **/buyclaimblocks [amount]** | Purchases additional claim blocks using in-game currency. |

#### Example:
- To buy 100 extra claim blocks: `/buyclaimblocks 100`

---

## Tips for Effective Land Management
- **Check your available claim blocks** using `/claim` before attempting to claim a large area.
- **Use `/trustlist` regularly** to manage who has access to your claim.
- **Be cautious with `/abandonclaim`** as it removes protection instantly.
- **Buy more claim blocks** if needed to expand your land protection.