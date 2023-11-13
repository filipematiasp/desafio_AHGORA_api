import { Request, Response } from "express";
import { AnalyzeDnaBd } from "../services/AnalyzeDnaBdService";


export class AnalizeDnaBdController {

    public async handle(request: Request, response: Response){
        const sequenceDna = request.body;

        const service = new AnalyzeDnaBd();

        const result = await service.execute(sequenceDna.dna);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        };

        return response.json(result);
    }
}