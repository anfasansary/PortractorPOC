let homepage = requirePO('HomePage');
let clientpage = requirePO('client_login/ClientLoginPage');
let businesspage = requirePO('client_login/genius_merchant_portal/geniusMerchantPortalPage');

describe('Verify Genius Merchant Portal Login', function () {
    it('verifying the functionality of login', function () {

        homepage.getApplication();
        homepage.clickClientLogin();
        clientpage.clickMerchantLink();
        clientpage.clickGeniusMerchantPortalLink();

        businesspage.clickLogin();
        businesspage.sendUsername('username');
        businesspage.sendPassword('password');
        browser.sleep(3000);
        businesspage.buttonLogin();

        expect(businesspage.errorClass()).toBe(true);
    });
});