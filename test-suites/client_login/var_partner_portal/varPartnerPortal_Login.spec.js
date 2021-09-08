let homepage = requirePO('HomePage');
let clientpage = requirePO('client_login/ClientLoginPage');
let businesspage = requirePO('client_login/var_partner_portal/varPartnerPortal_Login.page');
let partnerLogin = requirePO('client_login/var_partner_portal/varPartnerPortal_userLogin.page');
let wrapperMethods = requireWrappers ('wrapperMethods');
describe('Verify VAR Partner Portal Login', function () {
    it('verifying the functionality of login in VAR Partner Portal', function () {

        getApplication();
        homepage.clickClientLogin();
        clientpage.clickacquiringLink();
        clientpage.clickvarPartnerPortalLink();

        businesspage.clickLogin();
        partnerLogin.sendUsername('test');
        partnerLogin.sendPassword('test');
        partnerLogin.buttonLogin();
        expect(partnerLogin.errorClass()).toBe(true);
        browser.sleep(3000);
        wrapperMethods.browserCleanUp();
    });
    
});