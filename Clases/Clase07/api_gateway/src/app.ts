import express, { Application } from 'express';
import cors from 'cors';
import { IRouteMetadata } from './interface';
import { AuthController, AuthorController } from './controllers';
import { attachRoutesService, RequestService } from './services';
import { ClientRequestRepository } from './repositories';

const app: Application = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const controllers: Array<IRouteMetadata> = [
	{
		class: AuthController,
		dependencies: [
			{ class: RequestService, subDependencies: [ClientRequestRepository] },
		],
	},
	{
		class: AuthorController,
		dependencies: [
			{ class: RequestService, subDependencies: [ClientRequestRepository] },
		],
	},
];

attachRoutesService(app, controllers);

export default app;
