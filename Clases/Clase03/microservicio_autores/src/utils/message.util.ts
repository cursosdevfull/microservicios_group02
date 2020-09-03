import yenv from 'yenv';

const env = yenv();

export default class {
	static log(message: string | Array<string> | Object): void {
		if (process.env.NODE_ENV !== 'test') {
			if (Array.isArray(message)) {
				console.log(env.NAME, message.join(' | '));
			} else if (typeof message === 'object') {
				console.log(env.NAME, JSON.stringify(message));
			} else {
				console.log(env.NAME, message);
			}
		}
	}
}
