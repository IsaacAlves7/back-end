import express, { Request, Response } from 'express';

import { createVehicleController } from '../../../useCases/createVehicle';
import { updateVehicleController } from '../../../useCases/updateVehicle';
import { deleteVehicleController } from '../../../useCases/deleteVehicle';
import { getByIdVehicleController } from '../../../useCases/getByIdVehicle';
import { getAllVehicleController } from '../../../useCases/getAllVehicles';
import { getVehiclesByLineController } from '../../../useCases/getVehiclesByLine';

const vehicleRouter = express.Router();

vehicleRouter.post('/', (request: Request, response: Response) => {
    return createVehicleController.execute(request, response);
});

vehicleRouter.put('/:id', (request: Request, response: Response) => {
    return updateVehicleController.execute(request, response);
});

vehicleRouter.delete('/:id', (request: Request, response: Response) => {
    return deleteVehicleController.execute(request, response);
});

vehicleRouter.get('/:id', (request: Request, response: Response) => {
    return getByIdVehicleController.execute(request, response);
});

vehicleRouter.get('/', (request: Request, response: Response) => {
    return getAllVehicleController.execute(request, response);
});

vehicleRouter.get('/vehicles-by-line/:line_id', (request: Request, response: Response) => {
    return getVehiclesByLineController.execute(request, response);
});

export default vehicleRouter;
