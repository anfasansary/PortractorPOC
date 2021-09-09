// Require protractor-beautiful-reporter to generate reports.
var HtmlReporter = require('protractor-beautiful-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
	directConnect: true,

	// Capabilities to be passed to the webdriver instance.
	capabilities: {
		'browserName': 'chrome',
		chromeOptions: {
			args: ['--disable-gpu']
		}
	},

	framework: 'jasmine',

	//seleniumAddress: 'http://localhost:4444/wd/hub',

	// specs: [
	// 	"test-suites/**/*.spec.js",
	// ],

	suites: {
		regression: ["test-suites/**/*.spec.js"]
		//smoke: ["test-suites/**/*.spec.js"]
		//geniusMerchant: ["test-suites/**/genius_merchant_portal/*.spec.js"]
	},

	// Options to be passed to Jasmine-node.
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 90000,
		isVerbose: true
	},

	onPrepare: () => {
		browser.manage().window().maximize();
		browser.manage().timeouts().implicitlyWait(5000);
		browser.waitForAngularEnabled(false);

		// Add a screenshot reporter and store screenshots to `./test-results`:
		jasmine.getEnv().addReporter(new HtmlReporter({
			baseDirectory: 'test-results',
			preserveDirectory: false, // Preserve base directory
			screenshotsSubfolder: 'screenshots',
			jsonsSubfolder: 'jsons', // JSONs Subfolder
			takeScreenShotsForSkippedSpecs: true, // Screenshots for skipped test cases
			takeScreenShotsOnlyForFailedSpecs: false, // Screenshots only for failed test cases
			docTitle: 'Test Automation Execution Report', // Add title for the html report
			docName: 'TestResult.html', // Change html report file name
			gatherBrowserLogs: true // Store Browser logs
		}).getJasmine2Reporter());

		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath:'./reports'
		})

		);
	

		global.getApplication = function () {
			browser.get('https://www.tsys.com/');
		};

		global.requirePO = function (relativePath) {
			return require(__dirname + '/pages/' + relativePath + '.js');
		};
		global.requireWrappers = function (relativePath) {
			return require(__dirname + '/wrappers/' + relativePath + '.js');
		};
		global.requireUtility = function (relativePath) {
			return require(__dirname + '/utilities/' + relativePath + '.js');
		};
		global.requireTestData = function (relativePath) {
			return require(__dirname + '/test-data/' + relativePath);
		};
	},

	// onComplete: function(){

	// }
};