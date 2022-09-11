import cors from "cors";
import express, { Application, Request, Response } from "express";

import { useRoutes } from "./routes";


const port = process.env.PORT || 8000;

// Body parsing Middleware

export const initServer = async(app: Application) => {
    try {
      app.use(express.json());
      app.use(express.urlencoded({ extended: true }));
      
      app.use(cors());
      
      app.get("/", async (_req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
          message: "API AZULO V1!",
        });
      });
    await useRoutes(app);
    app.listen(port, (): void => {
      console.log(`Connected successfully on port ${port}`);
    });
  } catch (error: any) {
    console.error(`Error occured: ${error.message}`);
  }
};
