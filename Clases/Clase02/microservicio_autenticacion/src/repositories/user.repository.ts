import { IUserRepository, IUserDocument } from '../interface';
import { User } from '../entities';
import randToken from 'rand-token';

export default class implements IUserRepository {
	async getUserByEmail(email: string): Promise<IUserDocument> {
		const userMatched: IUserDocument = await User.findOne({
			email,
		});
		return userMatched;
	}
	async getUserByRefreshToken(refreshToken: string): Promise<IUserDocument> {
		const userMatched: IUserDocument = await User.findOne({
			refreshToken,
		});
		return userMatched;
	}
	async insert(user: IUserDocument): Promise<IUserDocument> {
		user['refreshToken'] = randToken.uid(256);
		const userInserted: IUserDocument = new User(user);
		await userInserted.save();
		return userInserted;
	}
}
