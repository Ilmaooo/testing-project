import { Page } from "playwright";

class CartEdit {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openHomePage() {
        await this.page.goto("https://fontele.ba/");
    }

    async openCartPage() {
        await this.page.click('[aria-label="Pogledaj sadržaj korpe."]');
    }

    async clickPlus(){
        await this.page.click('[class="quantity_box_plus"]');
    }

    async clickMinus(){
        await this.page.click('[class="quantity_box_minus"]');
    }

    async getValue() {
        const quantityElement = await this.page.locator('span.quantity_number.text-center.d-flex');
        const quantity = await quantityElement.textContent();
        return quantity;
      }
    
}
 


export default CartEdit;
