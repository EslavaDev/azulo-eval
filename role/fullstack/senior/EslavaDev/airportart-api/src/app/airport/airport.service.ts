import { AirportOperator } from "./../../models/airportOperator";
import { getConnectionManager, getRepository, Repository } from "typeorm";
import { Airport } from "../../models/airport";

export class AirportService {
  private _airportDB: Repository<Airport>;
  constructor() {}
  protected create = async (data: Partial<Airport>) => {
    this._airportDB = getRepository(Airport, "default");
    try {
      // se crea la instancia
      const instance = await this._airportDB.create(data);
      // se envia a la BD
      const response = await this._airportDB.save(instance);
      return { data: response };
    } catch (error) {}
  };

  protected findById = async (
    id: number
  ): Promise<{ data: Partial<Airport> }> => {
    this._airportDB = getRepository(Airport, "default");
    let data = {};
    try {
      const response = await this._airportDB.findOne(id);
      data = response || {};
    } catch (error) {}
    return { data };
  };

  protected findAll = async () => {
    this._airportDB = getRepository(Airport, "default");
    try {
      const response = await this._airportDB.find();
      return { data: response };
    } catch (error) {}
  };

  protected count = async () => {
    this._airportDB = getRepository(Airport, "default");
    try {
      const response = await this._airportDB.count();
      return { data: response };
    } catch (error) {}
  };

  protected updateOperator = async (id: number, operator: number) => {
    this._airportDB = getRepository(Airport, "default");
    const _airportOperatorDB = getRepository(AirportOperator, "default");

    const airportFind = await this._airportDB.findOneOrFail(id);
    const operatorExists = await _airportOperatorDB.findOneOrFail(operator);
    await this._airportDB.update(id, { airportOperatorId: operator });

    return {
      data: {
        ...airportFind,
        airportOperatorId: operatorExists,
      },
    };
  };
  protected updatePriority = async (id: number, priority: number) => {
    this._airportDB = getRepository(Airport, "default");
    const airportFind = await this._airportDB.findOneOrFail(id);
    await this._airportDB.update(id, { priorityOrder: priority });
    return {
      data: {
        ...airportFind,
        priorityOrder: priority,
      },
    };
  };
}
