const { element, browser } = require("protractor");
let wrapperMethods = requireWrappers('wrapperMethods');
let partnerPortal = function () {

    let businessLogin = element(by.linkText('Login'));
    this.clickLogin = function () {
        wrapperMethods.jsClick(businessLogin);
    };

}

module.exports = new partnerPortal();