////ST2////

import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage/LoginPage";

test("Verify login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  // Step 1 - Navigate to home page
  await loginPage.openHomePage();
  // Step 2 - Click the user icon
  await loginPage.clickUserIcon();
  // Step 3 - Enter email
  // Step 4-  Enter password
  await loginPage.fillLoginForm("ilmaogresevic1@gmail.com", "Najboljagrupa6");
  // Step 5- Click on “Prijavi se”
  await loginPage.login();
  expect(page.url()).toContain("https://fontele.ba/");
});