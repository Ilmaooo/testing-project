////SMOKE 3 and 4////

import { test, expect } from "@playwright/test";
import AddToCart from "../pages/cart/AddToCart";

// SMOKE 3 - Verify Adding products into cart using Home Page //
test("Verify Adding products into cart using Home Page", async ({ page }) => {
  const addToCart = new AddToCart(page);

  // Step 1 - Navigate to Home Page
  await addToCart.openHomePage();
  // expect: Home Page is displayed
  await expect(page.url()).toBe('https://fontele.ba/')
  
  // Step 2 - Click on any product shown in the Home Page
  await addToCart.clickOnProduct('TESLA sušilica veša WT8C91M');
  // expect: product url to be opened
  await expect(page.url()).toBe('https://fontele.ba/proizvod/tesla-susilica-vesa-wt8c91m/3366');
  
  // Step 3 - Click on 'Dodaj u korpu' button
  await addToCart.addToCart();
  // expect - on the sidebar pop up, chosen product is visible
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