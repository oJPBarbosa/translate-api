import { Page } from 'puppeteer'

export interface ILanguage {
  source: string;
  target: string;
}

export interface TranslateTextRequestDTO {
  language: ILanguage;
  texts: object;
}

export interface GetTranslationDTO {
  page: Page;
  language: ILanguage;
  values: string[];
}

export interface ITranslation {
  language: string;
  texts: object;
}