import { IAuthorRepository, IAuthorDocument } from '../interface';
import { Author } from '../entities';

export default class implements IAuthorRepository {
	async getAll(): Promise<IAuthorDocument[]> {
		const authors: IAuthorDocument[] = await Author.find();
		return authors;
	}
	async getOne(id: string): Promise<IAuthorDocument> {
		const author: IAuthorDocument = await Author.findById(id);
		return author;
	}
	async insert(author: IAuthorDocument): Promise<IAuthorDocument> {
		const authorInserted: IAuthorDocument = await Author.create(author);
		return authorInserted;
	}
	async update(id: string, author: IAuthorDocument): Promise<IAuthorDocument> {
		const authorUpdated: IAuthorDocument = await Author.findByIdAndUpdate(
			id,
			author,
			{ new: true }
		);
		return authorUpdated;
	}
	async delete(id: string): Promise<IAuthorDocument> {
		const authorDeleted: IAuthorDocument = await Author.findByIdAndUpdate(
			id,
			{ isActive: false },
			{ new: true }
		);
		return authorDeleted;
	}
}
