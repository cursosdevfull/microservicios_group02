import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/health-check', (req: Request, res: Response) => {
	res.send('I am alive. All is well');
});

export default app;
