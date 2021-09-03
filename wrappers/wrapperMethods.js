let wrapperMethods = function () {
    this.javascriptScrollIntoView = function (element) {
        browser.executeScript("arguments[0].scrollIntoView();", element);
    };

    this.switchtoChild = function () {
        browser.getAllWindowHandles().then(function (handles) {
            if (handles.length > 1) {
                browser.switchTo().window(handles[1]).then(function () {
                    console.log("Switched to child window ");
                });
            };
        });
    };

    this.jsClick = function (element) {
        browser.executeScript("arguments[0].click();", element);
    };
};

module.exports = new wrapperMethods();