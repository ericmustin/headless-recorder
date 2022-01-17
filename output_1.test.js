const puppeteer = require('puppeteer');

describe('expectation behavior', () => {


	// jest.setTimeout(10000);
	  beforeAll(async () => {
	    await page.goto('https://en.wikipedia.org/wiki/Ernest_Hemingway');
	  });

	  afterAll(async () => {
	    await browser.close()
	  });

	it('should check for presence of text', async () => {

		// const browser = await puppeteer.launch()
		// const page = await browser.newPage()
		// await page.goto('https://gist.github.com/ericmustin/71f9d53f177ee96d01d81b27578f6dd7')

		await page.setViewport({ width: 1468, height: 1016 })

		await expect(page).toMatch('Ernest Miller Hemingway')
		// await browser.close()
	})
})
