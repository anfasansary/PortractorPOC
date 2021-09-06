let wrapperMethods = requireWrappers ('wrapperMethods');
let ClientPage = function(){

    let merchantLink = element(by.linkText('Merchant'));
    let geniusMerchantPortalLink = element(by.linkText('Genius Merchant Portal'));
    let acquiringLink = element(by.linkText('Acquiring'));
    let varPartnerPortalLink = element(by.linkText('VAR Partner Portal'));

    this.clickMerchantLink = function () {
        wrapperMethods.jsClick(merchantLink);
    };

    this.clickGeniusMerchantPortalLink = function () {
        wrapperMethods.jsClick(geniusMerchantPortalLink);

        // switching to newly opened window using wrapper method
        wrapperMethods.switchtoChild();
    };
    this.clickacquiringLink = function () {
        wrapperMethods.jsClick(acquiringLink);
    };

    this.clickvarPartnerPortalLink = function () {
        wrapperMethods.jsClick(varPartnerPortalLink);

        // switching to newly opened window using wrapper method
        wrapperMethods.switchtoChild();
    };

};

module.exports = new ClientPage();