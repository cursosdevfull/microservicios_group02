import { ServerBootstrap } from './bootstrap';
import 'reflect-metadata';
import app from './app';
import { MessageUtil } from './utils';

const start = async () => {
	const serverBootstrap = new ServerBootstrap(app);

	try {
		await serverBootstrap.initialize();
	} catch (error) {
		MessageUtil.log(error);
		process.exit(1);
	}
};

start();
