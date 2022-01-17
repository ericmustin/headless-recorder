
const puppeteer = require('puppeteer');
describe('expectation behavior', () => {

  beforeAll(async () => {
    await page.goto("https://www.primary.com/");
  });

  afterAll(async () => {
    await browser.close()
  });

  it("should check for presence of text at https://www.primary.com/", async () => {

const navigationPromise = page.waitForNavigation()

await page.goto('https://www.primary.com/')

await page.setViewport({ width: 1196, height: 1016 })

await page.waitForSelector('#guided-search-home-guided-search > .pw-m-t-5 > .pw-swatch-list > .pw-flex-shrink-none:nth-child(1) > .pw-swatch-list__swatch')
await page.click('#guided-search-home-guided-search > .pw-m-t-5 > .pw-swatch-list > .pw-flex-shrink-none:nth-child(1) > .pw-swatch-list__swatch')

await navigationPromise

await expect(page).toMatch('Shop by Color')

  })
})