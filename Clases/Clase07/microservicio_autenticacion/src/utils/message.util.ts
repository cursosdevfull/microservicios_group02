export default class {
	static log(message: string | Array<string> | { [s: string]: string }): void {
		if (process.env.NODE_ENV !== 'test') {
			if (Array.isArray(message)) {
				console.log('MS AUTH', message.join(' | '));
			} else if (typeof message === 'object') {
				console.log('MS AUTH', JSON.stringify(message));
			} else {
				console.log('MS AUTH', message);
			}
		}
	}
}
