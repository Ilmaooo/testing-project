////TC 01////

import { chromium, Browser, Page } from "playwright";
import { test, expect } from "@playwright/test";
import CategoryPage from "../pages/categories/categorySelection";

test("Verify category selection", async ({ page }) => {
  const categoryPage = new CategoryPage(page);

  await categoryPage.openPage();
  expect(page.url()).toContain("https://fontele.ba");

  await categoryPage.waitElement();

  await categoryPage.clickCategory();
  expect(page.url()).toContain(
    "https://fontele.ba/shop/mobiteli-i-oprema/slusalice"
  );
});
