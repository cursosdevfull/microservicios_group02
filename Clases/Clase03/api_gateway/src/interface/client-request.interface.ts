export default interface ByDefault {
	makeGet(url: string): Promise<any>;
	makePost(url: string, dataToSent: {}): Promise<any>;
	makePut(url: string, dataToSent: {}): Promise<any>;
	makeDelete(url: string): Promise<any>;
}
