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


	static async getAllCountries() {
		console.log('Country API reached');
		const config = {
			headers: {
				Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJtcmcxQHlhaG9vLmNvbSIsInJvbGVfaWQiOjEsImNvbXBhbnlfaWQiOjAsImlhdCI6MTY3NDA2NjM0OSwiZXhwIjoxNjc0MTUyNzQ5fQ.tToG2rAeCDC3AzXTRgLf3iVe8zjkWCUBHgGqGviNQuU`
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

	static async getAllSates(countryId) {
		console.log('State API reached');
		const config = {
			headers: {
				Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJtcmcxQHlhaG9vLmNvbSIsInJvbGVfaWQiOjEsImNvbXBhbnlfaWQiOjAsImlhdCI6MTY3NDA2NjM0OSwiZXhwIjoxNjc0MTUyNzQ5fQ.tToG2rAeCDC3AzXTRgLf3iVe8zjkWCUBHgGqGviNQuU`
			}
		};
		try {
			const apiData = { country_id : countryId}
			const data = await apiClient.post(`api/vacancy/getStates`, apiData, config);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.resolve(null);
		}
	}

	static async getAllCities(stateId) {
		console.log('City API reached');
		const config = {
			headers: {
				Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJtcmcxQHlhaG9vLmNvbSIsInJvbGVfaWQiOjEsImNvbXBhbnlfaWQiOjAsImlhdCI6MTY3NDA2NjM0OSwiZXhwIjoxNjc0MTUyNzQ5fQ.tToG2rAeCDC3AzXTRgLf3iVe8zjkWCUBHgGqGviNQuU`
			}
		};
		try {
			const apiData = { state_id : stateId}
			const data = await apiClient.post(`api/vacancy/getCitys`, apiData, config);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.resolve(null);
		}
	}
}
