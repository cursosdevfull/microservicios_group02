import { IUserDocument } from '.';

export default interface repository {
	getUserByEmail(email: string): Promise<IUserDocument>;
	getUserByRefreshToken(refreshToken: string): Promise<IUserDocument>;
	insert(user: IUserDocument): Promise<IUserDocument>;
}
