import { NextFunction, Request, Response } from 'express';

export default class {
	static catchAsync(
		ftn: (req: Request, res: Response, next: NextFunction) => Promise<any>
	): any {
		return (req: Request, res: Response, next: NextFunction) => {
			return ftn(req, res, next).catch((error: Error) => {
				res.json({
					status: 500,
					message: error.message,
					stack: error.stack,
				});
			});
		};
	}
}
