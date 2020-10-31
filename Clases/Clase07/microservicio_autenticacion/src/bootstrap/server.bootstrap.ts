import { Application } from 'express';
import http from 'http';
import yenv from 'yenv';
import { MessageUtil } from '../utils';

interface IAddress {
	port: number;
}

const env = yenv();

export default class {
	private app: Application;

	constructor(app: Application) {
		this.app = app;
	}

	async initialize(): Promise<any> {
		const promiseInitialize = new Promise((resolve, reject) => {
			const server = http.createServer(this.app);
			server
				.listen(env.PORT)
				.on('listening', () => {
					MessageUtil.log(
						`Server is running on port ${(server.address() as IAddress).port}`
					);
					resolve();
				})
				.on('error', error => {
					reject(error);
				});
		});

		await promiseInitialize;
	}
}
