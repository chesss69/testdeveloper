import express from 'express';
import cors from 'cors';
import personRoutes from './routes/persona.route';
import authRoutes from './routes/auth.route';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import {options} from "./swaggerOptions";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/persona", personRoutes);
app.use("/api/auth", authRoutes);
const specs = swaggerJsDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
export default app;