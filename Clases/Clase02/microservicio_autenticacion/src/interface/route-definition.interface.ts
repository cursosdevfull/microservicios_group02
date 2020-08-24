export default interface byDefault {
	path: string;
	requestMethod: 'get' | 'post' | 'put' | 'delete' | 'options';
	methodName: string;
	middlewares: any[];
}
