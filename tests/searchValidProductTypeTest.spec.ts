////RT6////

import { test, expect } from "@playwright/test";
import SearchPage from "../pages/searchPage/searchPage";

test("Verify Searching", async ({ page }) => {
  const searchPage = new SearchPage(page);

  // Step1- Navigate to Home Page
  await searchPage.openHomePage();
  await expect(page.url()).toBe('https://fontele.ba/');

  // Step 2- Click on the Search input field “Pretraga proizvoda…”
  await searchPage.clickSearchEngine();

  // Step 3- Enter text
  await searchPage.fillSerachBar("mobitel");
  // Verify that search bar is filled in
  const searchBar = await page.$eval(
    "input#autocomplete",
    (input) => (input as HTMLInputElement).value
  );
  await expect(searchBar).toEqual("mobitel");  

  // Step 4- Click on the “search” button
  await searchPage.submitSearch();

  // Step 5- Verify that only entered product appears
  await expect(page.url()).toBe("https://fontele.ba/pretraga?keywords=mobitel");
});
