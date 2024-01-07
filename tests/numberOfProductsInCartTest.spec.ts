////RT4////

import { test, expect } from "@playwright/test";
import AddToCart from "../pages/cart/AddToCart";
import KorpaPage from "../pages/cart/KorpaPage";
import CartEdit from "../pages/CartEdit/CartEdit";

test("Check Deleting One Product", async ({ page }) => {
  const addToCart = new AddToCart(page);
  const korpaPage = new KorpaPage(page);
  const cartEdit = new CartEdit(page);

  // Pre-condition: user has added product/s in cart
  await addToCart.openHomePage();
  await addToCart.clickOnProduct("XIAOMI tablet Redmi Pad 128GB 6GB Sivi");
  await addToCart.addToCart();

  // Step 1- Navigate to home page
  await addToCart.openHomePage();

  // Step 2- Click on the desired product.
  await addToCart.clickOnProduct("TESLA sušilica veša WT8C91M");
  await expect(page.url()).toBe('https://fontele.ba/proizvod/tesla-susilica-vesa-wt8c91m/3366');
  
  // Step 3- Click on “dodaj u korpa “button
  await addToCart.addToCart();

  // Step 4- Click the cart icon
  await cartEdit.openCartPage();
  await expect(page.url()).toBe('https://fontele.ba/korpa');

  // expect- The quantity of products in cart is 2
  const quantity0 = await korpaPage.getCartQuantity();
  await expect(quantity0).toBe("Korpa (2)");

  // Step 5- Click on “x” icon, next to the newly added product
  await korpaPage.deleteProduct();

  // expect- total number of products in the cart is updated to 1
  // actual- number of total products is 2
  const quantity1 = await korpaPage.getCartQuantity();
  expect(quantity1).not.toBe("Korpa (1)");
});