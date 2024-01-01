import { test, expect } from '@playwright/test';
import filterLowestPrice from '../pages/filterFromLowestPrice/filterLowestPrice';

// TEST CASE TC_10 //

test('Filtering products on fontele.ba', async ({ page }) => {
  const filteringProducts = new filterLowestPrice();

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
  await expect(page.locator('.dropdown-item[data-sort="price"][data-order="asc"]')).toBeVisible();

  //click on "Cijena: od najniže prema najvišoj"
  await filteringProducts.filterTypeClick(page);

  //check if it is showing filtered page
  await expect(page.url()).toBe('https://fontele.ba/shop/kucanski-aparati/kafe-aparati?sort=price&sort_order=asc&');

  //get the first two products
  const product1 = await page.locator('.pjax .col:nth-child(1)');
  const product2 = await page.locator('.pjax .col:nth-child(2)');

  // Compare prices //

  //get the price of the first two products
  const price1Element = await product1.locator('.price span').first();
  const price2Element = await product2.locator('.price span').first();

  //if there are two products, get their prices
  if (price1Element && price2Element) {
    const price1 = await price1Element.textContent();
    const price2 = await price2Element.textContent();

    //check if their prices are null. if not, then we need to parse text to numbers so we can compare them
    if (price1 !== null && price2 !== null) {
            const numericPrice1 = parseFloat(price1.replace(',', '.')); // Convert commas to dots
            const numericPrice2 = parseFloat(price2.replace(',', '.')); // Convert commas to dots

            expect(numericPrice1).toBeLessThanOrEqual(numericPrice2);
        } else {
            console.error('Prices are null.');
        }
    } else {
        console.error('Price elements not found.');
    }

});
