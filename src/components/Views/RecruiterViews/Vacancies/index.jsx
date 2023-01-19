import React, { useState, useEffect } from 'react';
import { Form, Input, SubmitButton, ResetButton, Select } from 'formik-antd';
import { Formik } from 'formik';
import { Divider, Row, Col } from 'antd';
import './style.css';
import API from '../../../../utils/API/api';
const { TextArea } = Input;

function Vacancies({ updateRender, token }) {
	const [countryOptions, setCountryOptions] = useState([]);
	const [cityOptions, setCityOptions] = useState([]);
	const [stateOptions, setStateOptions] = useState([]);
	function createVacancy(values, token) {
		API.createVacancy(values, token)
			.then((res) => {
				console.log('create vacancy API res: ', res);
			})
			.catch((err) => {
				console.log('e', err);
			});
	}

	const fetchCountries = (token) => {
		API.getAllCountries(token).then(({ data, status }) => {
			let options = data.map((key) => {
				return {
					label: key.name,
					value: key.id
				};
			});
			setCountryOptions(options);
		});
	};

	const fetchState = (countryId, token, permanent = false) => {
		API.getAllSates(countryId, token).then(({ data, status }) => {
			let options = data.map((key) => {
				return {
					label: key.name,
					value: key.id
				};
			});
			setStateOptions(options);
		});
	};

	const fetchCities = (stateId, token, permanent = false) => {
		API.getAllCities(stateId, token).then(({ data, status }) => {
			let options = data.map((key) => {
				return {
					label: key.name,
					value: key.id
				};
			});
			setCityOptions(options);
		});
	};

	useEffect(() => {
		fetchCountries(token);
	}, []);

	return (
		<>
			<div id='vacancy-form-div'>
				<Formik
					initialValues={{
						job_role: '',
						job_desc: '',
						vacancy_count: '',
						job_category: '',
						job_type: '',
						city: '',
						state: '',
						country: '',
						exp_level: '',
						exp_required_min: '',
						exp_required_max: '',
						salary_currency: '',
						salary_exp_min: '',
						salary_exp_max: '',
						skills: []
					}}
					validate={(values) => {
						const errors = {};
						if (!values.job_role) {
							errors.company_name = 'Required';
						} else if (!values.salary_exp_min) {
							errors.company_name = 'Required';
						} else if (values.skills.length === 0) {
							errors.skills = 'Required';
						} else if (!values.exp_level) {
							errors.exp_level = 'Required';
						}
						return errors;
					}}
					onSubmit={(values) => {
						console.log('jackkkk!', values);
						createVacancy(values, token);
						updateRender('6');
					}}
				>
					<Form layout='vertical' className='vacancy-form'>
						<Row>
							<Divider>
								<h1>Create Vacancy</h1>
								<h6>Add job details like role, type, salary, location, etc.</h6>
							</Divider>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item
											label={
												<>
													Job title / Role:
													<span style={{ color: 'red', fontSize: '1em' }}>
														*
													</span>
												</>
											}
											name='job_role'
										>
											<Input name='job_role' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Job Description:' name='job_desc'>
											<TextArea rows={5} name='job_desc' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item
											label='Number of Vacancies:'
											name='vacancy_count'
										>
											<Input name='vacancy_count' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Job Category:' name='job_category'>
											<Input name='job_category' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Job Type:' name='job_type'>
											<Input name='job_type' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Divider>
								<h1>Location</h1>
							</Divider>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Country:' name='country'>
											<Select
												name='country'
												options={countryOptions}
												onSelect={(value, event) => fetchState(value, token)}
											></Select>
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='State:' name='state'>
											<Select
												name='state'
												options={stateOptions}
												onSelect={(value, event) => fetchCities(value, token)}
											></Select>
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='City:' name='city'>
											<Select name='city' options={cityOptions}></Select>
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Divider>
								<h1>Experience</h1>
							</Divider>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Experience Level:' name='exp_level'>
											<span style={{ color: 'red', fontSize: '2em' }}>*</span>
											<Input name='exp_level' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item
											label='Minimum Experience:'
											name='exp_required_min'
										>
											<Input name='exp_required_min' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item
											label='Maximum Experience:'
											name='exp_required_max'
										>
											<Input name='exp_required_max' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Currency:' name='salary_currency'>
											<Input name='salary_currency' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Min. Salary:' name='salary_exp_min'>
											<span style={{ color: 'red', fontSize: '2em' }}>*</span>
											<Input name='salary_exp_min' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Max. Salary:' name='salary_exp_max'>
											<Input name='salary_exp_max' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Skills:' name='skills'>
											<span style={{ color: 'red', fontSize: '2em' }}>*</span>
											<Input name='skills' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<div className='button-actions-div'>
											<SubmitButton>Save</SubmitButton>
											<ResetButton>Reset</ResetButton>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</Form>
				</Formik>
			</div>
		</>
	);
}

export default Vacancies;
