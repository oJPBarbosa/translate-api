import { IScraperProvider } from '../IScraperProvider';
import puppeteer, { Browser, Page } from 'puppeteer';

export class PuppeteerScraperProvider implements IScraperProvider {
  async getBrowser(): Promise<Browser> {
    const browser: Browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    return browser;
  }

  async getPage(browser: Browser): Promise<Page> {
    const page: Page = await browser.newPage();

    return page;
  }
}
