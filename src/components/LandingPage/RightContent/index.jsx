import React from 'react';
import { Col, Form, Input, Button, Radio } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../../utils/API/api';

function RightContent() {
	const navigate = useNavigate();
	function registerUser(e) {
		e.preventDefault();
		let signupForm = document.forms['signup-form'];
		let role_id = signupForm['role_id'].value;
		let email = signupForm['email'].value;
		let password = signupForm['password'].value;
		let mobile_no = signupForm['mobile_no'].value;

		const registerData = {
			email,
			password,
			mobile_no,
			role_id
		};

		if (validateForm(registerData)) {
			API.registerUser(registerData)
				.then(({ data, status }) => {
					if (status === 200) {
						if (status === 200 && data.status === 1) {
							navigate('/dashboard');
						} else navigate('/');
					}
				})
				.catch((err) => console.log('e', err));
		}
	}

	function validateForm(registerData) {
		if (
			registerData.role_id === '' ||
			registerData.email === '' ||
			registerData.password === '' ||
			registerData.mobile_no === ''
		) {
			alert('Please fill all the fields correctly!');
			return false;
		} else return true;
	}
	return (
		<Col>
			<div style={{ textAlign: 'justify' }}>
				<h1>Create an account</h1>
				<p>Create your account to start using Praktika.</p>
				<Form
					layout='vertical'
					name='signup-form'
					initialValues={{ remember: true }}
				>
					<p className='hp-mt-sm-0 hp-mt-8 hp-text-color-black-60'>
						Who are you?&nbsp;&nbsp;&nbsp;
						<Radio.Group name='role_id'>
							<Radio value='2'>Recruiter</Radio>
							<Radio value='1'>Candidate</Radio>
						</Radio.Group>
					</p>

					<Form.Item label='Email address :' className='hp-mb-16'>
						<Input name='email' />
					</Form.Item>

					<Form.Item label='Password :' className='hp-mb-8'>
						<Input.Password name='password' />
					</Form.Item>

					<Form.Item label='Mobile number :' className='hp-mb-16'>
						<Input name='mobile_no' />
					</Form.Item>

					<Form.Item className='hp-mt-16 hp-mb-8'>
						{/* <Link to='/'> */}
						<Button type='primary' htmlType='submit' onClick={registerUser}>
							Get Started
						</Button>
						{/* </Link> */}
					</Form.Item>
				</Form>
				<span className='hp-text-color-black-80 hp-text-color-dark-40 hp-caption hp-font-weight-400 hp-mr-4'>
					Already have an account?{' '}
				</span>
				<Link to='/login' style={{ color: 'blue' }}>
					Sign in here
				</Link>
			</div>
		</Col>
	);
}

export default RightContent;
