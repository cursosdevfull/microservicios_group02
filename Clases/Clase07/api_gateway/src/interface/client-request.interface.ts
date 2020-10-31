export default interface ByDefault {
	makeGet(url: string): Promise<any>;
	makePost(url: string, dataToSent: { [s: string]: string }): Promise<any>;
	makePut(url: string, dataToSent: { [s: string]: string }): Promise<any>;
	makeDelete(url: string): Promise<any>;
}
