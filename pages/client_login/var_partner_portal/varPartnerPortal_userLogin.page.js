const { element, browser } = require("protractor");
let partnerPortalLogin = function(){

    let username=element(by.id('username'));
    let password=element(by.id('password'));
    let submitLogin=element(by.id('Login'));
    let errorClass=element(by.className('loginError'));
    
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

module.exports = new partnerPortalLogin();