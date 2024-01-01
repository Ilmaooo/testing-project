class filteringProducts {
    async navigate(page){
        await page.goto('https://www.fontele.ba');
    }

    async categoryClick(page) {
        //click on Mobiteli in Popularne kategorije
        await page.click('h3.category-name:has-text("Mobiteli")');
    }

    async sizeSelection(page) {
        //select size
        await page.check('input#velicina-ekrana_od-4-do-6.form-check-input');
    }
}

export default filteringProducts;