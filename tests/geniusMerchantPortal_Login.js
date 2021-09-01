let homepage = require('../pages/HomePage');
let clientpage = require('../pages/ClientLogin');
const ClientLogin = require('../pages/ClientLogin');

describe('Verify Genius Merchant Portal Login', function () {
    it('verifying the functionality of login', function () {

        homepage.getApplication();
        homepage.clickClientLogin();
        clientpage.clickMerchantLink();
        clientpage.clickGeniusMerchantPortalLink();

        browser.sleep(3000);
    });
});