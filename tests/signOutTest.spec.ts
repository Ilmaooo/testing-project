import LoginPage from "../pages/loginPage/LoginPage";
import SignOutPage from "../pages/signOut/signOutPage";
import { test, expect } from "@playwright/test";


test("Verify sign out", async ({ page }) => {
  const signOutPage = new SignOutPage(page);
  await signOutPage.openHomePage();
  await signOutPage.clickUserIcon();
  await signOutPage.fillLoginForm("ilmaogresevic1@gmail.com", "Najboljagrupa6");
  await signOutPage.login();
  await signOutPage.clickUser();
  await signOutPage.clickLogOut();

});