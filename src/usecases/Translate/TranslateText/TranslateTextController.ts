import { TranslateTextUseCase } from './TranslateTextUseCase';
import { Request, Response } from 'express';

export class TranslateTextController {
  constructor(private translateTextUseCase: TranslateTextUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { language, texts } = request.body;

    try {
      const translation: object = await this.translateTextUseCase.execute({
        language,
        texts,
      });

      return response.json(translation);
    } catch (err) {
      return response
        .status(err.hasOwnProperty('status') ? err.status : 500)
        .json({
          error: err.hasOwnProperty('message')
            ? err.message
            : 'Unexpected error.',
        });
    }
  }
}
