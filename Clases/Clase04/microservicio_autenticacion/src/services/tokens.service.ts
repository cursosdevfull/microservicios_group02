import { IUserDocument } from '../interface';
import moment from 'moment';
import jwt from 'jwt-simple';
import yenv from 'yenv';

const env = yenv();

export default class {
	static createAccessToken(user: IUserDocument): string {
		const payload = {
			iat: moment().unix(),
			exp: moment().add(env.TOKEN.TIMEOUT, 'minutes').unix(),
			name: user.name,
			id: user._id,
		};

		const accessToken = jwt.encode(payload, env.TOKEN.KEYWORD);

		return accessToken;
	}

	static validateAccessToken(accessToken: string) {
		const promiseValidation = new Promise((resolve, reject) => {
			try {
				const payload = jwt.decode(accessToken, env.TOKEN.KEYWORD);
				resolve(payload);
			} catch (error) {
				if (error.message.toLowerCase() === 'token expired') {
					reject({
						status: 403,
						message: 'Token expired',
					});
				} else {
					reject({
						status: 401,
						message: 'Token is invalid',
					});
				}
			}
		});

		return promiseValidation;
	}
}
