import { Controller, Post, Get, Put, Delete } from '../decorators';
import { Request, Response } from 'express';
import { RequestService } from '../services';
/* import { DiscoveryBootstrap } from '../bootstrap'; */

@Controller('/api/author')
export default class {
	private requestService: RequestService;
	private url: string;

	constructor(requestService: RequestService) {
		this.requestService = requestService;
		this.init();
	}

	async init() {
		/* 		await DiscoveryBootstrap.getInstance();
		const listServices = DiscoveryBootstrap.listServices;
    this.url = `http://${listServices.MS_AUTHORS.Address}:${listServices.MS_AUTHORS.Port}/${listServices.MS_AUTHORS.Meta.prefix}`; */
		this.url = `http://ms_authors:81/author`;
	}

	@Get('/health-check')
	async getHealthCheck(req: Request, res: Response) {
		const result = await this.requestService.makeGet(
			`${this.url}/health-check`
		);
		res.send(result);
	}

	@Get('/')
	async getAll(req: Request, res: Response) {
		const result = await this.requestService.makeGet(`${this.url}`);
		res.json(result);
	}

	@Get('/:id')
	async getById(req: Request, res: Response) {
		const id = req.params.id;
		const result = await this.requestService.makeGet(`${this.url}/${id}`);
		res.json(result);
	}

	@Post('/')
	async insert(req: Request, res: Response) {
		const dataAuthor = req.body;
		const result = await this.requestService.makePost(
			`${this.url}`,
			dataAuthor
		);
		res.json(result);
	}

	@Put('/:id')
	async update(req: Request, res: Response) {
		const id = req.params.id;
		const dataAuthor = req.body;
		const result = await this.requestService.makePut(
			`${this.url}/${id}`,
			dataAuthor
		);
		res.json(result);
	}

	@Delete('/:id')
	async delete(req: Request, res: Response) {
		const id = req.params.id;
		const result = await this.requestService.makeDelete(`${this.url}/${id}`);
		res.json(result);
	}
}
