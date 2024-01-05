///TC  05 ///
import SignOutPage from "../pages/signOut/signOutPage";
import { test, expect } from "@playwright/test";

test("Verify sign out", async ({ page }) => {
  const signOutPage = new SignOutPage(page);
  // Log in user, this will automatically open Home Page
  await signOutPage.logIn();

  // Click the User Icon
  await signOutPage.clickUser();

  // Click 'Odjavi se' Button
  await signOutPage.clickLogOut();

  // Home Page is opened. Click again the User Icon to see if the Log in page is opened
  await signOutPage.clickUserIcon();
  expect(page.url()).toContain("https://fontele.ba/auth/login");
});
