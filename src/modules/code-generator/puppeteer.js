import Block from '@/modules/code-generator/block'
import { headlessActions } from '@/modules/code-generator/constants'
import BaseGenerator from '@/modules/code-generator/base-generator'

const importPuppeteer = `const puppeteer = require('puppeteer');\n`

const header = `const browser = await puppeteer.launch()
const page = await browser.newPage()`

const footer = `await browser.close()`

const wrappedHeader = `(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()\n`

const wrappedFooter = `  await browser.close()
})()`

function jestHeader(href) {
  return `describe('expectation behavior', () => {

  beforeAll(async () => {
    await page.goto("${href}");
  });

  afterAll(async () => {
    await browser.close()
  });

  it("should check for presence of text at ${href}", async () => {\n`
}

const jestFooter = `  })
})`

export default class PuppeteerCodeGenerator extends BaseGenerator {
  constructor(options) {
    super(options)
    this._header = header
    this._footer = footer
    this._wrappedHeader = wrappedHeader
    this._wrappedFooter = wrappedFooter
    this._jestHeader = jestHeader
    this._jestFooter = jestFooter
  }

  generate(events) {
    console.log('yes')
    const initialHref = events.find( event => (event.action && event.action == 'GOTO') ) ? events.find( event => (event.action && event.action == 'GOTO') ).href : ""

    return importPuppeteer + this._getHeader(initialHref, true) + this._parseEvents(events) + this._getFooter(true)
  }

  _handleViewport(width, height) {
    return new Block(this._frameId, {
      type: headlessActions.VIEWPORT,
      value: `await ${this._frame}.setViewport({ width: ${width}, height: ${height} })`,
    })
  }
}
