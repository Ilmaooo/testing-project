import { Page } from "playwright";
class CategoryPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openPage() {
    await this.page.goto("https://www.fontele.ba");
  }
  async waitElement() {
    await this.page.waitForSelector(".category-box");
    
  }
  async clickCategory() {

    await this.page.click('h3.category-name:has-text("Slušalice")');
  }
   
}


export default CategoryPage;
