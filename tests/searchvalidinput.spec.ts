import { test, expect } from "@playwright/test";
import SearchPage from "../pages/searchPage/searchPage";

test("Verify Searching" , async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.openHomePage();
    await searchPage.clickSearchEngine();
    await searchPage.fillSerachBar("mobitel");
    await searchPage.submitSearch();
    await searchPage.verifySearchValidInput();
    
});
