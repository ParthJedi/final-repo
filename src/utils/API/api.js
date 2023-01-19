import axios from 'axios';

const apiClient = axios.create({
	baseURL: `https://praktika.onrender.com/`,
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

	// token routes

	static async createCompany(companyData, token) {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
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

	static async getAllCountries(token) {
		console.log('Country API reached');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.get(`api/vacancy/getCountrys`, config);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.resolve(null);
		}
	}

	static async getAllSates(countryId, token) {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const apiData = { country_id: countryId };
			const data = await apiClient.post(
				`api/vacancy/getStates`,
				apiData,
				config
			);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.resolve(null);
		}
	}

	static async getAllCities(stateId, token) {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		console.log('congig>>>>>>>>>>', config);
		try {
			const apiData = { state_id: stateId };
			const data = await apiClient.post(
				`api/vacancy/getCitys`,
				apiData,
				config
			);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.resolve(null);
		}
	}

	static async getDashboardCounts(token) {
		console.log('Dashboard API reached');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.get(`api/dashboard`, config);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.resolve(null);
		}
	}

	static async getUpcomingInterviews(token) {
		console.log('upcoming interviews API reached');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.get(
				`api/dashboard/getPendingInterviews`,
				config
			);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.resolve(null);
		}
	}

	static async getVacancyData(token) {
		console.log('vacancy data API reached');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.get(
				`api/dashboard/getPendingVacancy`,
				config
			);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.resolve(null);
		}
	}
}
