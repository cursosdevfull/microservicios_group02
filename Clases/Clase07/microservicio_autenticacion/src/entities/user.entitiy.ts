import mongoose, { Schema } from 'mongoose';
import bcryptjs from 'bcryptjs';
import { IUserDocument } from '../interface';

const schema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},

	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		unique: true,
	},

	password: {
		type: String,
		required: true,
		trim: true,
	},

	isActive: {
		type: Boolean,
		default: true,
	},

	refreshToken: {
		type: String,
		required: true,
	},
});

schema.pre('save', async function (next) {
	const self: IUserDocument = this as IUserDocument;

	if (this.isModified('password')) {
		self.password = await bcryptjs.hash(self.password, 10);
	}
	next();
});

export default mongoose.model<IUserDocument>('User', schema);
