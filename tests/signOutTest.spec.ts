///TC  05 ///
import LoginPage from "../pages/loginPage/LoginPage";
import SignOutPage from "../pages/signOut/signOutPage";
import { test, expect } from "@playwright/test";

test("Verify sign out", async ({ page }) => {
  const signOutPage = new SignOutPage(page);
  await signOutPage.logIn();
  await signOutPage.clickUser();
  await signOutPage.clickLogOut();
  await signOutPage.clickUserIcon();
  expect(page.url()).toContain("https://fontele.ba/auth/login");
});
