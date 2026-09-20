---
sidebar_position: 7
---

import Persona from '@site/src/components/Persona';

# Farms, Redstone & Server Lag

<Persona who="ned">
  Your farm runs on the same server everyone else is playing on.
</Persona>

**Overview:**
We love a good farm. Big automated builds are some of the most impressive things on the server, and we don't want to discourage them.

The catch is that our Survival world runs on one machine shared by everyone online. A farm that's a bit too enthusiastic doesn't just lag you — it lags the player fighting in the Nether and the player building in the Shopping District too.

This page explains what causes that, what we restrict, and how to build big without causing problems. It's the long version of the lag and farms rules in our [Network Rules](https://craftingforchrist.net/rules).

### Why Lag Happens

Two things cost the server most of its effort:

* **Entities** — items, mobs, minecarts, armour stands, dropped XP. Every one of them has to be tracked and updated constantly.
* **Redstone updates** — every time a redstone component changes state, the server recalculates that area.

A farm that produces items faster than they're collected, or a clock that ticks constantly whether or not anyone is nearby, quietly builds up cost until everyone notices.

### Fit an On/Off Switch

Every automated farm should have a way to turn it off. This is the single most useful thing you can do.

It means you can shut it down when you're away, and it means Staff can switch it off rather than remove it if it starts causing problems. A lever on a lava blade or a torch breaking a clock line is all it takes.

:::tip This is a requirement in the Community District

All automated farms in the Community District must have an on/off switch, since anyone might be building nearby.

:::

### Excessive Entities

If a farm produces so many entities that it causes noticeable lag, the offending entities — and the farm — may be removed.

Some practical ways to stay clear of that:

* Make sure output actually reaches a hopper or chest rather than piling up on the floor
* Kill mobs promptly instead of letting them stack in a holding area
* Use water streams and hoppers rather than letting items scatter
* Check your item counts occasionally — a blocked hopper can turn a fine farm into a problem one overnight

### Redstone Clocks

Unreasonable redstone clocking counts as knowingly degrading Network resources.

The usual offenders are clocks left running permanently in loaded chunks doing nothing useful. If a clock only needs to run while you're using the farm, wire it to your on/off switch.

### Flying Machines

**Allowed:** small flying machines for elevators, complex doors, mob and block transport, storage systems and minigames. These are great, and we're happy to see them.

**Not allowed:** flying machines carrying TNT — commonly called world-eaters. They clear enormous areas, generate huge numbers of block updates and entities, and permanently reshape terrain other players may be using.

### TNT Duplication

* Stationary dupers are fine for small farms.
* Flying TNT dupers are not allowed at all.
* Stationary dupers at scale aren't allowed either — if it's feeding a world-eater-sized operation, it's over the line.

### Restricted Farms

Some farms are held back until The End has been beaten on the server:

* Enderman farms
* Gold farms
* Iron farms

These can't be built until The End is free. It's a progression thing rather than a lag thing — these farms trivialise resources the server is still working towards together.

### The End's Outer Islands

The End's outer islands are reset every 3 months.

This keeps fresh chorus fruit, end cities and elytra available for newer players. It also means anything you build or store out there will eventually be wiped.

:::warning Don't store anything valuable on the outer islands

The Staff Team isn't responsible for builds or items lost in a reset. The main island isn't affected.

:::

### AFK Players

Senior Staff may remove players who have been AFK for an extended period.

It isn't a punishment and it isn't personal — an idle player still keeps chunks loaded and entities ticking. If you're asked to come back or log off, that's why.

### If Your Build Gets Flagged

If something you've built is causing lag, we'd much rather work with you than knock it down. In most cases Staff will get in touch, explain what they're seeing, and give you a chance to fix it yourself.

Farms are usually only removed outright when the owner can't be reached or the problem is severe and ongoing.

If you're planning something ambitious and want to check it first, open a ticket on our [Discord](https://craftingforchrist.net/discord). We're always happy to look over a design before you spend three weekends building it.
