import axios from 'axios';

const apiClient = axios.create({
	baseURL: `http://localhost:5000/`,
	timeout: 70000,
	headers: {
		'Api-Request-Version': 'bypass'
	}
});

export default class API {
	static async registerUser(registerData) {
		try {
			const data = await apiClient.post(`api/register`, registerData);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.resolve(null);
		}
	}

	static async loginUser(loginData) {
		try {
			const data = await apiClient.post(`api/login`, loginData);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.resolve(null);
		}
	}

	static async createCompany(companyData) {
		console.log('ÄPI reached');
		const config = {
			headers: {
				Authorization: `Bearer ${secretToken}`
			}
		};
		try {
			const data = await apiClient.post(`api/recrutirer`, companyData, config);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.resolve(null);
		}
	}
}
