////RT2////

import { test, expect } from "@playwright/test";
import AddToCart from "../pages/cart/AddToCart";
import KorpaPage from "../pages/cart/KorpaPage";
import CartEdit from "../pages/CartEdit/CartEdit";

test("Check Deleting All Products", async ({ page }) => {
  const addToCart = new AddToCart(page);
  const korpaPage = new KorpaPage(page);
  const cartEdit = new CartEdit(page);

  // Step1- Navigate to home page
  await cartEdit.openHomePage();

  // Pre-condition: User has added a product in cart
  await addToCart.clickOnProduct("XIAOMI tablet Redmi Pad 128GB 6GB Sivi");
  await addToCart.addToCart();

  // Step 2- Click the cart icon
  await cartEdit.openCartPage();
  await expect(page.url()).toBe('https://fontele.ba/korpa');

  // Step 3- Click on “x” icon
  await korpaPage.deleteProduct();

  // Step 4- Verify that the cart is empty
  await expect(
    page.locator('h2:has-text("Sadržaj vaše korpe je prazan.")')
  ).toBeVisible();
});
