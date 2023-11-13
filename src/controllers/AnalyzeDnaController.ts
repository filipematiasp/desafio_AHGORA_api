import { Request, Response } from "express";
import { AnalyzeDna } from "../services/AnalyzeDnaService";


export class AnalizeDnaController {

    public handle(request: Request, response: Response){
        const sequenceDna = request.body;

        const service = new AnalyzeDna();

        const result = service.execute(sequenceDna.dna);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        };

        return response.json(result);
    }
}