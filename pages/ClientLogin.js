let ClientPage = function(){

    let merchantLink = element(by.id('t8t9jt-accordion-label'));
    let acquiringLink = element(by.id('uyubvn-accordion-label'));
    let issuingLink = element(by.id('2d4xeh-accordion-label'));
    let geniusMerchantPortalLink = element(by.linkText('Genius Merchant Portal'));

    this.clickMerchantLink = function(){
        merchantLink.click();
    };

    this.clickGeniusMerchantPortalLink = function(){
        geniusMerchantPortalLink.click();
    };

};

module.exports = new ClientPage();