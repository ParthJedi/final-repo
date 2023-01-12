import React from 'react';
import { Form, Input, SubmitButton, ResetButton } from 'formik-antd';
import { Formik } from 'formik';
import { Divider } from 'antd';
import './style.css';
const { TextArea } = Input;

function CompanyProfile({ updateRender }) {
	return (
		<>
			<div id='comapny-prof-form-div'>
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
					validate={(values) => {
						const errors = {};
						if (!values.company_name) {
							errors.company_name = 'Required';
						} else if (!values.company_website) {
							errors.company_name = 'Required';
						}
						return errors;
					}}
					onSubmit={(values) => {
						console.log('jackkkk!', values);
						updateRender('5');
					}}
				>
					<Form layout='vertical'>
						<Divider>
							<h1>Company Profile</h1>
							<h6>Add your company details like Name, Size, etc</h6>
						</Divider>

						<Form.Item label='Company Name:' name='company_name'>
							<span style={{ color: 'red', fontSize: '2em' }}>*</span>
							<Input name='company_name' />
						</Form.Item>
						<Form.Item label='Company Size:' name='company_size'>
							<Input name='company_size' />
						</Form.Item>
						<Form.Item label='Industry:' name='company_industry'>
							<Input name='company_industry' />
						</Form.Item>
						<Divider>
							<h1>Overview</h1>
							<h6>Add your company overview, values, culture etc</h6>
						</Divider>
						<Form.Item label='Overview:' name='company_overview'>
							<TextArea rows={5} name='company_overview' />
						</Form.Item>
						<Form.Item label='Values:' name='company_values'>
							<TextArea rows={5} name='company_values' />
						</Form.Item>
						<Form.Item label='Benefits:' name='company_benefits'>
							<TextArea rows={5} name='company_benefits' />
						</Form.Item>
						<Divider>
							<h1>Social Links</h1>
							<h6>Add your company website and other links</h6>
						</Divider>
						<Form.Item label='Website:' name='company_website'>
							<span style={{ color: 'red', fontSize: '2em' }}>*</span>
							<Input name='company_website' />
						</Form.Item>
						<Form.Item label='LinkedIn:' name='company_linkedin'>
							<Input name='company_linkedin' />
						</Form.Item>
						<Form.Item label='Facebook:' name='company_facebook'>
							<Input name='company_facebook' />
						</Form.Item>
						<Form.Item label='Glassdoor:' name='company_glassdoor'>
							<Input name='company_glassdoor' />
						</Form.Item>
						<div class='button-actions-div'>
							<SubmitButton>Save</SubmitButton>
							<ResetButton>Reset</ResetButton>
						</div>
					</Form>
				</Formik>
			</div>
		</>
	);
}

export default CompanyProfile;
