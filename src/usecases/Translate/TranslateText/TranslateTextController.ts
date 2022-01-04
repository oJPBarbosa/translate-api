import { TranslateTextUseCase } from './TranslateTextUseCase'
import { Request, Response } from 'express'

export class TranslateTextController {
  constructor(
    private translateTextUseCase: TranslateTextUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { source, target, texts } = request.body;

    try {
      const translation: object = await this.translateTextUseCase.execute({ 
        language: {
          source,
          target,
        },
        texts,
      });

      return response.json(translation);
    } catch (err) {
      return response.status((err.hasOwnProperty('status') ? err.status : 500)).json({
        [err._message?.key || 'error']: err._message?.value || 'Unexpected error.',
      });
    }
  }
}