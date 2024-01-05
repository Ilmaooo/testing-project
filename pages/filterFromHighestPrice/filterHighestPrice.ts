// TEST CASE TC_04 // 
class filterHighestPrice{
    async navigate(page){
        await page.goto('https://www.fontele.ba');
    }

    async categoryClick(page) {
        //click on Mobiteli in Popularne kategorije
        await page.click('h3.category-name:has-text("Kafe aparati")');
    }

    async filterClick(page) {
        //click on Sortiraj
        await page.click('#dropdownSortBy');
    }

    async filterTypeClick(page){
        //click on "Cijena: od najviše prema najnižoj"
        await page.click('.dropdown-item[data-sort="price"][data-order="desc"]', { timeout: 5000 });
    }

    async compareTwoPrices(page){

    }
}
export default filterHighestPrice;