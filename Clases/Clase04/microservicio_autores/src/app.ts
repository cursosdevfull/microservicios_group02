import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { IRouteMetadata } from './interface';
import { attachRoutesService } from './services';
import { AuthorController } from './controllers';
import { AuthorRepository } from './repositories';

const app: Application = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const controllers: Array<IRouteMetadata> = [
	{ class: AuthorController, dependencies: [AuthorRepository] },
];

attachRoutesService(app, controllers);

export default app;
