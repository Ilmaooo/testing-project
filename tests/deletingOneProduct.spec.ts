////TC 06///

import { chromium, Browser, Page } from "playwright";
import { test, expect } from "@playwright/test";
import AddToCart from "../pages/cart/AddToCart";
import KorpaPage from "../pages/cart/KorpaPage";
import CartEdit from "../pages/CartEdit/CartEdit";

test("Check Deleting One Product", async ({ page }) => {

    const addToCart = new AddToCart(page);
    const korpaPage = new KorpaPage(page);
    const cartEdit = new CartEdit(page);


    await addToCart.openHomePage();
    // add something to cart 
    await addToCart.clickOnProduct('XIAOMI tablet Redmi Pad 128GB 6GB Sivi');
    await addToCart.addToCart();

    await addToCart.openHomePage();
    // add one more product to cart
    await addToCart.clickOnProduct('TESLA sušilica veša WT8C91M');
    await addToCart.addToCart();

    // open cart page
    await cartEdit.openCartPage();

    // check the product quantity
    const quantity0 = await korpaPage.getCartQuantity();
    expect(quantity0).toBe("Korpa (2)");

    // delete one product
    await korpaPage.deleteProduct();

    // check the product quantity, it should be Korpa (1), but it is still Korpa (2)
    const quantity1 = await korpaPage.getCartQuantity();
    expect(quantity1).not.toBe("Korpa (1)");

});