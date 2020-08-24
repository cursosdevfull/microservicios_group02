import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { IRouteMetadata } from './interface';
import { AuthController } from './controllers';
import { UserRepository } from './repositories';
import { attachRoutesService } from './services';

const app: Application = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/health-check', (req: Request, res: Response) => {
	res.send('I am alive. All is well');
});

const controllers: Array<IRouteMetadata> = [
	{ class: AuthController, dependencies: [UserRepository] },
];

attachRoutesService(app, controllers);

export default app;
