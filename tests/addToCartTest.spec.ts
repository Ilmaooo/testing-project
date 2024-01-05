////SMOKE 3 and 4////

import { test, expect } from "@playwright/test";
import AddToCart from "../pages/cart/AddToCart";


test("Verify Adding products into cart", async ({ page }) => {
  const addToCart = new AddToCart(page);
  await addToCart.openHomePage();
  await addToCart.clickOnProduct('TESLA sušilica veša WT8C91M');
  await addToCart.addToCart();
  await expect(page.locator('[title="TESLA sušilica veša WT8C91M"]')).toBeVisible();
});

test("Verify Adding products into cart using Search engine", async ({page}) => {
  const addUsingSearch = new AddToCart(page);
  await addUsingSearch.openHomePage();
  await addUsingSearch.searchProduct('oppo');
  await addUsingSearch.verifySearchResult('oppo');
  await addUsingSearch.clickOnProduct('OPPO mobitel Reno A53 128GB 4GB Plava');
  await addUsingSearch.addToCart();
  await expect(page.locator('[title="OPPO mobitel Reno A53 128GB 4GB Plava"]')).toBeVisible();
});