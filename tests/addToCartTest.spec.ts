////SMOKE 3////

import { test, expect } from "@playwright/test";
import AddToCart from "../pages/cart/AddToCart";


test("Verify Adding products into cart", async ({ page }) => {
  const addToCart = new AddToCart(page);
  await addToCart.openHomePage();
  await addToCart.clickOnProduct('TESLA sušilica veša WT8C91M');
  await addToCart.addToCart();
  await addToCart.verifyAddingToCart('TESLA sušilica veša WT8C91M');
});