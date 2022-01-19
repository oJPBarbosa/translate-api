import { Page, Browser } from 'puppeteer';

export interface IScraperProvider {
  getBrowser(): Promise<Browser>;
  getPage(browser: Browser): Promise<Page>;
}
