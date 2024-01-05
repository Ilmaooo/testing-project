// TEST CASE TC_10 //
import { Page } from "playwright";
class filteringProducts {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(){
        await this.page.goto('https://www.fontele.ba');
    }

    async categoryClick() {
        //click on Mobiteli in Popularne kategorije
        await this.page.click('h3.category-name:has-text("Mobiteli")');
    }

    async sizeSelection() {
        //select size
        await this.page.check('input#velicina-ekrana_od-4-do-6.form-check-input');
    }
}

export default filteringProducts;