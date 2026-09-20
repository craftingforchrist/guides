---
sidebar_position: 6
---

import Persona from '@site/src/components/Persona';

# PVP Consent System

<Persona who="theo">
  Nobody should have to fight when they didn't agree to.
</Persona>

To promote a respectful and safe experience, you can opt in or out of Player vs Player (PVP) combat. This feature is designed to prevent unconsented or surprise attacks and ensure that all PVP interactions are mutually agreed upon.

This page explains how the system works and how you can control your own PVP settings.

## What Is the PVP Consent System?

The PVP consent system allows you to choose whether or not you want to participate in combat with other players.

**Key Features:**

* You can enable or disable PVP for yourself at any time (subject to a cooldown).
* You can only fight with players who have also enabled PVP.
* Protects players from being attacked without their agreement.
* Promotes fair, friendly, and intentional gameplay.

## How to Control Your PVP Status

### **Use the `/pvp` Command**

The system is controlled through a simple command:

```
/pvp <enable|disable>
```

* `/pvp enable` — Opts you into PVP. You can fight and be fought by others who have also enabled PVP.
* `/pvp disable` — Opts you out of PVP. You are protected from PVP and cannot attack others.

Typing `/pvp` without arguments will display usage instructions.

## How Consent Works

Combat can only occur if both players have PVP enabled.

| Your PVP Status | Other Player's Status | Can Fight? |
| --------------- | --------------------- | ---------- |
| Enabled         | Enabled               | ✅ Yes      |
| Enabled         | Disabled              | ❌ No       |
| Disabled        | Enabled or Disabled   | ❌ No       |

If an attempted attack is blocked, both players will receive a notification explaining why no damage was dealt.

## Draw Your Weapon First

The `/pvp` system decides whether damage can happen at all. On top of that, our rules ask for one more thing: no PVP unless weapons are drawn by all parties.

In practice that means opting in isn't an invitation on its own. Someone with PVP enabled while they're farming or building hasn't agreed to a fight — they've just left the option open. Give them a moment to draw a weapon, and if they don't, leave them be.

:::info Why both

The plugin protects people who want no part in PVP at all. The weapons-drawn rule protects the people who do, from being jumped while they're mid-build. One is enforced by the server, the other by you.

:::

## Cooldown Period

To prevent abuse, toggling your PVP status is subject to a cooldown.

* After enabling or disabling PVP, you must wait before changing it again.
* The default cooldown is 5 minutes (this may vary depending on server settings).
* Attempting to toggle during the cooldown will display a message like:

  ```
  You must wait X minutes and Y seconds before toggling PVP again.
  ```

## Common Issues & Troubleshooting

| Problem                      | Solution                                              |
| ---------------------------- | ----------------------------------------------------- |
| Can't use the `/pvp` command | You may not have permission — contact a staff member  |
| Can't toggle PVP             | Wait for the cooldown to expire                       |
| Attacks don't deal damage    | Ensure both you and the other player have PVP enabled |

## Need Help?

If you're unsure about how this works or experience any issues, please reach out to a server staff member. We're here to help!

Thank you for helping us create a safe, fair, and respectful community for everyone.
