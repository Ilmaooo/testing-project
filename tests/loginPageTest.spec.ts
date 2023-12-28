import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage/LoginPage";

test("Verify login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openHomePage();
  await loginPage.clickUserIcon();
  await loginPage.fillLoginForm("ilmaogresevic1@gmail.com", "Najboljagrupa6");
  await loginPage.login();
  await loginPage.verifyLogin();
});