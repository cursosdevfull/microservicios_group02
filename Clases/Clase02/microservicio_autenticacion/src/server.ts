import { ServerBootstrap, DatabaseBootstrap } from './bootstrap';
import app from './app';
import { MessageUtil } from './utils';

const start = async () => {
	const serverBootstrap = new ServerBootstrap(app);
	const databaseBootstrap = new DatabaseBootstrap();

	try {
		await serverBootstrap.initialize();
		await databaseBootstrap.initialize();
	} catch (error) {
		MessageUtil.log(error);
		process.exit(1);
	}
};

start();
