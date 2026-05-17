import express, { Request, Response } from 'express';

import { createVehiclePositionController } from '../../../useCases/createVehiclePosition';
import { updateVehiclePositionController } from '../../../useCases/updateVehiclePosition';
import { deleteVehiclePositionController } from '../../../useCases/deleteVehiclePosition';
import { getByIdVehiclePositionController } from '../../../useCases/getByIdVehiclePosition';
import { getAllVehiclesPositionsController } from '../../../useCases/getAllVehiclesPositions';

const vehiclePositionRouter = express.Router();

vehiclePositionRouter.post('/', (request: Request, response: Response) => {
    return createVehiclePositionController.execute(request, response);
});

vehiclePositionRouter.put('/:id', (request: Request, response: Response) => {
    return updateVehiclePositionController.execute(request, response);
});

vehiclePositionRouter.delete('/:id', (request: Request, response: Response) => {
    return deleteVehiclePositionController.execute(request, response);
});

vehiclePositionRouter.get('/:id', (request: Request, response: Response) => {
    return getByIdVehiclePositionController.execute(request, response);
});

vehiclePositionRouter.get('/', (request: Request, response: Response) => {
    return getAllVehiclesPositionsController.execute(request, response);
});

export default vehiclePositionRouter;
