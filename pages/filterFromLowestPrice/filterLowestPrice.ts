// TEST CASE TC_10 // 
class filterLowestPrice{
    async navigate(page){
        await page.goto('https://www.fontele.ba');
    }

    async categoryClick(page) {
        //click on Mobiteli in Popularne kategorije
        await page.click('h3.category-name:has-text("Kafe aparati")', { timeout: 5000 });
    }

    async filterClick(page) {
        //click on Sortiraj
        await page.click('#dropdownSortBy', { timeout: 5000 });
    }

    async filterTypeClick(page){
        //click on "Cijena: od najniže prema najvišoj"
        await page.click('.dropdown-item[data-sort="price"][data-order="asc"]', { timeout: 5000 });
    }
}
export default filterLowestPrice;