import React, { useState } from 'react';
import { Col, Form, Input, Button, Spin, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../../utils/API/api';
import PraktikaLogo from '../../Logo';

function RightContent({ setToken }) {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	function registerUser(e) {
		e.preventDefault();
		let signinForm = document.forms['signin-form'];
		let email = signinForm['email'].value;
		let password = signinForm['password'].value;

		setLoading(true);

		const loginData = {
			email,
			password
		};

		if (validateForm(loginData)) {
			API.loginUser(loginData)
				.then(({ data, status }) => {
					if (status === 200 && data.status === 1) {
						if (data.data.role_id && data.data.role_id === 2) {
							setToken(data.data.token);
							notification.success({
								message: 'Login Successful!',
								description: 'Login Successful!'
							});
							setTimeout(() => navigate('/dashboard'), 1000);
						} else if (data.data.role_id && data.data.role_id === 1) {
							setToken(data.data.token);
							notification.success({
								message: 'Login Successful!',
								description: 'Login Successful!'
							});
							setTimeout(() => navigate('/candidate'), 1000);
						}
					} else navigate('/login');
				})
				.catch((err) => {
					console.error('e', err);
					setLoading(false);
					notification.error({
						message: err
					});
					navigate('/login');
				});
		}
	}

	function validateForm(loginData) {
		if (loginData.email === '' || loginData.password === '') {
			alert('Please fill all the fields correctly!');
			return false;
		} else return true;
	}
	return (
		<Col className='right-content-block'>
			<span className='mini-logo-item'>
				<PraktikaLogo />
			</span>
			<div style={{ textAlign: 'justify' }}>
				<h1>Welcome back!</h1>
				<p>Please enter your login details.</p>
				<Form
					layout='vertical'
					name='signin-form'
					initialValues={{ remember: true }}
				>
					<Form.Item label='Email address :' className='hp-mb-16'>
						<Input name='email' defaultValue={'project@pesto.com'} />
					</Form.Item>

					<Form.Item label='Password :' className='hp-mb-8'>
						<Input.Password name='password' defaultValue={11111111} />
					</Form.Item>

					<Form.Item>
						<Button type='primary' htmlType='submit' onClick={registerUser}>
							Sign In
						</Button>
						<span style={{ marginLeft: '1em' }}>
							<Spin spinning={loading} size='large' />
						</span>
					</Form.Item>
				</Form>
				<span>Don't have an account? </span>
				<Link to='/' style={{ color: 'blue' }}>
					Sign up here
				</Link>
			</div>
		</Col>
	);
}

export default RightContent;
