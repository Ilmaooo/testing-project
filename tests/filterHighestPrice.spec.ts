import { test, expect } from '@playwright/test';
import filterHighestPrice from '../pages/filterFromHighestPrice/filterHighestPrice';

// TEST CASE TC_10 //

test('Filtering products on fontele.ba', async ({ page }) => {
  const filteringProducts = new filterHighestPrice();

  await filteringProducts.navigate(page);

  //navigate to Home page fontele.ba
  await expect(page.url()).toBe('https://fontele.ba/');

  //click on category Kafe aparati in Popularne kategorije
  await filteringProducts.categoryClick(page);

  //verify if it has opened the category page for category Kafe aparati
  await expect(page.url()).toBe('https://fontele.ba/shop/kucanski-aparati/kafe-aparati');

  //click on Sortiraj 
  await filteringProducts.filterClick(page);

  //check if the dropdown appeared
  await expect(page.locator('.dropdown-item[data-sort="price"][data-order="desc"]')).toBeVisible();

  //click on "Cijena: od najniže prema najvišoj"
  await filteringProducts.filterTypeClick(page);

  //check if it is showing filtered page
  await expect(page.url()).toBe('https://fontele.ba/shop/kucanski-aparati/kafe-aparati?sort=price&sort_order=desc&');

});
