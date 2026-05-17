import express, { Request, Response } from 'express';

import { createLineController } from '../../../useCases/createLine';
import { updateLineController } from '../../../useCases/updateLine';
import { deleteLineController } from '../../../useCases/deleteLine';
import { getByIdLineController } from '../../../useCases/getByIdLine';
import { getAllLineController } from '../../../useCases/getAllLines';
import { getLinesByStopController } from '../../../useCases/getLinesByStop';

const lineRouter = express.Router();

lineRouter.post('/', (request: Request, response: Response) => {
    return createLineController.execute(request, response);
});

lineRouter.put('/:id', (request: Request, response: Response) => {
    return updateLineController.execute(request, response);
});

lineRouter.delete('/:id', (request: Request, response: Response) => {
    return deleteLineController.execute(request, response);
});

lineRouter.get('/:id', (request: Request, response: Response) => {
    return getByIdLineController.execute(request, response);
});

lineRouter.get('/', (request: Request, response: Response) => {
    return getAllLineController.execute(request, response);
});

lineRouter.get('/lines-by-stop/:stop_id', (request: Request, response: Response) => {
    return getLinesByStopController.execute(request, response);
});

export default lineRouter;
