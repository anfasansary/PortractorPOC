let HomePage = function(){

    let clientLoginButton = element(by.linkText('Login'));

    this.getApplication = function(){
        browser.get('https://www.tsys.com/');
    };

    this.clickClientLogin = function(){
        clientLoginButton.click();
    };

};

module.exports = new HomePage();