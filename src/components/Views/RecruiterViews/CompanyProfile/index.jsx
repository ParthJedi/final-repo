import React from 'react';
import { Form, Input, SubmitButton, ResetButton } from 'formik-antd';
import { Formik } from 'formik';
import { Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import './style.css';
import API from '../../../../utils/API/api';
const { TextArea } = Input;

function CompanyProfile({ updateRender }) {
	const navigate = useNavigate();

	function createCompanyProfile(companyData) {
		console.log('function call with company data', companyData);
		API.createCompany(companyData)
			.then(({ data, status }) => {
				if (status === 200 && Object.keys(data.data) && data.status === 1) {
					console.log('success!', data);
					return;
				} else navigate('/dashboard');
			})
			.catch((err) => {
				console.log('e', err);
				navigate('/dashboard');
			});
	}

	return (
		<>
			<div id='comapny-prof-form-div'>
				<Formik
					initialValues={{
						companyname: '',
						companysize: '',
						industry: '',
						overview: '',
						values: '',
						benefits: '',
						website: '',
						linkedin: '',
						facebook: '',
						glassdoor: '',
						crunchbase: ''
					}}
					validate={(values) => {
						const errors = {};
						if (!values.companyname) {
							errors.companyname = 'Required';
						} else if (!values.website) {
							errors.companyname = 'Required';
						}
						return errors;
					}}
					onSubmit={(values) => {
						createCompanyProfile(values);
						updateRender('5');
					}}
				>
					<Form layout='vertical' className='company-form'>
						<Divider>
							<h1>Company Profile</h1>
							<h6>Add your company details like Name, Size, etc</h6>
						</Divider>

						<Form.Item label='Company Name:' name='companyname'>
							<span style={{ color: 'red', fontSize: '2em' }}>*</span>
							<Input name='companyname' />
						</Form.Item>
						<Form.Item label='Company Size:' name='companysize'>
							<Input name='companysize' />
						</Form.Item>
						<Form.Item label='Industry:' name='industry'>
							<Input name='industry' />
						</Form.Item>
						<Divider>
							<h1>Overview</h1>
							<h6>Add your company overview, values, culture etc</h6>
						</Divider>
						<Form.Item label='Overview:' name='overview'>
							<TextArea rows={5} name='overview' />
						</Form.Item>
						<Form.Item label='Values:' name='values'>
							<TextArea rows={5} name='values' />
						</Form.Item>
						<Form.Item label='Benefits:' name='benefits'>
							<TextArea rows={5} name='benefits' />
						</Form.Item>
						<Divider>
							<h1>Social Links</h1>
							<h6>Add your company website and other links</h6>
						</Divider>
						<Form.Item label='Website:' name='website'>
							<span style={{ color: 'red', fontSize: '2em' }}>*</span>
							<Input name='website' />
						</Form.Item>
						<Form.Item label='LinkedIn:' name='linkedin'>
							<Input name='linkedin' />
						</Form.Item>
						<Form.Item label='Facebook:' name='facebook'>
							<Input name='facebook' />
						</Form.Item>
						<Form.Item label='Glassdoor:' name='glassdoor'>
							<Input name='glassdoor' />
						</Form.Item>
						<Form.Item label='CrunchBase:' name='crunchbase'>
							<Input name='crunchbase' />
						</Form.Item>
						<div className='button-actions-div'>
							<SubmitButton onSubmit={createCompanyProfile}>Save</SubmitButton>
							<ResetButton>Reset</ResetButton>
						</div>
					</Form>
				</Formik>
			</div>
		</>
	);
}

export default CompanyProfile;
