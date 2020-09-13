import yenv from 'yenv';
import consul from 'consul';
import { MessageUtil } from '../utils';
const env = yenv();

export default class {
	async register() {
		const promiseRegister = new Promise((resolve, reject) => {
			const check = {
				id: env.NAME,
				name: env.NAME,
				address: '192.168.1.5',
				port: env.PORT,
				meta: { prefix: 'author' },
				check: {
					http: `http://192.168.1.5:${env.PORT}/author/health-check`,
					ttl: '5s',
					interval: '5s',
					timeout: '5s',
					deregistercriticalserviceafter: '1m',
				},
			};

			consul().agent.service.register(check, err => {
				if (err) {
					reject(err);
				} else {
					MessageUtil.log('Service registered');
					resolve();
				}
			});
		});

		await promiseRegister;
	}
}
