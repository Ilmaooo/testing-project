////TC 06///

import { chromium, Browser, Page } from "playwright";
import { test, expect } from "@playwright/test";
import AddToCart from "../pages/cart/AddToCart";
import KorpaPage from "../pages/cart/KorpaPage";


test("Check Deleting All Products", async ({ page }) => {

    const addToCart = new AddToCart(page);
    const korpaPage = new KorpaPage(page);

    await addToCart.openHomePage();
    expect(page.url()).toContain("https://fontele.ba");

    await korpaPage.openKorpaPage();
    expect(page.url()).toContain("https://fontele.ba/korpa");
  
    await korpaPage.deleteProduct();
    expect ("Product is removed from the cart.");

    await korpaPage.verifyDeletingoONEproduct('TESLA sušilica veša WT8C91M');

});