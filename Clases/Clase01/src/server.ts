import { ServerBootstrap } from './bootstrap';
import app from './app';

const start = async () => {
	const serverBootstrap = new ServerBootstrap(app);

	try {
		await serverBootstrap.initialize();
	} catch (error) {
		console.log(error);
	}
};

start();
