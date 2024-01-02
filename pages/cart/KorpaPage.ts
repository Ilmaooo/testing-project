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

async verifyDeletingALLfromCart () {


    // this part to be done
     
    await expect(deletedProductElement).isnotdefined();
    console.log(`ALL products deleted successfully.`);
}

};


export default KorpaPage;