import { expect, Page } from "@playwright/test";

class SearchPage
{
    private page: Page;

    constructor(page: Page)
    {
        this.page = page;
    }

    async openHomePage() 
    {
        await this.page.goto("https://fontele.ba/");
        await this.page.waitForLoadState("networkidle");
    }

    async clickSearchEngine()
    {
        await this.page.click('[aria-label="Search"]');
        await this.page.waitForLoadState("networkidle");
    }

    async fillSerachBar(placeholder: string)
    {
        await this.page.fill('[id="autocomplete"]', placeholder);
        await this.page.waitForLoadState("networkidle");
    }

    async submitSearch()
    {
        await this.page.click('[class="btn btn-submit border-0"]');
    }

    async verifySearchValidInput() {
        const wrapperProductListItems = await this.page.$$('.wrapper-product-list');
        const numberOfItems = wrapperProductListItems.length;
    
        expect(numberOfItems).toBeGreaterThan(0);
    }
    

    async verifySearchInvalidInput(expectedText: string) 
    {
        const results = await this.page.$$('.wrapper-product-list'); // Assuming this selector represents your search results
        // Check if any of the search results contain the expected text
        const resultTexts = await Promise.all(results.map(result => result.innerText()));

        expect(resultTexts.some(text => text.includes(expectedText))).toBeTruthy();
    }
}
export default SearchPage;