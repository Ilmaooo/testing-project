import { Page } from "playwright";

class AddToCart {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openHomePage() {
        await this.page.goto("https://fontele.ba/");
        await this.page.waitForLoadState("networkidle");
    }

    async clickOnProduct(productSelector: string) {
        await this.page.click(productSelector);
        await this.page.waitForLoadState("networkidle");
    }

    async addToCart() {
        await this.page.click('[data-id="cartSide"]');
        await this.page.waitForLoadState("networkidle");
    }
    async navigateToCart(){
        await this.page.click('[data-id="cartSide"]');
        await this.page.click('[aria-label="Pogledaj sadržaj korpe."]');
    }
    async getCartItemCountFromTitle(): Promise<number> {
        const titleElement = await this.page.$('.box-wrapper-title.text-uppercase');
        const titleText = titleElement ? await titleElement.textContent() : '';
        const cartItemCount = parseInt(titleText.match(/\((\d+)\)/)?.[1] || '0', 10);
        return cartItemCount;
    }

}

export default AddToCart;
