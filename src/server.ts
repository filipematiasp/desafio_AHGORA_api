import "reflect-metadata";
import express from 'express';
import { routes } from "./routes";
import cors from 'cors'
import 'dotenv/config';
import { dataSource } from "./typeorm/database/data-source";

const app = express();
app.use(cors());

app.use(express.json());

app.use(routes);

dataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")
    app.listen(3000, () => console.log('Server is running'));
}).catch((err) => {
    console.error("Error during Data Source initialization:", err)
})