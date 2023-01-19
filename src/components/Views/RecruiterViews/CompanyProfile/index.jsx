import React from 'react';
import { Form, Input, SubmitButton, ResetButton } from 'formik-antd';
import { Formik } from 'formik';
import { Divider, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
	LinkedinOutlined,
	GithubOutlined,
	FacebookOutlined,
	TwitterOutlined
} from '@ant-design/icons';
import './style.css';
import API from '../../../../utils/API/api';
const { TextArea } = Input;

function CompanyProfile({ token, updateRender }) {
	const navigate = useNavigate();

	function createCompanyProfile(companyData) {
		console.log('function call with company data', companyData);
		API.createCompany(companyData, token)
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
						<Row>
							<Divider>
								<h1>Company Profile</h1>
								<h6>Add your company details like Name, Size, etc</h6>
							</Divider>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item
											label={
												<>
													Company Name:
													<span style={{ color: 'red', fontSize: '1em' }}>
														*
													</span>
												</>
											}
											name='companyname'
										>
											<Input name='companyname' />
										</Form.Item>
									</Col>
									<Col md={12} span={24}>
										<Form.Item label='Company Size:' name='companysize'>
											<Input name='companysize' />
										</Form.Item>
									</Col>
									<Col md={12} span={24}>
										<Form.Item label='Industry:' name='industry'>
											<Input name='industry' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Divider>
								<h1>Overview</h1>
								<h6>Add your company overview, values, culture etc</h6>
							</Divider>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Overview:' name='overview'>
											<TextArea rows={5} name='overview' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Values:' name='values'>
											<TextArea rows={5} name='values' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Benefits:' name='benefits'>
											<TextArea rows={5} name='benefits' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Divider>
								<h1>Social Links</h1>
								<h6>Add your company website and other links</h6>
							</Divider>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col span={24}>
										<Form.Item label='Website:' name='website'>
											<Input addonBefore='https://' name='website' />
										</Form.Item>
									</Col>
									<Col span={12}>
										<Form.Item label='LinkedIn:' name='linkedin'>
											<Input
												addonBefore={<LinkedinOutlined />}
												name='linkedin'
											/>
										</Form.Item>
									</Col>
									<Col span={12}>
										<Form.Item label='Facebook:' name='facebook'>
											<Input
												addonBefore={<FacebookOutlined />}
												name='facebook'
											/>
										</Form.Item>
									</Col>
									<Col span={12}>
										<Form.Item label='Glassdoor:' name='glassdoor'>
											<Input name='glassdoor' />
										</Form.Item>
									</Col>
									<Col span={12}>
										<Form.Item label='CrunchBase:' name='crunchbase'>
											<Input name='crunchbase' />
										</Form.Item>
									</Col>
								</Row>
							</Col>

							<div className='button-actions-div'>
								<SubmitButton onSubmit={createCompanyProfile}>
									Save
								</SubmitButton>
								<ResetButton>Reset</ResetButton>
							</div>
						</Row>
					</Form>
				</Formik>
			</div>
		</>
	);
}

export default CompanyProfile;
