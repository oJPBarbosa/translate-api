import { IScraperProvider } from '../../../providers/IScraperProvider';
import {
  ITranslateTextRequestDTO,
  GetTranslationDTO,
  ITranslation,
} from './TranslateTextDTO';
import { analyzeDTO } from '../../../errors/DTOError';
import { ExecuteError } from '../../../errors/ExecuteError';
import { languages } from '../../../utils/languages';
import { Browser, Page, ElementHandle } from 'puppeteer';

export class TranslateTextUseCase {
  constructor(private scraperProvider: IScraperProvider) {}

  async execute(data: ITranslateTextRequestDTO): Promise<object> {
    try {
      analyzeDTO(data);
    } catch (err) {
      throw new ExecuteError({
        message: err.message,
        status: 400,
      });
    }

    const { language, texts } = data;
    const { source, target } = language;

    if (!languages.includes(source) || !languages.includes(target)) {
      throw new ExecuteError({
        message: `Invalid ${
          languages.includes(source) ? 'target' : 'source'
        } language.`,
        status: 400,
      });
    }

    const keys: string[] = Object.keys(texts).filter(
      (textKey: string) => textKey !== '',
    );
    const values: string[] = Object.values(texts).filter(
      (textsValue: string) => textsValue !== '',
    );

    let browser: Browser;
    let page: Page;

    try {
      browser = await this.scraperProvider.getBrowser();
      page = await this.scraperProvider.getPage(browser);
    } catch (err) {
      throw new ExecuteError({
        message: 'Unexpected error ocurred during scraper initialization.',
        status: 500,
      });
    }

    try {
      const translation: ITranslation = {
        language: target,
        texts: {},
      };

      (
        await this.getTranslation({
          page,
          language,
          values,
        })
      ).forEach((translated: string, index: number) => {
        translation.texts[keys[index]] = translated;
      });

      await browser.close();

      return {
        translation,
      };
    } catch (err) {
      await browser.close();

      throw new ExecuteError({
        message: 'Unexpected error ocurred during translation.',
        status: 500,
      });
    }
  }

  async getTranslation(data: GetTranslationDTO): Promise<string[]> {
    const { page, language, values } = data;
    const { source, target } = language;

    let translation: string[];
    for (const value of values) {
      await page.goto(
        `https://deepl.com/translator#${source}/${target}/${value}`,
      );
      await page.waitForNetworkIdle();

      const textarea: ElementHandle<HTMLTextAreaElement> = await page.$(
        '[dl-test="translator-target-input"]',
      );

      const translated: string = (await textarea.getProperty('value'))
        .toString()
        .split(':')[1];

      translation.push(translated);
    }

    return translation;
  }
}
