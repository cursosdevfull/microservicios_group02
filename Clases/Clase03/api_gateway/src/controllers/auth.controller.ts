import { Controller, Post, Get } from '../decorators';
import { Request, Response } from 'express';
import { RequestService } from '../services';
import { DiscoveryBootstrap } from '../bootstrap';

@Controller('/api/auth')
export default class {
	private requestService: RequestService;
	private url: string;

	constructor(requestService: RequestService) {
		this.requestService = requestService;
		this.init();
	}

	async init() {
		await DiscoveryBootstrap.getInstance();
		const listServices = DiscoveryBootstrap.listServices;
		this.url = `http://${listServices.MS_AUTH.Address}:${listServices.MS_AUTH.Port}/${listServices.MS_AUTH.Meta.prefix}`;
		/*
      {
        MS_AUTH: {
          Address: ...,
          Port: ...,
          Meta: {
            prefix: "auth"
          }
        }
      }
    */
	}

	@Get('/health-check')
	async getHealthCheck(req: Request, res: Response) {
		const result = await this.requestService.makeGet(
			`${this.url}/health-check`
		);
		res.send(result);
	}

	@Post('/login')
	async login(req: Request, res: Response) {
		const credentials = req.body;
		const result = await this.requestService.makePost(
			`${this.url}/login`,
			credentials
		);
		res.json(result);
	}

	@Post('/register')
	async register(req: Request, res: Response) {
		const dataUser = req.body;
		const result = await this.requestService.makePost(
			`${this.url}/register`,
			dataUser
		);
		res.json(result);
	}

	@Post('/new-access-token')
	async getNewAccessToken(req: Request, res: Response) {
		const refreshToken = req.body;
		const result = await this.requestService.makePost(
			`${this.url}/new-access-token`,
			refreshToken
		);
		res.json(result);
	}

	@Post('/validate-access-token')
	async validateAccessToken(req: Request, res: Response) {
		const accessToken = req.body;
		const result = await this.requestService.makePost(
			`${this.url}/validate-access-token`,
			accessToken
		);
		res.json(result);
	}

	/* @Get('/health-check')
	async getHealthCheck(req: Request, res: Response) {
		res.send('I am alive');
	}

	@Post('/login')
	async login(req: Request, res: Response) {
		const userMatched: IUserDocument = await this.userRepository.getUserByEmail(
			req.body.email
		);

		if (userMatched) {
			const matchedPassword = await bcryptjs.compare(
				req.body.password,
				userMatched.password
			);

			if (matchedPassword) {
				const tokens: ITokens = {
					accessToken: TokensService.createAccessToken(userMatched),
					refreshToken: userMatched.refreshToken,
				};

				return res.json(tokens);
			} else {
				return res.status(200).json({
					status: 404,
					message: 'Credentials invalid',
				});
			}
		} else {
			return res.status(200).json({
				status: 404,
				message: 'User not found',
			});
		}
	}

	@Post('/register')
	async register(req: Request, res: Response) {
		const user: IUserDocument = req.body;
		const userInserted: IUserDocument = await this.userRepository.insert(user);
		const tokens: ITokens = {
			accessToken: TokensService.createAccessToken(userInserted),
			refreshToken: userInserted.refreshToken,
		};

		res.json(tokens);
	}

	@Post('/new-access-token')
	async generateNewAccessToken(req: Request, res: Response) {
		const refreshToken = req.body.refreshToken;

		const userMatched: IUserDocument = await this.userRepository.getUserByRefreshToken(
			refreshToken
		);

		if (userMatched) {
			const tokens: ITokens = {
				accessToken: TokensService.createAccessToken(userMatched),
				refreshToken: userMatched.refreshToken,
			};

			res.json(tokens);
		} else {
			res.json({
				status: 404,
				message: 'Refresh Token not found',
			});
		}
	}

	@Post('/validate-access-token')
	async validateAccessToken(req: Request, res: Response) {
		const validateProcessAccessToken = TokensService.validateAccessToken(
			req.body.accessToken
		);

		validateProcessAccessToken.then(
			payload => res.json(payload),
			error => res.json(error)
		);
	} */
}
