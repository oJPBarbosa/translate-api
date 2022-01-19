import { PuppeteerScraperProvider } from '../../../providers/implementations/PuppeteerScraperProvider';
import { IScraperProvider } from '../../../providers/IScraperProvider';
import { TranslateTextUseCase } from './TranslateTextUseCase';
import { TranslateTextController } from './TranslateTextController';

const puppeteerScraperProvider: IScraperProvider =
  new PuppeteerScraperProvider();

const translateTextUseCase: TranslateTextUseCase = new TranslateTextUseCase(
  puppeteerScraperProvider,
);

const translateTextController: TranslateTextController =
  new TranslateTextController(translateTextUseCase);

export { translateTextController };
