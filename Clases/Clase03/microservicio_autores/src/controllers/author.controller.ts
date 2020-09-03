import { Controller, Post, Get, Put, Delete } from '../decorators';
import { Request, Response } from 'express';
import { AuthorRepository } from '../repositories';

@Controller('/author')
export default class {
	private authorRepository: AuthorRepository;

	constructor(authorRepository: AuthorRepository) {
		this.authorRepository = authorRepository;
	}

	@Get('/health-check')
	async getHealthCheck(req: Request, res: Response) {
		res.send('I am alive');
	}

	@Get('/')
	async getAll(req: Request, res: Response) {
		const results = await this.authorRepository.getAll();
		res.json(results);
	}

	@Get('/:id')
	async getById(req: Request, res: Response) {
		const id = req.params.id;
		const result = await this.authorRepository.getOne(id);
		res.json(result);
	}

	@Post('/')
	async insert(req: Request, res: Response) {
		const author = req.body;
		const result = await this.authorRepository.insert(author);
		res.json(result);
	}

	@Put('/:id')
	async update(req: Request, res: Response) {
		const id = req.params.id;
		const author = req.body;
		const result = await this.authorRepository.update(id, author);
		res.json(result);
	}

	@Delete('/:id')
	async delete(req: Request, res: Response) {
		const id = req.params.id;
		const result = await this.authorRepository.delete(id);
		res.json(result);
	}
}
