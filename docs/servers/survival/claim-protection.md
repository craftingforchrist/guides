---
sidebar_position: 5
---

# Land Claims & Protection

**Overview:**
Protecting your builds is one of the most important parts of playing on the server. Our land claim system ensures that no one can break, place, or steal in your area without your permission — keeping your creations safe from griefing.

This guide will walk you through everything you need to know about land claims, from basic setup to advanced permissions and effective claim management.

---

### Why Use Land Claims

Land claims prevent griefing by giving you full control over who can build, interact with containers, or modify anything inside your claimed area. If you want to share access with friends, you can do so on your own terms.

---

### Getting Started with Claims

**Using the Golden Shovel:**

1. Get a golden shovel (craft one or grab one from your inventory).
2. Right-click the ground to set the first corner of your claim.
3. Move diagonally across to the opposite corner and right-click again to set the second corner.
4. Your claim will be created, and glowing borders will briefly appear showing the protected area.

**Resize or Expand Your Claim:**
Right-click one of the corners with the golden shovel to move it. Adjust until your claim fully covers your build.

---

### Quick Claim Command

**Command:** `/claim`
Creates a claim where you are standing. The size depends on your available claim blocks.

**How to Use:**

1. Stand in the area you want to claim.
2. Type `/claim` in chat.
3. The land will be protected using your available claim blocks.

---

### Managing Permissions

Granting or removing permissions allows you to control who can interact with your land.

**Basic Commands:**

* `/trust [player]` – Grants a player permission to build and interact in your claim.
* `/untrust [player]` – Revokes permissions for a specific player.
* `/untrust all` – Removes all trusted players from the claim.
* `/trustlist` – Displays a list of players trusted in your claim.

**Advanced Trust System:**
While standing in your claim, you can use:
`/gd trust player <player_name> <type>`

**Trust Types:**

* public – Trusts everyone to access your claim.
* accessor – Allows a player to use doors, buttons, and switches.
* container – Grants access to chests, furnaces, and hoppers.
* builder – Grants full build access.

**Example:**
To grant player shadowolfyt build permissions:
`/gd trust player shadowolfyt builder`

---

### Abandoning Claims

**Commands:**

* `/abandonclaim` – Deletes the claim you are standing in.
* `/abandonallclaims` – Deletes all of your claims.

**Important:** Abandoning a claim will remove all protections, and the land becomes available for others to claim.

---

### Additional Features

* `/claimexplosions` – Toggles whether explosions are allowed in your claim.
* `/buyclaimblocks [amount]` – Purchases additional claim blocks using in-game currency.

**Example:**
To buy 100 extra claim blocks: `/buyclaimblocks 100`

---

### Tips for Effective Land Management

* Claim early to secure your land before building too much.
* Use `/claim` or `/claimslist` to check your available claim blocks.
* Only trust players you know and remove access with `/untrust` if needed.
* Leave a buffer between your claim and others for paths and expansion.
* Regularly review permissions using `/trustlist`.
* Be careful when abandoning claims — protection is removed instantly.
* Expand your land protection by earning more claim blocks through play or purchasing them.

---

### Troubleshooting & Common Issues

* **Claim Overlap:** You cannot claim land that overlaps another player's claim. Look for the glowing borders to find free space.
* **Not Enough Claim Blocks:** Buy more with `/buyclaimblocks [amount]` or earn more by playing.
* **Accidental Claim:** Stand inside the claim and run `/abandonclaim` to delete it.
* **Unknown Permissions:** Use `/trustlist` while inside your claim to see who has access.