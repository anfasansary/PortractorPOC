let testData = requireTestData("testdata.json");
let homepage = requirePO('homePage');
let clientpage = requirePO('client_login/clientLoginPage');
let businesspage = requirePO('client_login/genius_merchant_portal/geniusMerchantPortalPage');
let wrapperMethods = requireWrappers ('wrapperMethods');

describe('Verify Genius Merchant Portal Login', function () {
    it('Verifying the functionality of login', function () {

        getApplication();
        homepage.clickClientLogin();
        clientpage.clickMerchantLink();
        clientpage.clickGeniusMerchantPortalLink();

        businesspage.clickLogin();
        businesspage.sendUsername(testData.GeniusMerchantLogin.Username);
        businesspage.sendPassword(testData.GeniusMerchantLogin.Password);
        browser.sleep(3000);
        businesspage.buttonLogin();

        expect(businesspage.errorClass()).toBe(true);
        wrapperMethods.browserCleanUp();
    });
});