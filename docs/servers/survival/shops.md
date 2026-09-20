---
sidebar_position: 9
---

import Persona from '@site/src/components/Persona';

# Shops & Economy

<Persona who="ned">
  Ask before you build. Neighbours remember.
</Persona>

**Overview:**
Survival has a player-run economy. You earn currency by playing, then spend it at other players' chest shops, or set up a shop of your own to buy and sell items.

This guide walks you through everything in one place: how currency works, using a shop, creating and managing your own, removing it, and finding shops with the Shop Directory.

### How Currency Works

Our server uses Diamonds as currency, on a simple 1-to-1 basis: 1 Diamond = $1.

This is a true survival economy:

* All currency is earned in-game (mining, farming, trading).
* No one can buy currency or items with real money.
* Prices are set by players, not the server.

This keeps the economy balanced and ensures fair play for everyone.

**Getting Currency:**

1. Find and mine Diamonds.
2. Use `/sell Diamond`, or hold your Diamonds and use `/sell hand`.
3. You'll get a message confirming your balance has been updated.

**Checking Your Balance:** Use `/bal` or `/balance`.

**Getting Your Diamonds Back:**
Go to spawn and find the Admin Shop, where you can buy Diamonds back using your balance.

![Red Currency Tent](./img/currency/red-tent.png)

### Using a Shop

:::warning

When we talk about funds and purchases at Player Chest Shops, this always means in-game currency. You cannot use real money to get in-game currency.

:::

1. Check you have enough funds with `/bal`.
2. Go up to the shop's chest and left-click the sign.
3. The shop will ask you in chat how many items you want. Type the number.
4. Your items are traded straight away.

![Using a shop](./img/shop/using-a-shop.png)

### Creating Your Own Shop

1. Place a chest where you want your shop.

   ![Place a chest](./img/shop/place-chest.png)

2. **Look at the chest and run the create command:**
   * Holding the item in your hand: `/qs create [price]`
   * Not holding the item: `/qs create [price] [item]`

   The price is per item.

3. **Check the sign.** If the shop was set up correctly, a shop sign appears on the front of the chest showing your name, what the shop is doing, the item and the price.

   ![A selling shop](./img/shop/shop-mode-1.png)

   *This shop is selling 64 Diamonds at $1 each.*

4. **Stock your shop.** For a selling shop, put the items you're selling in the chest.

### Managing Your Shop

**Shop Settings Menu:**
Right-click your shop sign to open the Shop Control panel in chat. From here you can change the shop mode, change the price, toggle the floating display item, or remove the shop.

![Shop settings](./img/shop/shop-settings.png)

**Shop Modes:**
Look at your shop sign and use:

* `/qs sell` – Selling shop. Other players buy items from you. You earn money.
* `/qs buy` – Buying shop. Other players sell items to you. They're paid from your balance.

![A buying shop](./img/shop/shop-mode-2.png)

*This shop is buying up to 1664 Diamonds at $1 each.*

**Changing the Price:**
Look at your shop sign and use `/qs price [new price]`.

**Example:**
To change your shop's price to $5 each: `/qs price 5`

### Removing a Shop

**Commands:**

* `/qs remove` – Removes the shop you're looking at. Look directly at the shop's sign or chest first.
* `/qs removeall` – Removes all of your shops.

After removing a shop, you can break the chest as normal.

### Finding Shops: The Shop Directory

The Shop Directory lets you search every Player Chest Shop on Survival by item, without walking around to find them.

**On the Website:**
Go to [craftingforchrist.net/shopdirectory](https://craftingforchrist.net/shopdirectory) and search by Material (the item being bought or sold, minimum 2 characters).

Each result shows the seller's username, item quantity, price, stock status, and the shop's in-game coordinates so you can go straight to it.

**In Discord:**

```
/shopdirectory material:<item> [type:buying|selling]
```

Results appear as a paginated embed, up to 8 shops per page, with the same seller, price, stock and coordinate info as the website. Use the buttons to page through results.

The directory pulls live data directly from shops set up in-game. There is no separate in-game command for it.

### Shopping District Etiquette

* **Respect Shops:** Don't block or grief shops in the Shopping District.
* **Avoid Price Gouging:** You're free to set your own prices, but reasonable pricing keeps the economy healthy.
* **Be Honest:** Don't scam other players in direct trades. Scams may be punished by staff.

### Troubleshooting & Common Issues

* **Not Sure What to Call Your Item:** Hold the item in your hand and use `/qs create [price]`. The shop picks up the item for you.

  ![Item information](./img/shop/call-shop-item.png)

* **Can't Buy From a Shop:** Check you have enough funds with `/bal`.
* **Shop Isn't in the Shop Directory:** Make sure it was created properly with `/qs create` and that a shop sign appeared on the chest.
* **Wrong Shop Mode:** Look at the sign and use `/qs sell` or `/qs buy` to switch.
* **Need to Change the Price:** Look at the sign and use `/qs price [new price]`.
