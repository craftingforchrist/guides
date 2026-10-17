---
sidebar_position: 3
---

import Persona from '@site/src/components/Persona';

# Command Reference

<Persona who="ned">
  Half of playing well is knowing which command to reach for.
</Persona>

These are the [PGM](https://pgm.dev) commands you'll use on Mixed. Aliases are shown in brackets — any of them does the same thing. Arguments in `[square brackets]` are things you fill in.

## Joining and Teams

| Command | What it does |
| --- | --- |
| `/join [team]` (`/play`) | Join the match. Leave the team off to be placed automatically. |
| `/leave` (`/obs`) | Leave the match and return to observers. |
| `/class` (`/c`) | Pick your class, on maps that have them. |
| `/classlist` (`/classes`) | List the classes a map offers. |

## Match and Map Info

| Command | What it does |
| --- | --- |
| `/map [name]` (`/mapinfo`) | Show the current map's objectives and details (or another map's). |
| `/maps` (`/maplist`, `/ml`) | List every loaded map. Filter with `-g` gamemode, `-a` author, `-t` tags, `-n` name. |
| `/match` (`/matchinfo`) | Show info about the current match. |
| `/proximity` (`/prox`) | Show how close each objective is to being completed. |
| `/mode next` | Show the next objective mode (e.g. when a monument unlocks). |
| `/mode list` | List all objective modes for the map. |
| `/nextmap` (`/next`, `/nm`) | Show which map is playing next. |
| `/stats` | Show your stats for the current match. |
| `/list` (`/who`, `/online`) | List everyone online. |
| `/inventory [player]` (`/inv`) | View a player's inventory. |

## Voting and Rotation

| Command | What it does |
| --- | --- |
| `/votenext [map]` | Vote for the map that plays next. |
| `/vote list` | Show the maps up for the next vote. |
| `/votebook` | Get a vote book to pick from. |
| `/rot` | Show the maps in the current rotation. |
| `/rots` | List all rotations. |
| `/pool` | Show the maps in the current map pool. |
| `/pools` | List all map pools. |

## Chat and Messaging

| Command | What it does |
| --- | --- |
| `/g [message]` (`/all`, `/!`) | Send a message to everyone. |
| `/t [message]` | Send a message to your team only. |
| `/msg [player] [message]` (`/tell`, `/pm`, `/dm`) | Send a private message. |
| `/reply [message]` (`/r`) | Reply to your last private message. |

## Settings and Tools

| Command | What it does |
| --- | --- |
| `/settings` | Open the settings menu. |
| `/setting [name]` | Check a single setting's value. |
| `/toggle [setting] [option]` (`/set`) | Change a setting. |
| `/tools` (`/ot`) | Open the observer tools menu while spectating. |

:::note Staff commands

PGM also has a large set of staff-only commands for starting and cycling matches, setting the next map, forcing and shuffling teams, time limits and moderation. Those need a staff rank to use. The full list lives in the [PGM command docs](https://pgm.dev/docs/commands/main).

:::
