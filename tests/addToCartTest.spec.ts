import { test, expect } from "@playwright/test";
import AddToCart from "../pages/registerPage/cart/AddToCart";

test("Verify Adding products into cart", async ({ page }) => {
  const addToCart = new AddToCart(page);
  await addToCart.openHomePage();
  await addToCart.clickOnProduct('[alt="TESLA sušilica veša WT8C91M"]');
  await addToCart.addToCart();
  await addToCart.navigateToCart();

  // Get the number of items in the cart from the title
  const cartItemCount = await addToCart.getCartItemCountFromTitle();

  // Assert that the cart has one item
  expect(cartItemCount).toBe(1);
});