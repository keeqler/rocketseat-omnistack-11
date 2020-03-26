import { Router } from 'express';

import SessionController from './controllers/SessionController';
import OngController from './controllers/OngController';
import IncidentController from './controllers/IncidentController';
import OngIncidentsController from './controllers/OngIncidentsController';

const router = Router();

router.post('/sessions', SessionController.store);

router.post('/ongs', OngController.store);

router.post('/incidents', IncidentController.create);
router.get('/incidents', IncidentController.index);
router.delete('/incidents/:id', IncidentController.delete);

router.get('/ong_incidents', OngIncidentsController.index);

export default router;
