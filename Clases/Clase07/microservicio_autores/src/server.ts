import {
	ServerBootstrap,
	DatabaseBootstrap,
	// DiscoveryBootstrap,
} from './bootstrap';
import 'reflect-metadata';
import app from './app';
import { MessageUtil } from './utils';

const start = async () => {
	const serverBootstrap = new ServerBootstrap(app);
	const databaseBootstrap = new DatabaseBootstrap();
	// const discoveryBootstrap = new DiscoveryBootstrap();

	try {
		await serverBootstrap.initialize();
		await databaseBootstrap.initialize();
		// await discoveryBootstrap.register();
	} catch (error) {
		databaseBootstrap.disconnect();
		MessageUtil.log(error);
		process.exit(1);
	}
};

start();
