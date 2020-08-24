import { Controller, Post } from '../decorators';
import { Request, Response } from 'express';
import { UserRepository } from '../repositories';
import { IUserDocument, ITokens } from '../interface';
import bcryptjs from 'bcryptjs';
import { TokensService } from '../services';

@Controller('/auth')
export default class {
	private userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
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
	}
}
