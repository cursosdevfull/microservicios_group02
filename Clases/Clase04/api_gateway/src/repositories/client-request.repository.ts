import axios from 'axios';
import { IClientRequest } from '../interface';

export default class implements IClientRequest {
	async makeGet(url: string): Promise<any> {
		const result = await axios.get(url);
		return result.data;
		/* 		const result = await fetch(url)
			.then(res => res.json())
			.then();
		return result; */
	}
	async makePost(url: string, dataToSent: {}): Promise<any> {
		const result = await axios.post(url, dataToSent);
		return result.data;
	}
	async makePut(url: string, dataToSent: {}): Promise<any> {
		const result = await axios.put(url, dataToSent);
		return result.data;
	}
	async makeDelete(url: string): Promise<any> {
		const result = await axios.delete(url);
		return result.data;
	}
}
