import 'express-async-errors';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { routes } from './routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/api', routes);

app.use(errorHandler);

const port = process.env.APP_PORT || 3000;

app.listen(port, () => console.log(`Server is running on ${process.env.APP_URL}:${port}`));
