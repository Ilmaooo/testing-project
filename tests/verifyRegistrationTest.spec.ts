////ST1////

import { test, expect } from "@playwright/test";
import RegisterPage from "../pages/registerPage/RegisterPage";

test("Verify registration", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  // Step 1 - Navigate to home page
  await registerPage.openHomePage();
  // Step 2 - Click the user icon
  await registerPage.clickUserIcon();
  // Step 3 - Click on "Niste registrovani?"
  await registerPage.navigateToRegisterPage();
  // Step 4 - Enter name
  // Step 5 - Enter last name
  // Step 6 - Enter email
  // Step 7-  Enter password
  // Step 8-  Enter password again
  await registerPage.fillRegisterForm(
    "test12",
    "test12",
    "test71@gmail.com",
    "Test12345",
    "Test12345"
  );

  // Step 9-  Click on “Slažem se s uslovima korištenja I kupovine”
  await registerPage.agreeToTerms();
  // Step 10- Click on “Registruj se”
  await registerPage.submitRegisterForm();
  expect(page.url()).toContain("https://fontele.ba/auth/verify-email");
});