////RT3////
import { test, expect } from "@playwright/test";
import CartEdit from "../pages/cart/CartEdit";
import AddToCart from "../pages/cart/AddToCart";

test("Verify Plus and Minus Button in Cart", async ({ page }) => {
  const cartEdit = new CartEdit(page);
  const addToCart = new AddToCart(page);

  // Step 1- Navigate to home page
  await cartEdit.openHomePage();

  // Pre-condition: user has added product/s in cart
  await addToCart.clickOnProduct("XIAOMI tablet Redmi Pad 128GB 6GB Sivi");
  await addToCart.addToCart();

  // Step 2- Click the cart icon
  await cartEdit.openCartPage();

  //expect- the quantity of product added is 1
  const quantity0 = await cartEdit.getValue();
  await expect(quantity0).toBe("1");

  //Step 3- Click on „+“ button
  await cartEdit.clickPlus();

  //expect- the quantity of product is increased to 2
  const quantity1 = await cartEdit.getValue();
  await expect(quantity1).toBe("2");

  //Step 4- Click on „-“ button
  await cartEdit.clickMinus();

  //expect- the quantity of product is decreased to 1
  const quantity2 = await cartEdit.getValue();
  await expect(quantity2).toBe("1");
});
