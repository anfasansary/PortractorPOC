let wrapperMethods = requireWrappers ('wrapperMethods');
let clientLoginPage = function(){

    let merchantLink = element(by.linkText('Merchant'));
    let geniusMerchantPortalLink = element(by.linkText('Genius Merchant Portal'));

    this.clickMerchantLink = function () {
        wrapperMethods.jsClick(merchantLink);
    };

    this.clickGeniusMerchantPortalLink = function () {
        wrapperMethods.jsClick(geniusMerchantPortalLink);

        // switching to newly opened window using wrapper method
        wrapperMethods.switchtoChild();
    };

};

module.exports = new clientLoginPage();