import { AirportController } from './airport.controller';
import Route from 'express';

const routesAirport = Route();
const airportController = new AirportController();

routesAirport.get('/', airportController.findAllController);
routesAirport.get('/count', airportController.countController);
routesAirport.get('/:id', airportController.findByIdController);
routesAirport.get('/health', (req, res) => res.json({ message: 'airport' }));

routesAirport.post('/', airportController.createController);

routesAirport.put('/operator/:id', airportController.updateOperatorController);
routesAirport.put('/priority/:id', airportController.updatePriorityController);

export { routesAirport };
