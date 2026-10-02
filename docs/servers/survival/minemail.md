---
sidebar_position: 10
---

import Persona from '@site/src/components/Persona';

# MineMail

<Persona who="ned">
  A letter waiting at the door says someone was thinking of you.
</Persona>

**Overview:**
MineMail is Survival's postal system. You build a mailbox out of a barrel, then send letters, items and money to other players' mailboxes, even when they're offline. You can also share a mailbox with friends or run one together as a group.

🎥 **Watch the intro video:** [MineMail on YouTube](https://youtu.be/aLBKRlkRRo4)

All MineMail commands start with `/minemail`, or the shorter `/mail` or `/mm`. Typing `/mail` on its own shows the help menu.

### Setting Up a Mailbox

1. **Place a barrel** where you want your mailbox.
2. **Run the create command** with a name for your mailbox:

   ```
   /mail create <name>
   ```

   For a name with spaces, put it in quotes: `/mail create "Front Door"`.

3. **Left-click the barrel with a stick** within 60 seconds.
4. A name tag appears above the barrel. Your mailbox is ready.

Only barrels can be mailboxes. Once it's set up, nobody else can break it, and explosions, pistons and hoppers can't touch it.

### Giving Your Mailbox a Name and Description

Your mailbox's name and description show up in the Mailbox Directory, so other players can see what it is and who it belongs to.

1. Right-click your mailbox.
2. Click **Manage Mailbox** (the comparator in the bottom-right corner).
3. Click the **name tag** to rename it, or the **book** to edit the description.
4. Type in the box that pops up and confirm.

Descriptions can be up to 128 characters, so keep them short.

### Checking Your Mail

* **Right-click your mailbox** to open it, or use `/mail open <mailbox>` from anywhere.
* `/mail list` shows the mailboxes you can read and how many new letters each one has.
* When new mail arrives, you get a message in chat, and the name tag above the barrel shows how many letters are unread. If you were offline, you're told when you next join.

Unread letters show as a **map**, and letters you've read show as **paper**. Click a letter to read it. If it has items or money attached, click them to collect them.

To throw a letter away, open it and click **Delete Mail** (the lava bucket). If something is still attached, you're asked whether to collect it first.

### Sending Mail

1. **Start a letter** in one of two ways:
   * Use `/mail send <player>`. If they have more than one mailbox, you'll be asked to pick one. You can name it straight away too: `/mail send Steve "Front Door"`.
   * Open your own mailbox and click **Compose Mail** (the book and quill in the bottom-left corner). Then click the **player head** at the top to choose who it's going to.
2. **Click the name tag** to set a subject.
3. **Click the book and quill** to write your message.
4. **Add items** by placing them in the empty row. You can attach up to 9 stacks.
5. **Click the gold ingot** to attach money from your balance, if you want to.
6. **Click Send Mail** (the emerald).

Your items and money stay yours until the letter is actually delivered. If the other mailbox is full or the payment doesn't go through, nothing is taken from you. If you close the menu or disconnect partway through, your attached items come back to you.

:::info Anyone can post to any mailbox

You don't need permission to send someone mail. That's what a mailbox is for. You only need access to **open** a mailbox and read what's inside.

:::

### Read Receipts

When someone reads a letter you sent, you get a message telling you who read it. If you'd rather not get them, use `/mail receipts` to turn them off, and run it again to turn them back on.

### The Mailbox Directory

```
/mail directory
```

The directory lists every mailbox on the server, with its name, owner, coordinates, dimension and description. Use it to find a friend's mailbox, or to go and see a spot someone has marked.

### Sharing a Mailbox

You can let a trusted player **view** your mailbox. They can read your mail, but they can't take anything out of it, delete letters or mark them as read.

* `/mail share <mailbox> <player>` gives a player view-only access.
* `/mail unshare <mailbox> <player>` takes it away.

You can also do this from the menu: right-click your mailbox, click **Manage Mailbox**, then **Manage Access** (the player head).

If you want friends to be able to collect from a mailbox too, use a group instead.

### Group Mailboxes

A group is a mailbox you share and run with other people, like a town post office or a team base. Everyone in the group can open it, read the mail and collect from it.

**Setting one up:**

1. Create a group: `/mail group create <name>`
2. Hand one of your mailboxes to it: `/mail group link <group> <mailbox>`
3. Add your friends: `/mail group add <group> <player>`

**Roles:**

| Role    | What they can do                                                         |
| ------- | ------------------------------------------------------------------------ |
| Owner   | Everything, including deleting the group and its mailboxes.              |
| Manager | Read and collect, plus add and remove members, rename, edit the description and change the look. |
| Member  | Open the mailbox, read mail and collect items and money.                 |

Collecting is first come, first served. Once one member takes an item, it's gone for everyone else in the group.

**Group commands:**

| Command                                     | What it does                                       |
| ------------------------------------------- | -------------------------------------------------- |
| `/mail group create <name>`                 | Create a group you own.                            |
| `/mail group delete <name>`                 | Delete your group. Its mailboxes must be empty.    |
| `/mail group link <group> <mailbox>`        | Hand one of your mailboxes to a group.             |
| `/mail group unlink <mailbox>`              | Take a mailbox back out of its group.              |
| `/mail group add <group> <player>`          | Add a member.                                      |
| `/mail group remove <group> <player>`       | Remove a member.                                   |
| `/mail group promote <group> <player>`      | Make a member a Manager.                           |
| `/mail group demote <group> <player>`       | Make a Manager a member again.                     |
| `/mail group transfer <group> <player>`     | Hand ownership of the group to another member.     |
| `/mail group list`                          | See the groups you belong to.                      |
| `/mail group info <group>`                  | See a group's members, roles and mailboxes.        |

Owners and Managers can also manage members from the menu: open the group mailbox, click **Manage Mailbox**, then **Manage Group**.

### Customising Your Mailbox

From **Manage Mailbox** you can also:

* **Toggle Hologram** (glowstone dust): show or hide the name tag above the barrel.
* **Mailbox Particle** (blaze powder): pick a particle effect for your mailbox. You'll only see this button if you've unlocked at least one particle.

### Removing a Mailbox

A mailbox has to be empty before you can remove it, so collect or delete all its letters first. Then either:

* break the barrel, or
* use `/mail delete <name>`, or
* click **Delete Mailbox** (the lava bucket) in **Manage Mailbox**.

Only the mailbox's owner can remove it.

### Mailbox Tours

Staff sometimes run tours that visit players' mailboxes one after another, live on stream. Every mailbox on the server can be a stop, and its name, owner and description are what we read out when we get there. A good description is the easiest way to make sure your spot gets the attention it deserves.

:::tip The End of the World Tour

The world as we know it is closing soon, and we're giving it a send-off with a live tour of its most memorable places. Every location on the tour will be kept in the vault, so a piece of this world lives on after it closes.

**Nominate a spot:**

1. Go to the spot in-game and set up a mailbox there.
2. Give it a name and a short description (who built it, and why it's special).
3. Drop a letter in it with the full story. A sentence or two is perfect, and we may read it out on stream.

Anything goes: your own build, a friend's masterpiece, a community landmark, or a random spot with a story behind it.

⏰ **Mailboxes must be placed by:** Monday 5th October, 6am Sydney time (AEST).

📺 **Catch the stream:** Monday 5th October at 7am AEST, live on [youtube.com/@shadowolf4607](https://youtube.com/@shadowolf4607).

:::

### Command Summary

| Command                                  | What it does                                        |
| ---------------------------------------- | --------------------------------------------------- |
| `/mail`                                  | Show the help menu.                                 |
| `/mail create <name>`                    | Start setting up a mailbox.                         |
| `/mail delete <name>`                    | Remove one of your mailboxes (it must be empty).    |
| `/mail list`                             | List the mailboxes you can read.                    |
| `/mail open <mailbox>`                   | Open one of your mailboxes from anywhere.           |
| `/mail send <player> [mailbox]`          | Write a letter to a player.                         |
| `/mail directory`                        | Browse every mailbox on the server.                 |
| `/mail share <mailbox> <player>`         | Give a player view-only access.                     |
| `/mail unshare <mailbox> <player>`       | Take view-only access away.                         |
| `/mail receipts`                         | Turn read receipts on or off.                       |
| `/mail group ...`                        | Manage group mailboxes (see above).                 |

### Troubleshooting & Common Issues

* **Left-clicking the barrel does nothing:** Run `/mail create <name>` first, make sure you're holding a stick, and click within 60 seconds.
* **"You don't have access to this mailbox":** That mailbox belongs to someone else. You can still send them mail with `/mail send <player>`.
* **Can't remove your mailbox:** It still has mail in it. Open it, collect what's attached and delete the letters, then try again.
* **Mail won't send:** The other mailbox might be full, or you might not have enough money for what you've attached. Nothing is taken from you when a send fails.
* **Your mailbox name has spaces:** Put it in quotes, like `/mail open "Front Door"`.
* **Lost something in the mail:** Every item and money movement is logged. Contact staff and they can look into it. See [I need help!](../../general/need-help.md)
