////TC 07///

import { chromium, Browser, Page } from "playwright";
import { test, expect } from "@playwright/test";
import ContactPage from "../pages/contactPage/contactPage";

test("Check contact form", async ({ page }) => {
  const contactPage = new ContactPage(page);
  await contactPage.openPage();
  expect(page.url()).toContain("https://fontele.ba");

  await contactPage.openContactForm();
  expect(page.url()).toContain("https://fontele.ba/kontakt");

  ///input name///
  await contactPage.enterName(
    "Amina Kadić"
  );
  const name = await page.$eval(
        "input#full_name",
        (input) => (input as HTMLInputElement).value
      );
  expect(name).toEqual("Amina Kadić");

  ///input email///

  await contactPage.enterEmail(
    "kadicamina01@gmail.com");
  const email = await page.$eval(
      "input#email",
      (input) => (input as HTMLInputElement).value
    );
  expect(email).toEqual("kadicamina01@gmail.com");

  ///input message///
  await contactPage.enterMessage(
    "This is a message");
  const message= await page.$eval(
        "textarea#msg",
        (textarea) => (textarea as HTMLTextAreaElement).value
      );
  expect(message).toEqual("This is a message");

});
