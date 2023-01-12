import React from 'react';
import { Form, Input, SubmitButton, ResetButton } from 'formik-antd';
import { Formik } from 'formik';
import { Divider } from 'antd';
import './style.css';
const { TextArea } = Input;

function Vacancies({ updateRender }) {
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
						updateRender('6');
					}}
				>
					<Form layout='vertical'>
						<Divider>
							<h1>Create Vacancy</h1>
							<h6>Add job details like role, type, salary, location, etc.</h6>
						</Divider>
						<Form.Item label='Job title / Role:' name='job_role'>
							<span style={{ color: 'red', fontSize: '2em' }}>*</span>
							<Input name='job_role' />
						</Form.Item>
						<Form.Item label='Job Description:' name='job_desc'>
							<TextArea rows={5} name='job_desc' />
						</Form.Item>
						<Form.Item label='Number of Vacancies:' name='vacancy_count'>
							<Input name='vacancy_count' />
						</Form.Item>
						<Form.Item label='Job Category:' name='job_category'>
							<Input name='job_category' />
						</Form.Item>
						<Form.Item label='Job Type:' name='job_type'>
							<Input name='job_type' />
						</Form.Item>
						<Divider>
							<h1>Location</h1>
						</Divider>
						<Form.Item label='City:' name='city'>
							<Input name='city' />
						</Form.Item>
						<Form.Item label='State:' name='state'>
							<Input name='state' />
						</Form.Item>
						<Form.Item label='Country:' name='country'>
							<Input name='country' />
						</Form.Item>
						<Divider>
							<h1>Experience</h1>
						</Divider>
						<Form.Item label='Experience Level:' name='exp_level'>
							<span style={{ color: 'red', fontSize: '2em' }}>*</span>
							<Input name='exp_level' />
						</Form.Item>
						<Form.Item label='Minimum Experience:' name='exp_required_min'>
							<Input name='exp_required_min' />
						</Form.Item>
						<Form.Item label='Maximum Experience:' name='exp_required_max'>
							<Input name='exp_required_max' />
						</Form.Item>
						<Form.Item label='Currency:' name='salary_currency'>
							<Input name='salary_currency' />
						</Form.Item>
						<Form.Item label='Min. Salary:' name='salary_exp_min'>
							<span style={{ color: 'red', fontSize: '2em' }}>*</span>
							<Input name='salary_exp_min' />
						</Form.Item>
						<Form.Item label='Max. Salary:' name='salary_exp_max'>
							<Input name='salary_exp_max' />
						</Form.Item>
						<Form.Item label='Skills:' name='skills'>
							<span style={{ color: 'red', fontSize: '2em' }}>*</span>
							<Input name='skills' />
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

export default Vacancies;
