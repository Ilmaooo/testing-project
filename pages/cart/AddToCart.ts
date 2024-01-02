import { Page } from "playwright";
import {expect} from "@playwright/test";

class AddToCart {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openHomePage() {
        await this.page.goto("https://fontele.ba/");
        await this.page.waitForLoadState("networkidle");
    }

    async clickOnProduct(productAltText: string) {
        const productElement = await this.page.$(`[alt="${productAltText}"]`);

        if (productElement) {
            // Scroll the element into view if it's not already visible
            await productElement.scrollIntoViewIfNeeded();
            
            // Click on the element
            await productElement.click();
            console.log(`Clicked on product with alt text: ${productAltText}`);
        } else {
            throw new Error(`Product element not found with alt text: ${productAltText}`);
        }
        await this.page.waitForLoadState("networkidle");
    }

    async addToCart() {
        await this.page.click('.add_to_cart_btn');
        console.log("Clicked on Add to cart button");
        await this.page.waitForLoadState("networkidle");
    }

    async verifyAddingToCart(title: string){
        // Wait for the element with the specified title attribute
        const addedProductElement = await this.page.waitForSelector(`[title="${title}"]`, { timeout: 5000 });

        await expect(addedProductElement).toBeDefined();
        console.log(`Product with title ${title} added to cart successfully.`);
    }
}
 


export default AddToCart;
