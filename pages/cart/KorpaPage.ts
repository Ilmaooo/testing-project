import { Page } from "playwright";
class KorpaPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openKorpaPage() {
        await this.page.goto("https://fontele.ba/korpa");
        await this.page.waitForLoadState("networkidle");
    }

    async deleteProduct() {
        await this.page.click('[aria-label="Remove item from list"]');
        console.log("Clicked on Delete from cart button");
        await this.page.waitForLoadState("networkidle");
    }

    async getCartQuantity() {
        const quantityElement = await this.page.locator('h2.box-wrapper-title.text-uppercase:not(:has-text("Imate kupon ili poklon bon?"))');
        const quantity = await quantityElement.textContent();
        return quantity;
      }

};


export default KorpaPage;