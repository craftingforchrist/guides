---
sidebar_position: 6
---

# PVP Consent System

To promote a respectful and safe experience, we're intoducing a system that allows players to **opt in or out of Player vs Player (PVP)** combat. This feature is designed to prevent unconsented or surprise attacks and ensure that all PVP interactions are mutually agreed upon.

This page explains how the system works and how you can control your own PVP settings.

---

## **What Is the PVP Consent System?**

The PVP consent system allows you to choose whether or not you want to participate in combat with other players.

**Key Features:**

* You can **enable or disable PVP** for yourself at any time (subject to a cooldown).
* You can only fight with players who have also enabled PVP.
* Protects players from being attacked without their agreement.
* Promotes fair, friendly, and intentional gameplay.

---

## **How to Control Your PVP Status**

### **Use the `/pvp` Command**

The system is controlled through a simple command:

```
/pvp <enable|disable>
```

* `/pvp enable` — Opts you into PVP. You can fight and be fought by others who have also enabled PVP.
* `/pvp disable` — Opts you out of PVP. You are protected from PVP and cannot attack others.

Typing `/pvp` without arguments will display usage instructions.

---

## **How Consent Works**

Combat can only occur **if both players have PVP enabled**.

| Your PVP Status | Other Player's Status | Can Fight? |
| --------------- | --------------------- | ---------- |
| Enabled         | Enabled               | ✅ Yes      |
| Enabled         | Disabled              | ❌ No       |
| Disabled        | Enabled or Disabled   | ❌ No       |

If an attempted attack is blocked, both players will receive a notification explaining why no damage was dealt.

---

## **Cooldown Period**

To prevent abuse, toggling your PVP status is subject to a cooldown.

* After enabling or disabling PVP, you must wait before changing it again.
* The default cooldown is **5 minutes** (this may vary depending on server settings).
* Attempting to toggle during the cooldown will display a message like:

  ```
  You must wait X minutes and Y seconds before toggling PVP again.
  ```

---

## **Common Issues & Troubleshooting**

| Problem                      | Solution                                              |
| ---------------------------- | ----------------------------------------------------- |
| Can't use the `/pvp` command | You may not have permission — contact a staff member  |
| Can't toggle PVP             | Wait for the cooldown to expire                       |
| Attacks don't deal damage    | Ensure both you and the other player have PVP enabled |

---

## **Need Help?**

If you're unsure about how this works or experience any issues, please reach out to a server staff member. We're here to help!

---

**Thank you for helping us create a safe, fair, and respectful community for everyone.**
