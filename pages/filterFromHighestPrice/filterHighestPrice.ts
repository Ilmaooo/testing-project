// TEST CASE TC_04 // 
import { Page } from "playwright";
class filterHighestPrice{
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async navigate(){
        await this.page.goto('https://www.fontele.ba');
    }

    async categoryClick() {
        //click on Mobiteli in Popularne kategorije
        await this.page.click('h3.category-name:has-text("Kafe aparati")');
    }

    async filterClick() {
        //click on Sortiraj
        await this.page.click('#dropdownSortBy');
    }

    async filterTypeClick(){
        //click on "Cijena: od najviše prema najnižoj"
        await this.page.click('.dropdown-item[data-sort="price"][data-order="desc"]', { timeout: 5000 });
    }
}
export default filterHighestPrice;