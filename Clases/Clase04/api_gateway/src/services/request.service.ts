import { ClientRequestRepository } from '../repositories';

export default class {
	private clientRequestRepository: ClientRequestRepository;

	constructor(clientRequestRepository: ClientRequestRepository) {
		this.clientRequestRepository = clientRequestRepository;
	}

	async makeGet(url: string) {
		return await this.clientRequestRepository.makeGet(url);
	}

	async makePost(url: string, dataToSent: {}) {
		return await this.clientRequestRepository.makePost(url, dataToSent);
	}

	async makePut(url: string, dataToSent: {}) {
		return await this.clientRequestRepository.makePut(url, dataToSent);
	}

	async makeDelete(url: string) {
		return await this.clientRequestRepository.makeDelete(url);
	}
}
