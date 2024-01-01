import { Page, chromium } from "playwright";
import LoginPage from "../loginPage/LoginPage";
class SignOutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openHomePage() {
    await this.page.goto("https://fontele.ba/");
    await this.page.waitForLoadState("networkidle");
  }

  async clickUserIcon() {
    await this.page.click('[aria-label="Loguj se"]');
    await this.page.waitForLoadState("networkidle");
  }

  async fillLoginForm(email: string, password: string) {
    await this.page.fill('[id="login-email"]', email);
    await this.page.fill('[id="login-password"]', password);
    await this.page.waitForLoadState("networkidle");
  }

  async login() {
    await this.page.click('[class="btn btn-primary btn-submit"]');
    console.log(this.page.url());
  }
  async clickUser() {
    await this.page.waitForSelector('svg.icon use[xlink\\:href="#user"]', {
      timeout: 10000,
    });
    await this.page.click('svg.icon use[xlink\\:href="#user"]', {
      timeout: 20000,
    });
  }

  async clickLogOut() {
    await this.page.click(
      'ul.dropdown-menu.show a[href="https://fontele.ba/auth/logout"]',
      { timeout: 10000 }
    );
  }
}

export default SignOutPage;
