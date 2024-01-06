////RT8////

import { test, expect } from "@playwright/test";
import ContactPage from "../pages/contactPage/contactPage";

test("Check contact form", async ({ page }) => {
  const contactPage = new ContactPage(page);

  // Step 1 - Navigate to home page
  await contactPage.openPage();
  expect(page.url()).toContain("https://fontele.ba");

  // Step 2 - Click the “Kontakt” button
  await contactPage.openContactForm();
  expect(page.url()).toContain("https://fontele.ba/kontakt");

  // Step 3 - Enter name and surname

  await contactPage.enterName("Amina Kadić");
  // expect- Name and surname appear in the input field
  const name = await page.$eval(
    "input#full_name",
    (input) => (input as HTMLInputElement).value
  );
  expect(name).toEqual("Amina Kadić");

  // Step 4 - Enter email
  await contactPage.enterEmail("kadicamina01@gmail.com");

  // expect- Email is displayed in the input field
  const email = await page.$eval(
    "input#email",
    (input) => (input as HTMLInputElement).value
  );
  expect(email).toEqual("kadicamina01@gmail.com");

  // Step 4 - Enter message
  await contactPage.enterMessage("This is a message");

  // expect- Message is displayed in the input field
  const message = await page.$eval(
    "textarea#msg",
    (textarea) => (textarea as HTMLTextAreaElement).value
  );
  expect(message).toEqual("This is a message");
});
