import React from 'react';
import { Col, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import API from '../../../utils/API/api';

function RightContent() {
	function registerUser(e) {
		e.preventDefault();
		let signinForm = document.forms['signin-form'];
		let email = signinForm['email'].value;
		let password = signinForm['password'].value;

		const loginData = {
			email,
			password
		};

		if (validateForm(loginData)) {
			API.registerUser(loginData)
				.then(({ data, status }) => {
					if (status === 200) {
						console.log('RespData', data);
					}
				})
				.catch((err) => console.log('e', err));
		}
	}

	function validateForm(loginData) {
		if (loginData.email === '' || loginData.password === '') {
			alert('Please fill all the fields correctly!');
			return false;
		} else return true;
	}
	return (
		<Col>
			<div style={{ textAlign: 'justify' }}>
				<h1>Welcome back!</h1>
				<p>Please enter your login details.</p>
				<Form
					layout='vertical'
					name='signin-form'
					initialValues={{ remember: true }}
				>
					<Form.Item label='Email address :' className='hp-mb-16'>
						<Input name='email' />
					</Form.Item>

					<Form.Item label='Password :' className='hp-mb-8'>
						<Input.Password name='password' />
					</Form.Item>

					<Form.Item className='hp-mt-16 hp-mb-8'>
						{/* <Link to='/'> */}
						<Button type='primary' htmlType='submit' onClick={registerUser}>
							Sign In
						</Button>
						{/* </Link> */}
					</Form.Item>
				</Form>
				<span className='hp-text-color-black-80 hp-text-color-dark-40 hp-caption hp-font-weight-400 hp-mr-4'>
					Dopn't have an account?{' '}
				</span>
				<Link to='/' style={{ color: 'blue' }}>
					Sign up here
				</Link>
			</div>
		</Col>
	);
}

export default RightContent;
