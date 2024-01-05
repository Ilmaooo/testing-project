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


    async searchProduct(productName: string) {
        await this.page.click('[id="autocomplete"]');
        await this.page.fill('[id="autocomplete"]', productName);
        await this.page.click('[title="Pretraži stranicu"]');
        await this.page.waitForLoadState("networkidle");
        console.log(`Searching for product with name: ${productName}`);
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
}
 


export default AddToCart;
