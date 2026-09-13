const base = require('@playwright/test');
const {HomePage} = require('../POM/HomePage');

exports.test = base.test.extend({

      homePage: async ({ page }, use) => {

        const homePage = new HomePage(page);

        await homePage.goto();
        await homePage.skipoffer();

        await use(homePage);
         
    }

});
exports.expect = base.expect;