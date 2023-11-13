import { Router } from "express"
import { AnalizeDnaController } from "./controllers/AnalyzeDnaController";
import { AnalizeDnaBdController } from "./controllers/AnalyzeDnaBdController";

const routes = Router();

routes.post("/analisyDna", new AnalizeDnaController().handle)
routes.post("/analisyDnaBd", new AnalizeDnaBdController().handle)

export { routes }
