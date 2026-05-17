import express, { Request, Response } from 'express';

import { createStopController } from '../../../useCases/createStop';
import { updateStopController } from '../../../useCases/updateStop';
import { deleteStopController } from '../../../useCases/deleteStop';
import { getByIdStopController } from '../../../useCases/getByIdStop';
import { getAllStopController } from '../../../useCases/getAllStops';
import { getStopsByPositionController } from '../../../useCases/getStopsByPosition';

const stopRouter = express.Router();

stopRouter.post('/', (request: Request, response: Response) => {
    return createStopController.execute(request, response);
});

stopRouter.put('/:id', (request: Request, response: Response) => {
    return updateStopController.execute(request, response);
});

stopRouter.delete('/:id', (request: Request, response: Response) => {
    return deleteStopController.execute(request, response);
});

stopRouter.get('/:id', (request: Request, response: Response) => {
    return getByIdStopController.execute(request, response);
});

stopRouter.get('/', (request: Request, response: Response) => {
    return getAllStopController.execute(request, response);
});

stopRouter.get('/:latitude/:longitude', (request: Request, response: Response) => {
    return getStopsByPositionController.execute(request, response);
});

export default stopRouter;
