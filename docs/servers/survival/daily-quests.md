---
sidebar_position: 8
---

import Persona from '@site/src/components/Persona';

# Daily Quests

<Persona who="finn">
  Everyone gets the same quest. That's what makes the leaderboard mean something.
</Persona>

**Overview:**
Every day the Quest Keeper sets one task for the whole server. Complete it and you earn a **Quest Point**, build your **streak**, and climb the leaderboard.

Quest Points aren't in-game money — they're a separate currency you spend in the Quest Shop on teleport scrolls, chat colours and other perks.

This page covers how quests work, what you can spend points on, and how the Teleport Scroll system works.

---

### The Daily Quest

**There's one quest per day, and it's the same for everybody.** You can complete it once. There's no race — you're not competing for it, you're just each doing it.

A new quest is generated every day, and it's announced in chat when it changes.

:::info Reset isn't exactly midnight

The server checks for the date change every 5 minutes, so a new quest can appear up to five minutes after midnight server time. Nothing's broken if it's a little late.

:::

---

### Finding Out What It Is

Two ways:

* **Right-click the Quest Keeper NPC** — he'll tell you the task and how you're going.
* **`/qk show`** — displays today's quest, the target, and the reward from anywhere.

---

### Two Kinds of Quest

**Turn-in quests** need you to come back to the Quest Keeper:

| Quest | What to do |
| --- | --- |
| **Item delivery** | Gather a set number of an item, then right-click the NPC. The items are taken from you on turn-in. |
| **Mob delivery** | Herd passive mobs to within about 6 blocks of the NPC. Cows, sheep, pigs, chickens, rabbits and goats only — and they're removed when you turn them in. |

**Automatic quests** complete themselves the moment you finish:

| Quest | What to do |
| --- | --- |
| **Exploration** | Visit a target biome. Completes the instant you arrive. |
| **Structure discovery** | Find a village, stronghold, monument, fortress, bastion, outpost, mansion or desert pyramid. |
| **Combat** | Kill a number of a particular mob. Variants count — a husk counts as a zombie, a stray as a skeleton. |
| **Crafting** | Craft a number of an item. |
| **Villager trading** | Complete a number of villager trades. |
| **Biome collection** | Gather something from the biome it naturally occurs in — cocoa beans in jungle, cactus in desert, and so on. |

:::warning Things that won't count

* **Only your own direct kills** count for combat quests — not your wolf's, not fall damage, not another player's.
* **Only items crafted after the quest started** count. Crafting ahead doesn't work.
* **Blocks you placed yourself never count** for biome collection. Placing and re-breaking cactus is tracked and ignored.

:::

Quests are built to take **5 to 30 minutes** for an average player. You won't be asked for ancient debris, elytra or a dragon kill. The Quest Keeper also won't set the same task two days running.

---

### Timed Quests

Occasionally a quest comes with a countdown, shown as a boss bar across the top of your screen reading **Quest Expires In**.

* The clock starts the first time you're online with that quest, not at midnight.
* Running out of time fails the quest for that day.
* You can buy extra time from the Quest Shop if you're running short.

Most days aren't timed — it's an occasional thing.

---

### Points and Streaks

**Every quest awards 1 Quest Point.** Every quest, regardless of type or difficulty.

Your **streak** counts consecutive days completed. Miss a day and it resets to 1.

:::info Streaks don't add points yet

Your streak is tracked and displayed, but it doesn't currently earn bonus points — every completion is worth exactly 1 QP. Bonus scaling is planned for later.

:::

Check yours with **`/qk points`**.

---

### The Leaderboard

**`/dailytask top`** shows the top players by lifetime quests completed, ten per page.

Add a page number for the rest: `/dailytask top 2`.

---

### The Quest Shop

Open it with **`/qshop`**. Everything is priced in Quest Points.

| Item | Cost | What it does |
| --- | --- | --- |
| **Teleport Scroll** | 3 QP | 3 scroll charges |
| **Streak Shield** | 8 QP | Saves your streak if you miss one day. Spent automatically. You can hold one at a time. |
| **Timed Quest Extension** | 4 QP | Adds 2 minutes to a timed quest you're currently on. Up to 3 per quest. |
| **Chat Colour** | 5 QP | Colours your chat messages for 7 days. Twelve colours to pick from. |
| **Completion Effect** | 6 QP | A cosmetic effect when you finish a quest — Firework Burst, Lightning Flash, Bell Chime, XP Swirl or Totem Glow. |

:::tip Completion effects are a one-off purchase

Once you've unlocked an effect it's yours permanently, and you can switch freely between the ones you own at no cost.

:::

**Streak Shields are the one to buy first** if you're building a long streak — they're spent automatically on the day you miss, so you don't need to remember anything.

---

### Teleport Scrolls

Scrolls are bought from the Quest Shop and used with **`/tscroll`**.

| Command | What it does |
| --- | --- |
| `/tscroll` | Opens the scroll menu |
| `/tscroll balance` | Shows how many charges you have left |
| `/tscroll warp` | Teleports you to a set destination |
| `/tscroll player <name>` | Asks to teleport to a player |
| `/tscroll accept` / `/tscroll deny` | Answers a request someone's sent you |

**How a player teleport works:**

1. You send the request. They have **30 seconds** to accept before it expires.
2. Once accepted, you must **stand still for 10 seconds**. Moving cancels it.
3. After a successful teleport, scrolls go on a **30-minute cooldown**.

**When scrolls won't work:**

* **In combat** — you're tagged for 10 seconds after taking or dealing damage.
* **In PvP-enabled worlds.**
* **To a player who hasn't opted into PvP.** Our [PVP consent system](./pvpconsent) applies here too — if someone has PVP off, you can't scroll to them. It stops scrolls being used to drop in on someone unexpectedly.

---

### Common Questions

**I completed the quest but got nothing.**
Check you haven't already completed it today — one completion per player per day. For turn-in quests, you need to be right-clicking the Quest Keeper with the items actually in your inventory.

**My streak reset and I did play yesterday.**
Streaks count days you *completed the quest*, not days you logged in. If you had a Streak Shield it would have been spent automatically — check `/qk points`.

**Can I do old quests I missed?**
No. Each day's quest is gone once the day is.

**I broke 30 cactus and nothing happened.**
If you planted it, it won't count. Biome collection only credits naturally generated blocks, broken in the right biome.

Still stuck? Open a ticket on our [Discord](https://craftingforchrist.net/discord).
