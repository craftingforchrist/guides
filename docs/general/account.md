---
sidebar_position: 2
---

# How to Create and Link Your Account

## Overview

Creating a website account links your Minecraft identity to your community profile. The process has three stages: registration, email verification, and in-game Minecraft verification.

## Prerequisites

- You must have joined the Minecraft server at least once before registering.
- A valid email address.

## Stage 1: Register

1. Navigate to `/register` on the website.
2. Fill in the form:
   - **Minecraft Username** — Your Java Edition username, or Bedrock username (prefixed with `.`).
   - **Email** — A valid email address you have access to.
   - **Password** — Must be at least 8 characters and contain an uppercase letter, lowercase letter, and a number.
3. Click **Register**.

## Stage 2: Verify Your Email

1. Check your inbox for a verification email. It contains a 6-digit code.
2. Enter the code on the `/register/verify-email` page.

:::caution

The code expires after 10 minutes. If it expires, restart the registration process.

:::

## Stage 3: Verify Your Minecraft Account

There are two ways to get your verification code, depending on whether you can join the main network.

### Recommended: Get your code on the main network

If you can already join the normal Minecraft network (Hub, Survival, etc.), this is the easiest way:

1. Join the server as normal.
2. Type `/verify` in chat. You'll receive a 6-digit code.
3. Submit that code using **either** of the following — you only need to do one:
   - **Option A — On the website:** Go to the `/register/minecraft` page, type the 6-digit code into the boxes, then click **Verify Minecraft Account**.
   - **Option B — In-game command:** Type `/verify 123456` in chat, replacing `123456` with your actual code. This links your account immediately without needing the website page.

### Alternative: Verification server

If you **cannot** join the main network — for example, you're banned but still need to link your account — use the standalone verification server instead:

:::caution

The verification server is separate from the main play server. Open Minecraft and add it as a new server entry — don't just click a link in your browser.

:::

1. Open Minecraft and go to **Multiplayer** (Java) or **Play → Servers** (Bedrock).
2. Add the verification server address shown on the `/register/minecraft` page (separate addresses are given for Java and Bedrock) and join it.
3. You'll be sent a 6-digit code in chat and then disconnected automatically — this is expected.
4. Submit that code on the `/register/minecraft` page as described in Option A above.

:::note

Codes expire after 5 minutes. If yours expires, run `/verify` again (no arguments) to get a new one.

:::

Once submitted, your account is fully created and activated.

## Linking Your Discord Account

Linking Discord gives you access to Discord-gated features and restores access to your open support ticket channels.

1. Go to your **Profile → Edit Profile → Connected Accounts** tab.
2. Click **Connect Discord**.
3. Authorise the app on Discord's website.
4. You'll be redirected back with your Discord account linked.

:::note

- Each Discord account can only be linked to one website account, and vice versa.
- To unlink, click **Disconnect** on the same tab.

:::

## Logging In

You can log in with:

- **Username or email + password** at `/login`
- **Discord OAuth** — click "Login with Discord" on the login page (requires a previously linked Discord account)

## Troubleshooting

| Problem | Solution |
|---|---|
| "Username not found" on registration | Make sure you've joined the server at least once with that exact username. |
| Didn't get a Minecraft verification code | Run `/verify` on the main network to request a code. If you can't join the main network (e.g. you're banned), join the **verification server** instead — its address is shown on the `/register/minecraft` page. |
| Email verification code expired | Codes expire after 10 minutes — restart the registration process from the beginning. |
| Minecraft verification code expired | Codes expire after 5 minutes — run `/verify` again to get a new one, then submit it via the website or `/verify <code>`. |
| Discord already linked to another account | A Discord account can only be linked to one website account. Contact support if needed. |
