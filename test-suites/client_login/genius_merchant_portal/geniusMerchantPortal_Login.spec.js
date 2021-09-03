let homepage = requirePageObjects('HomePage');
let clientpage = requirePageObjects('client_login/ClientLoginPage');

describe('Verify Genius Merchant Portal Login', function () {
    it('verifying the functionality of login', function () {

        homepage.getApplication();
        homepage.clickClientLogin();
        clientpage.clickMerchantLink();
        clientpage.clickGeniusMerchantPortalLink();

        browser.sleep(5000);
    });
});