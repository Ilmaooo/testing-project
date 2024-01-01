import { test, expect } from '@playwright/test';
import FilteringProducts from '../pages/filterBySizePage/filteringProducts';

// TEST CASE TC_11 //

test('Filtering products on fontele.ba', async ({ page }) => {
  const filteringProducts = new FilteringProducts();

  await filteringProducts.navigate(page);

  //navigate to Home page fontele.ba
  await expect(page.url()).toBe('https://fontele.ba/');

  //click on category Mobiteli in Popularne kategorije
  await filteringProducts.categoryClick(page);

  //verify if it has opened the category page for category Mobiteli
  await expect(page.url()).toBe('https://fontele.ba/shop/mobiteli-i-oprema/mobiteli');
  
  //scroll down to find filtering for size "Velicina ekrana"
  await expect(page.locator('input#velicina-ekrana_od-4-do-6.form-check-input')).toBeVisible();

  //click on “Od 4’’ do 6’’” check box
  await filteringProducts.sizeSelection(page);

  //verify if the check box is checked
  expect(await page.isChecked('input#velicina-ekrana_od-4-do-6.form-check-input')).toBeTruthy();

  //verify if it only shows display sizes from 4'' to 6''
  await expect(page.url()).toBe('https://fontele.ba/shop/mobiteli-i-oprema/mobiteli?filter=32:od-4-do-6&');
  
});
