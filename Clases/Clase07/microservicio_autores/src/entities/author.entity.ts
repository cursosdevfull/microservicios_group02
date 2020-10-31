import mongoose, { Schema } from 'mongoose';
import { IAuthorDocument } from '../interface';

const schema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},

	lastname: {
		type: String,
		required: true,
		trim: true,
	},

	isActive: {
		type: Boolean,
		default: true,
	},
});

export default mongoose.model<IAuthorDocument>('Author', schema);
