import mongoose from 'mongoose';
import yenv from 'yenv';
import { MessageUtil } from '../utils';

const env = yenv();

export default class {
	async initialize() {
		const promiseInitialize = new Promise((resolve, reject) => {
			const connectionString = `mongodb://${env.MONGO.USER}:${env.MONGO.PASS}@${env.MONGO.HOST}:${env.MONGO.PORT}/${env.MONGO.DB}?authSource=admin`;
			const options = {
				useNewUrlParser: true,
				useCreateIndex: true,
				useUnifiedTopology: true,
				poolSize: 10,
			};
			const callback = (err: any) => {
				if (err) {
					reject(err);
				} else {
					MessageUtil.log('Database is up');
					resolve();
				}
			};

			mongoose.connect(connectionString, options, callback);
		});

		await promiseInitialize;
	}
}
