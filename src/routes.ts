import { Router } from 'express';

import { translateTextController } from './usecases/Translate/TranslateText';

const router: Router = Router();

router.post('/', (request, response) =>
  translateTextController.handle(request, response),
);

export default router;
