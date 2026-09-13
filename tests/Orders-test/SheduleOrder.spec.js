const { test ,expect} = require('../../fixtures/base');
const {MenuPage} = require('../../POM/MenuPage');
const {HomePage} = require('../../POM/HomePage');
const {CartPage} = require('../../POM/CartPage');
const {SummaryPage} = require('../../POM/SummaryPage');
const SoTD = JSON.parse(JSON.stringify(require('../../Utils/SheduleLaterTD.json')));

test.use({
    permissions: ['geolocation'],
    geolocation: {
       latitude: 12.937975079486964,
            longitude: 77.64450073242189
    }
});
SoTD.forEach((ShdData)=>{
    test(`Shedule an order for future data - ${ShdData.additonaldays}`,async({homePage,page})=>{

   
     const futureDate = new Date();
        futureDate.setDate(futureDate.getDate()+ShdData.additonaldays);
        const date = futureDate.toISOString().split('T')[0];
      

const menupage = new MenuPage(page)
await menupage.sheduleorder();

const cartpage = new CartPage(page)
await cartpage.sheduleorder();

const summarypage = new SummaryPage(page)
await summarypage.shedulelater(date,ShdData.cusName,ShdData.cusphNO);


});
});
