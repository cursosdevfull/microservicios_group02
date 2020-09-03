import consul from 'consul';
import { MessageUtil } from '../utils';

export default class ByDefault {
	private static instance: ByDefault;
	static listServices: any;

	private constructor() {}

	static async getInstance() {
		if (!ByDefault.instance) {
			ByDefault.instance = new ByDefault();
		}

		const promiseList = new Promise((resolve, reject) => {
			consul().agent.service.list((err, result) => {
				if (err) {
					reject(err);
				} else {
					ByDefault.listServices = result;
					// console.log(result);
					MessageUtil.log('Get list discovery successful');
					resolve();
				}
			});
		});

		await promiseList;

		return ByDefault.instance;
	}
}
