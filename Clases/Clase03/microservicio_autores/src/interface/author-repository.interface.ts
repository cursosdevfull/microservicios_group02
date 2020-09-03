import { IAuthorDocument } from '.';

export default interface repository {
	getAll(): Promise<IAuthorDocument[]>;
	getOne(id: string): Promise<IAuthorDocument>;
	insert(author: IAuthorDocument): Promise<IAuthorDocument>;
	update(id: string, author: IAuthorDocument): Promise<IAuthorDocument>;
	delete(id: string): Promise<IAuthorDocument>;
}
