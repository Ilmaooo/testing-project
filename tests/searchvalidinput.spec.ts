///TC 02///
import { test, expect } from "@playwright/test";
import SearchPage from "../pages/searchPage/searchPage";

test("Verify Searching" , async ({ page }) => {
    const searchPage = new SearchPage(page);

    // Navigate to Home Page
    await searchPage.openHomePage();

    // Click on the Search Input Field
    await searchPage.clickSearchEngine();

    // Type in Search Input Field "mobitel"
    await searchPage.fillSerachBar("mobitel");

    // Click the Search Button
    await searchPage.submitSearch();

    // It displays only products with keyword 'mobitel'
    await expect(page.url()).toBe('https://fontele.ba/pretraga?keywords=mobitel');
    
});
