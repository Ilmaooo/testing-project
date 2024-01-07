////RT1////

import SignOutPage from "../pages/signOut/signOutPage";
import { test, expect } from "@playwright/test";

test("Verify sign out", async ({ page }) => {
  const signOutPage = new SignOutPage(page);
  // Step 1-Navigate to home page
  //Pre-condition: User is logged in
  await signOutPage.logIn();

  // Step 2 click the User Icon
  await signOutPage.clickUser();

  // Step 3 Click 'Odjavi se' Button
  await signOutPage.clickLogOut();

  // Step 4  Click the user icon, again
  // Expect: "Prijava korisnika" page should appear
  await signOutPage.clickUserIcon();
  await expect(page.url()).toContain("https://fontele.ba/auth/login");
});
