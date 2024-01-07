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

  // Verify that email input field is filled in
  const email = await page.$eval(
    "input#login-email",
    (input) => (input as HTMLInputElement).value
  );
  await expect(email).toEqual("ilmaogresevic1@gmail.com");

  // Verify that password input field is filled in
  const password = await page.$eval(
    "input#login-password",
    (input) => (input as HTMLInputElement).value
  );
  await expect(password).toEqual("Najboljagrupa6");

  
  // Step 5- Click on “Prijavi se”
  await loginPage.login();
  await expect(page.url()).toContain("https://fontele.ba/");
});