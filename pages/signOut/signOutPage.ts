import { Page } from "playwright";
import LoginPage from "../loginPage/LoginPage";

class SignOutPage {
  private page: Page;
  private loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
  }

  async logIn() {
    await this.loginPage.openHomePage();
    await this.loginPage.clickUserIcon();
    await this.loginPage.fillLoginForm(
      "ilmaogresevic1@gmail.com",
      "Najboljagrupa6"
    );
    await this.loginPage.login();
    await this.loginPage.openHomePage();
    await this.page.waitForLoadState("networkidle");
  }

  async clickUser() {
    await this.page.click('[aria-label="Pregledaj svoj profil"]', {
      timeout: 20000,
    });
  }

  async clickLogOut() {
    await this.page.click(
      'ul.dropdown-menu.show a[href="https://fontele.ba/auth/logout"]',
      { timeout: 10000 }
    );
  }
  async  clickUserIcon(){
    await this.loginPage.clickUserIcon();
  }
}

export default SignOutPage;
