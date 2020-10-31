import { Document } from 'mongoose';

export default interface schema extends Document {
	name?: string;
	lastname?: string;
	isActive?: boolean;
}
