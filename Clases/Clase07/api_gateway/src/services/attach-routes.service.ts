import { Application, Request, Response } from 'express';
import { IRouteMetadata, IRouteDefinition } from '../interface';
import { ErrorsService } from '.';

const getInstancesDependencies = (dependencies: any[]): Array<any> => {
	const instancesDependencies: any[] = [];

	dependencies.forEach((dependency: any) => {
		const subDependencies: Array<any> = [];
		dependency.subDependencies.forEach((subDependency: any) => {
			subDependencies.push(new subDependency());
		});
		instancesDependencies.push(new dependency.class(...subDependencies));
	});

	return instancesDependencies;
};

const byDefaultAttachRoutes = (
	app: Application,
	controllers: Array<IRouteMetadata>
) => {
	controllers.forEach(controller => {
		const listDependencies = getInstancesDependencies(controller.dependencies);

		const instance = new controller.class(...listDependencies);
		const prefix = Reflect.getMetadata('prefix', controller.class);
		const middlewaresController = Reflect.getMetadata(
			'middlewares',
			controller.class
		);

		const routes: IRouteDefinition[] = Reflect.getMetadata(
			'routes',
			controller.class
		);

		//  [Authentication, UploadImages]   -> Authentication, UploadImages

		routes.forEach(route => {
			app[route.requestMethod](
				prefix + route.path,
				...middlewaresController,
				...route.middlewares,
				ErrorsService.catchAsync(
					(req: Request, res: Response): Promise<any> => {
						return instance[route.methodName](req, res);
					}
				)
			);

			/* 			app.post(
				'/auth/login',
				Authentication,
				UploadImage,
				Authorization,
				(req, res) => {}
			); */
		});
	});
};

export default byDefaultAttachRoutes;
