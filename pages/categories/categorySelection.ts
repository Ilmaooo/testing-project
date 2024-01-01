import { Page, chromium } from "playwright";
class CategoryPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openPage() {
    await this.page.goto("https://www.fontele.ba");

    //await this.page.waitForLoadState("networkidle");
  }
  async waitElement() {
    await this.page.waitForSelector(".category-box");
    
  }
  async clickCategory() {

    await this.page.click('h3.category-name:has-text("Slušalice")');
    console.log("Current URL:", this.page.url());
  }
   
}


export default CategoryPage;
