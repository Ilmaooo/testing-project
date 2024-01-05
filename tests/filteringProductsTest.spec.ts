////RT9////

import { test, expect } from '@playwright/test';
import FilteringProducts from '../pages/filterBySizePage/filteringProducts';


test('Filtering products on fontele.ba', async ({ page }) => {
  const filteringProducts = new FilteringProducts(page);

  await filteringProducts.navigate();

  // Step 1 - Navigate to home page
  await expect(page.url()).toBe("https://fontele.ba/");

  // Step 2 - Scroll down to “popularne kategorije”
  // Step 3 - Click on any option in “popularne kategorije”
  await filteringProducts.categoryClick();

  // Step 4- Verify that the opened page displays only products from the chosen category
  await expect(page.url()).toBe(
    "https://fontele.ba/shop/mobiteli-i-oprema/mobiteli"
  );

  // Step 5- Scroll down to “Veličina ekrana” filtering option on the left side of the screen
  await expect(
    page.locator("input#velicina-ekrana_od-4-do-6.form-check-input")
  ).toBeVisible();

  //Step 6- Click on the “Od 4’’ do 6’’” check box in the filter options
  await filteringProducts.sizeSelection();

  // Step 7- Verify the green checkmark, next to the chosen checkbox, is checked
  expect(
    await page.isChecked("input#velicina-ekrana_od-4-do-6.form-check-input")
  ).toBeTruthy();

  //Step 8- Verify the products shown are in the chosen size range
  await expect(page.url()).toBe(
    "https://fontele.ba/shop/mobiteli-i-oprema/mobiteli?filter=32:od-4-do-6&"
  );
});
