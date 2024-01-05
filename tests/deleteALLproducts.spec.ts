////TC 09///

import { chromium, Browser, Page } from "playwright";
import { test, expect } from "@playwright/test";
import AddToCart from "../pages/cart/AddToCart";
import KorpaPage from "../pages/cart/KorpaPage";
import CartEdit from "../pages/CartEdit/CartEdit";

test("Check Deleting All Products", async ({ page }) => {

    const addToCart = new AddToCart(page);
    const korpaPage = new KorpaPage(page);
    const cartEdit = new CartEdit(page);

    // open Home Page 
    await cartEdit.openHomePage();

    // add something to cart 
    await addToCart.clickOnProduct('XIAOMI tablet Redmi Pad 128GB 6GB Sivi');
    await addToCart.addToCart();

    // open cart page
    await cartEdit.openCartPage();
  
    // delete the product
    await korpaPage.deleteProduct();
    
    // check if the cart is empty
    await expect(page.locator('h2:has-text("Sadržaj vaše korpe je prazan.")')).toBeVisible();

});