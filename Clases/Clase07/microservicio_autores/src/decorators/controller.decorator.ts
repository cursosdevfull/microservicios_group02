const decorator = (prefix = '', middlewares: any[] = []): ClassDecorator => {
	return (target: any): any => {
		Reflect.defineMetadata('prefix', prefix, target);
		Reflect.defineMetadata('middlewares', middlewares, target);

		/* 		if (!Reflect.hasMetadata('routes', target)) {
			Reflect.defineMetadata('routes', [], target);
		} */
	};
};

export default decorator;
