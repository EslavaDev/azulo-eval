import { Application } from 'express';
import { routesAirport } from './app/airport';


export const useRoutes = (app: Application) => {
  console.info('initializate route');
  app.use('/airport', routesAirport);
  console.info('syncronize routes complete!');
};
