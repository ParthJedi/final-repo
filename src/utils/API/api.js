import axios from 'axios';

const apiClient = axios.create({
	baseURL: `http://localhost:5000/api`,
	timeout: 70000,
	headers: {
		'Api-Request-Version': 'bypass'
	}
});

export default class API {
	static async registerUser(registerData) {
		try {
			const data = await apiClient.post(`/register`, registerData);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.resolve(null);
		}
	}
}
