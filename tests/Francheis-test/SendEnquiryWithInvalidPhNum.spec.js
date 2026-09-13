const { test ,expect} = require('../../fixtures/base');
const {FrancheisPage} = require('../../POM/FrancheisPage');

const franchiesDetailsData = JSON.parse(JSON.stringify(require('../../Utils/sendwithdetails.json')));

test('Send Enquiry with Invalid Mobile Number',async({homePage,page})=>{


const frpage = new FrancheisPage(page);
await frpage.FRenquirywithInvalidDetails(franchiesDetailsData.frname,
                                  franchiesDetailsData.invalidfrPhone,
                                  franchiesDetailsData.frMail,
                                  franchiesDetailsData.frstate,
                                  franchiesDetailsData.frcity,
                                  franchiesDetailsData.frformat,
                                  franchiesDetailsData.frinvestement,
                                  franchiesDetailsData.frSpace,
                                  franchiesDetailsData.frTimeperiod,
                                  franchiesDetailsData.frBusinessExp);



});