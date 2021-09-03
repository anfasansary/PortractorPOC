let wrapperMethods = function () {
    this.javascriptScrollIntoView = function (element) {
        browser.executeScript("arguments[0].scrollIntoView();", element);
    };
};

module.exports = new wrapperMethods();