const { element, browser } = require("protractor");

let geniusMerchantPortalPage = function(){

    let businessLogin = element(by.id('login'));
    let username=element(by.xpath("(//input[@name='username'])[2]"));
    let password=element(by.xpath("(//input[@name='password'])[2]"));
    let submitLogin=element(by.id('submit_login'));
    let errorClass=element(by.className('error'));

    this.clickLogin = function(){
        businessLogin.click();
    };

    this.sendUsername = function(User){
        username.sendKeys(User);  
    };
    this.sendPassword = function(Pass){
        password.sendKeys(Pass);
    };

    this.buttonLogin=function(){
        submitLogin.click();
    };

    this.errorClass = function(){
        return errorClass.isPresent();
    };

}

module.exports = new geniusMerchantPortalPage();