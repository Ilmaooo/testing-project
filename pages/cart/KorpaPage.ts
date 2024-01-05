import { Page } from "playwright";
import {expect} from "@playwright/test";

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

    await this.page.click('.delete_from_cart_btn');
    console.log("Clicked on Delete from cart button");
    await this.page.waitForLoadState("networkidle");
}

async verifyDeletingoONEproduct (title: string) {

    const addedProductElement = await this.page.waitForSelector(`[title="${title}"]`, { timeout: 5000 });

    await expect(addedProductElement).isnotDefined();
    console.log(`Product with title ${title} removed from cart successfully.`);
}

async verifyDeletingALLfromCart (){

    await expect ("Sadržaj vaše korpe je sada prazan.");
}


};


export default KorpaPage;