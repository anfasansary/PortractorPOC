let homePage = function(){

    let clientLoginButton = element(by.linkText('Login'));

    this.clickClientLogin = function(){
        clientLoginButton.click();
    };

};

module.exports = new homePage();