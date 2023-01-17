import React, { useState } from 'react';
import { Input, SubmitButton, ResetButton } from 'formik-antd';
import { Row, Col } from 'antd';
import { Formik, Form } from 'formik';
import PersonalInformation from '../PersonalInformation';
import WorkInformation from '../WorkInformation';
import Experience from '../Experience';
import Video from '../Video';
import Resume from '../Resume';
import SocialLinks from '../SocialLinks';

function EditProfile() {
	const [render, updateRender] = useState('1');
	const [formData, setFormData] = useState({});
	function createCompanyProfile(e) {
		e.preventDefault();
		console.log('hey', formData);
	}
	return (
		<>
			<Formik
				initialValues={{
					first_name: '',
					last_name: '',
					email: '',
					phone: '',
					current_city: ''
				}}
				validate={(values) => {
					const errors = {};
					if (!values.first_name) {
						errors.first_name = 'First name is required';
					}
					if (!values.last_name) {
						errors.last_name = 'Last name is required';
					}
					if (!values.email) {
						errors.email = 'Email is required';
					}
					if (!values.phone) {
						errors.phone = 'Phone is required';
					}
					if (!values.city) {
						errors.city = 'City is required';
					}
					return errors;
				}}
				onSubmit={(values) => {
					setFormData(values);
					console.log('kya baba');
					// updateRender('2');
				}}
			>
				<Form
					layout='vertical'
					onSubmit={createCompanyProfile}
					className='personal-information-form'
				>
					<PersonalInformation />
					{/* <WorkInformation />
					<Experience /> */}
					{/* <Resume />
					<Video /> */}
					{/* <SocialLinks /> */}
					<Row>
						<Col md={24} span={24} className='button-actions-col'>
							<button type='submit' onClick={createCompanyProfile}>
								Save
							</button>
						</Col>
					</Row>
				</Form>
			</Formik>
		</>
	);
}

export default EditProfile;
