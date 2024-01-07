////ST1////

import { test, expect } from "@playwright/test";
import RegisterPage from "../pages/registerPage/RegisterPage";

test("Verify registration", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  // Step 1 - Navigate to home page
  await registerPage.openHomePage();
  await expect(page.url()).toContain("https://fontele.ba");

  // Step 2 - Click the user icon
  await registerPage.clickUserIcon();

  // Step 3 - Click on "Niste registrovani?"
  await registerPage.navigateToRegisterPage();

  //Verify that regisrtation page is opened
  await expect(page.url()).toContain("https://fontele.ba/auth/register");

  // Step 4 - Enter name
  // Step 5 - Enter last name
  // Step 6 - Enter email
  // Step 7-  Enter password
  // Step 8-  Enter password again
  await registerPage.fillRegisterForm(
    "test12",
    "test12",
    "test300@gmail.com",
    "Test12345",
    "Test12345"
  );

  // Verify that the first name input field is filled in
  const firstName = await page.$eval(
    "input#userFirstName",
    (input) => (input as HTMLInputElement).value
  );
  await expect(firstName).toEqual("test12");

  // Verify that the last name input field is filled in
  const lastName = await page.$eval(
    "input#userLastName",
    (input) => (input as HTMLInputElement).value
  );
  await expect(lastName).toEqual("test12"); 

  // Verify that the email input field is filled in
  const email = await page.$eval(
    "input#userMail",
    (input) => (input as HTMLInputElement).value
  );
  await expect(email).toEqual("test300@gmail.com");

  // Verify that the password input field is filled in
  const password = await page.$eval(
    "input#userPass",
    (input) => (input as HTMLInputElement).value
  );
  await expect(password).toEqual("Test12345");

  // Verify that the password input field is filled in
  const confirmPassword = await page.$eval(
    "input#userPassRepeat",
    (input) => (input as HTMLInputElement).value
  );
  await expect(confirmPassword).toEqual("Test12345");



  // Step 9-  Click on “Slažem se s uslovima korištenja I kupovine”
  await registerPage.agreeToTerms();

  // Step 10- Click on “Registruj se”
  await registerPage.submitRegisterForm();
  await expect(page.url()).toContain("https://fontele.ba/auth/verify-email");
});