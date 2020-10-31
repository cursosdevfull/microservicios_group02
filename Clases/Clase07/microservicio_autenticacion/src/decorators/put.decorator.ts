import { IRouteDefinition } from '../interface';

const decorator = (path: string, middlewares: any[] = []): MethodDecorator => {
	return (target, propertyKey: string): any => {
		if (!Reflect.hasMetadata('routes', target.constructor)) {
			Reflect.defineMetadata('routes', [], target.constructor);
		}

		const routes = Reflect.getMetadata('routes', target.constructor) as Array<
			IRouteDefinition
		>;
		routes.push({
			path,
			requestMethod: 'put',
			methodName: propertyKey,
			middlewares,
		});

		Reflect.defineMetadata('routes', routes, target.constructor);
	};
};

export default decorator;
