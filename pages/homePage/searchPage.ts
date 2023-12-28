import { Page } from "playwright";

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
}
export default SearchPage;