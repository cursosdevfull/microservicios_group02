import { Application } from 'express';
import http from 'http';

export default class {
	private app: Application;

	constructor(app: Application) {
		this.app = app;
	}

	async initialize(): Promise<any> {
		const promiseInitialize = new Promise((resolve, reject) => {
			const server = http.createServer(this.app);
			server
				.listen(4000)
				.on('listening', () => {
					console.log('Server is running');
					resolve();
				})
				.on('error', error => {
					console.log(error);
					reject(error);
				});
		});

		await promiseInitialize;
	}
}
