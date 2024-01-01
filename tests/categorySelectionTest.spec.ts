import { chromium, Browser, Page } from "playwright";
import { test, expect } from "@playwright/test";
import CategoryPage from "../pages/categories/categorySelection";

test("Verify category selection", async ({ page }) => {
  const categoryPage = new CategoryPage(page);
  await categoryPage.openPage();
  await categoryPage.waitElement();
  await categoryPage.clickCategory();
  expect(page.url()).toContain(
    "https://fontele.ba/shop/mobiteli-i-oprema/slusalice"
  );
});
