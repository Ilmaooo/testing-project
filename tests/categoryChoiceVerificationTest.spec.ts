////RT5////

import { test, expect } from "@playwright/test";
import CategoryPage from "../pages/categories/categorySelection";

test("Verify category selection", async ({ page }) => {
  const categoryPage = new CategoryPage(page);
  // Step 1 - Navigate to home page
  await categoryPage.openPage();
  expect(page.url()).toContain("https://fontele.ba");

  // Step 2 - Scroll down to “popularne kategorije”
  await categoryPage.waitElement();

  // Step 3 - Click on any category button
  await categoryPage.clickCategory();
  
  // Step 4- Verify that only products from chosen category are displayed
  expect(page.url()).toContain(
    "https://fontele.ba/shop/mobiteli-i-oprema/slusalice"
  );
});
