import React from 'react';
import {
	Form,
	Input,
	InputNumber,
	Checkbox,
	SubmitButton,
	ResetButton
} from 'formik-antd';
import { Formik } from 'formik';

function CompanyProfile() {
	return (
		<>
			<h1>Company Profile</h1>
			<Formik
				initialValues={{
					company_name: '',
					company_size: '',
					company_industry: '',
					company_overview: '',
					company_values: '',
					company_benefits: '',
					company_website: '',
					company_linkedin: '',
					company_facebook: '',
					company_glassdoor: ''
				}}
				onSubmit={(values) => console.log('jackkkk!', values)}
			>
				<Form>
					<Form.Item label='Company Name:'>
						<Input name='company_name' />
					</Form.Item>
					<Form.Item label='Company Size:'>
						<Input name='company_size' />
					</Form.Item>
					<Form.Item label='Industry:'>
						<Input name='company_industry' />
					</Form.Item>
					<Form.Item label='Overview:'>
						<Input name='company_overview' />
					</Form.Item>
					<Form.Item label='Values:'>
						<Input name='company_values' />
					</Form.Item>
					<Form.Item label='Benefits:'>
						<Input name='company_benefits' />
					</Form.Item>
					<Form.Item label='Website:'>
						<Input name='company_website' />
					</Form.Item>
					<Form.Item label='LinkedIn:'>
						<Input name='company_linkedin' />
					</Form.Item>
					<Form.Item label='Facebook:'>
						<Input name='company_facebook' />
					</Form.Item>
					<Form.Item label='Glassdoor:'>
						<Input name='company_glassdoor' />
					</Form.Item>
				</Form>
			</Formik>
		</>
	);
}

export default CompanyProfile;
