let wrapperMethods = requireWrappers ('wrapperMethods');
let ClientPage = function(){

    let merchantLink = element(by.linkText('Merchant'));
    //let acquiringLink = element(by.linkText('uyubvn-accordion-label'));
    //let issuingLink = element(by.linkText('2d4xeh-accordion-label'));
    let geniusMerchantPortalLink = element(by.linkText('Genius Merchant Portal'));

    this.clickMerchantLink = function(){
        browser.actions().mouseMove(merchantLink).click().perform();
    };

    this.clickGeniusMerchantPortalLink = function(){
        wrapperMethods.javascriptScrollIntoView(geniusMerchantPortalLink);
        browser.actions().mouseMove(geniusMerchantPortalLink).click().perform();
        browser.sleep(10000);
    };

};

module.exports = new ClientPage();