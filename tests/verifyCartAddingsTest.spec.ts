////ST3, ST4////

import { test, expect } from "@playwright/test";
import AddToCart from "../pages/cart/AddToCart";

// SMOKE TEST 3 - Verify Adding products into cart using Home Page //
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
  // expect: on the sidebar pop up, chosen product is visible
  await expect(page.locator('[title="TESLA sušilica veša WT8C91M"]')).toBeVisible();
});

// SMOKE TEST 4 - Verifying Adding products into cart using Search engine
test("Verify Adding products into cart using Search engine", async ({page}) => {
  const addUsingSearch = new AddToCart(page);

  // Step 1 - Navigate to home page
  await addUsingSearch.openHomePage();
  // expect: Home page is displayed
  await expect(page.url()).toBe('https://fontele.ba/')
  
  // Step 2 - Click on the Search input field 'Pretraga proizvoda'
  // Step 3 - Enter text 
  // Step 4 - Click on Search button
  await addUsingSearch.searchProduct('oppo');
  // expect: opened page is displaying only the searched products
  // Step 5 - verify that only products containing the searc keyword/s appear
  await expect(page.url()).toBe('https://fontele.ba/pretraga?keywords=oppo');

  // Step 6 - Click any product displayed in the search result page
  await addUsingSearch.clickOnProduct('OPPO mobitel Reno A53 128GB 4GB Plava');
  // expect: clicked product's page is opened
  await expect(page.url()).toBe('https://fontele.ba/proizvod/oppo-mobitel-reno-a53-128gb-4gb-plava/823');
  
  // Step 7 - Click on 'Dodaj u korpu' button
  await addUsingSearch.addToCart();

  // expect: opened side bar
  // Step 8 - Verify that the added product is in the cart
  // expect: verify that the added product is in the cart
  await expect(page.locator('[title="OPPO mobitel Reno A53 128GB 4GB Plava"]')).toBeVisible();
});