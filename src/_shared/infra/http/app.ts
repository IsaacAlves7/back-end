import express, { Request, Response } from 'express';

import stopRouter from '../../../modules/stops/infra/http/routes';
import lineRouter from '../../../modules/lines/infra/http/routes';
import vehicleRouter from '../../../modules/vehicle/infra/http/routes';
import vehiclePositionRouter from '../../../modules/vehicle_position/infra/http/vehicle_position';

const app = express();

app.use(express.json());

app.use('/stops', stopRouter);
app.use('/lines', lineRouter);
app.use('/vehicles', vehicleRouter);
app.use('/vehicles-positions', vehiclePositionRouter);

app.use('/', (request: Request, response: Response) => {
    return response.json('AIKO Desafio Técnico - Back-End');
});

export default app;
