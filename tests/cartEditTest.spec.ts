// TC_08 //
import { test, expect } from "@playwright/test";
import CartEdit from "../pages/CartEdit/CartEdit";
import AddToCart from "../pages/cart/AddToCart";

test("Verify Plus and Minus Button in Cart", async ({ page }) => {
    const cartEdit = new CartEdit(page);
    const addToCart = new AddToCart(page);

    // open Home Page 
    await cartEdit.openHomePage();

    // add something to cart 
    await addToCart.clickOnProduct('TESLA sušilica veša WT8C91M');
    await addToCart.addToCart();
    await addToCart.verifyAddingToCart('TESLA sušilica veša WT8C91M');

    // open cart page
    await cartEdit.openCartPage();

    //get the quantity
    const quantity0 = await cartEdit.getValue();

    // default quantity after opening should be 1
    expect(quantity0).toBe("1");


    //click on plus button to increase the quantity
    await cartEdit.clickPlus();
    const quantity1 = await cartEdit.getValue();
    expect(quantity1).toBe("2");

    //click on minus button to decrease the quantity
    await cartEdit.clickMinus();
    const quantity2 = await cartEdit.getValue();
    expect(quantity2).toBe("1");
    
});
