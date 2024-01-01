////REGRESSION 1////

import { test, expect } from "@playwright/test";
import RegisterPage from "../pages/registerPage/RegisterPage";

test("Verify registration", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.openHomePage();
  await registerPage.clickUserIcon();
  await registerPage.navigateToRegisterPage();
  await registerPage.fillRegisterForm("test3", "test3", "test3@gmail.com", "Test12345", "Test12345");   
  await registerPage.agreeToTerms();
  await registerPage.submitRegisterForm();
});