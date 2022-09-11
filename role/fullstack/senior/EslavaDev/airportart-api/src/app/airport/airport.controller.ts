import { Request, Response } from "express";
import { AirportService } from "./airport.service";

export class AirportController extends AirportService {
  createController = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      const data = await this.create(body);
      res.status(201).json({ ...data, code: 201 });
    } catch (error) {
      console.error(error);
    } finally {
      res.end();
    }
  };
  findByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const data = await this.findById(Number(id));
      res.json({ ...data, code: 200 });
    } catch (error) {
      console.error(error);
    } finally {
      res.end();
    }
  };

  findAllController = async (req: Request, res: Response) => {
    try {
      const data = await this.findAll();
      res.json({ ...data, code: 200 });
    } catch (error) {
      console.error(error);
    } finally {
      res.end();
    }
  };

  countController = async (req: Request, res: Response) => {
    try {
      const data = await this.count();
      res.json({ ...data, code: 200 });
    } catch (error) {
      console.error(error);
    } finally {
      res.end();
    }
  };

  updateOperatorController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { operator } = req.body;
    try {
      const idNumber = Number(id);
      if (typeof idNumber !== "number") {
        throw Error(`id airport ${id} is not number`);
      }
      if (typeof operator !== "number") {
        throw Error(`operator ${operator} is not number`);
      }
      const data = await this.updateOperator(Number(id), operator);
      res.json({ ...data, code: 200 });
    } catch (error: any) {
      res.status(404).json({ error: error.message, code: 404 });
    } finally {
      res.end();
    }
  };
  updatePriorityController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { priority } = req.body;
    try {
      const idNumber = Number(id);
      if (typeof idNumber !== "number") {
        throw Error(`id airport ${id} is not number`);
      }
      if (typeof priority !== "number") {
        throw Error(`priority ${priority} is not number`);
      }
      const data = await this.updatePriority(Number(id), priority);
      res.json({ ...data, code: 200 });
    } catch (error: any) {
      res.status(404).json({ error: error.message, code: 404 });
    } finally {
      res.end();
    }
  };
}
