////RT7////

import { test, expect } from "@playwright/test";
import SearchPage from "../pages/searchPage/searchPage";

test("Verify Searching" , async ({ page }) => {
  const searchPage = new SearchPage(page);

  // Step 1- Navigate to Home Page
  await searchPage.openHomePage();
  await expect(page.url()).toBe('https://fontele.ba/');

  // Step 2- Click on the Search input field “Pretraga proizvoda…”
  await searchPage.clickSearchEngine();

  // Step 3- Enter text
  await searchPage.fillSerachBar("!#$");

  // Step 4- Click on the “search” button
  await searchPage.submitSearch();
  await expect(page.url()).toBe('https://fontele.ba/pretraga?keywords=%21%23%24');

  // Step 5- Verify that newly opened page is not displaying anything
  await expect(
    page.locator(
        'h2:has-text("Nema rezultata za tvoj upit.")'))
        .toBeVisible();
});
