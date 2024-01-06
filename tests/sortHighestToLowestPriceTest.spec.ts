////RT10////

import { test, expect } from "@playwright/test";
import filterHighestPrice from "../pages/filterFromHighestPrice/filterHighestPrice";

test("Filtering products on fontele.ba", async ({ page }) => {
  const filteringProducts = new filterHighestPrice(page);

  await filteringProducts.navigate();

  // Step 1 - Navigate to home page
  await expect(page.url()).toBe("https://fontele.ba/");

  // Step 2 - Scroll down to “popularne kategorije”
  // Step 3 - Click on any option in “popularne kategorije”
  await filteringProducts.categoryClick();

  // Step 4- Verify that the opened page displays only products from the chosen category
  await expect(page.url()).toBe(
    "https://fontele.ba/shop/kucanski-aparati/kafe-aparati"
  );

  // Step 5- Click on the “sortiraj” button
  await filteringProducts.filterClick();

  // Step 6- Check whether a dropdown menu appears
  await expect(
    page.locator('.dropdown-item[data-sort="price"][data-order="desc"]')
  ).toBeVisible();

  // Step 7- Click on the “Cijena: od najviše prema najnižoj” button
  await filteringProducts.filterTypeClick();

  // Step 8- Verify the prices are sorted highest to lowest
  await expect(page.url()).toBe(
    "https://fontele.ba/shop/kucanski-aparati/kafe-aparati?sort=price&sort_order=desc&"
  );
});
