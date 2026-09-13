const { test ,expect} = require('../../fixtures/base');
const {FrancheisPage} = require('../../POM/FrancheisPage');

test('Send Franchies enquiry without Details and validate the mandatory feilds error'
    ,async({homePage,page})=>{

    const frpage = new FrancheisPage(page);
    await frpage.FRenquirywithoutDetails();
    

});