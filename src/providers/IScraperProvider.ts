import { Page, Browser} from 'puppeteer'

export interface IScraperProvider {
  getBrowser(): Promise<Browser>;
  getScraper(browser: Browser): Promise<Page>;
}