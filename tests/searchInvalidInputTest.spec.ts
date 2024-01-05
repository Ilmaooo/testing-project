///TC 03///
import { test, expect } from "@playwright/test";
import SearchPage from "../pages/searchPage/searchPage";

test("Verify Searching" , async ({ page }) => {
    const searchPage = new SearchPage(page);

    // Navigate to Home Page
    await searchPage.openHomePage();

    // Click on the Search Input Field
    await searchPage.clickSearchEngine();

    // Enter invalid text in Search Input Field
    await searchPage.fillSerachBar("!#$");

    // Click the Search Button
    await searchPage.submitSearch();

    // Verify that newly opened page is not displaying anything 
    await expect(page.locator('h2:has-text("Nema rezultata za tvoj upit.")')).toBeVisible();
});
