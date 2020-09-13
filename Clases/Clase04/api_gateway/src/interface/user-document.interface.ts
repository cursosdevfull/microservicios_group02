import { Document } from 'mongoose';

export default interface schema extends Document {
	name?: string;
	email?: string;
	password?: string;
	refreshToken?: string;
	isActive?: boolean;
}
