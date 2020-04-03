import { Router } from 'express';

import SessionController from './controllers/SessionController';
import OngController from './controllers/OngController';
import IncidentController from './controllers/IncidentController';
import OngIncidentsController from './controllers/OngIncidentsController';

import IncidentValidators from './validators/IncidentValidators';
import SessionValidators from './validators/SessionValidators';
import OngValidators from './validators/OngValidators';
import OngIncidentsValidators from './validators/OngIncidentsValidators';

const router = Router();

router.post('/sessions', SessionValidators.store, SessionController.store);

router.post('/ongs', OngValidators.store, OngController.store);

router.post('/incidents', IncidentValidators.store, IncidentController.store);
router.get('/incidents', IncidentValidators.index, IncidentController.index);
router.delete(
  '/incidents/:id',
  IncidentValidators.delete,
  IncidentController.delete
);

router.get(
  '/ong_incidents',
  OngIncidentsValidators.index,
  OngIncidentsController.index
);

export default router;
