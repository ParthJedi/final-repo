import React, { useState, useEffect } from 'react';
import {
	Form,
	Input,
	Select,
	InputNumber,
	DatePicker,
	SubmitButton,
	ResetButton
} from 'formik-antd';
import {
	UploadOutlined,
	LinkedinOutlined,
	GithubOutlined,
	FacebookOutlined,
	TwitterOutlined
} from '@ant-design/icons';
import { Row, Col, Divider, message, Upload } from 'antd';
import { Formik } from 'formik';
import API from '../../../../utils/API/api';

const { TextArea } = Input;
const { Dragger } = Upload;

const resumeProps = {
	name: 'file',
	multiple: false,
	accept: 'video/mp4',
	action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
	onChange(info) {
		const { status } = info.file;
		if (status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (status === 'done') {
			message.success(`${info.file.name} file uploaded successfully.`);
		} else if (status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
	onDrop(e) {
		console.log('Dropped files', e.dataTransfer.files);
	}
};

const videoProps = {
	name: 'file',
	multiple: false,
	accept: 'video/mp4',
	action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
	onChange(info) {
		const { status } = info.file;
		if (status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (status === 'done') {
			message.success(`${info.file.name} file uploaded successfully.`);
		} else if (status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
	onDrop(e) {
		console.log('Dropped files', e.dataTransfer.files);
	}
};

function EditProfile({ token }) {
	console.log('TOOOOOOOOOOOKEN', token);
	const [render, updateRender] = useState('1');
	const [formData, setFormData] = useState({});
	const [countryOptions, setCountryOptions] = useState([]);
	const [cityOptions, setCityOptions] = useState([]);
	const [perCityOptions, setPerCityOptions] = useState([]);
	const [stateOptions, setStateOptions] = useState([]);
	const [perStateOptions, setPerStateOptions] = useState([]);

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
			(permanent) ? setPerStateOptions(options) : setStateOptions(options);
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
			(permanent) ? setPerCityOptions(options): setCityOptions(options);
		});
	};

	useEffect(() => {
		fetchCountries(token);
	}, []);

	function createCandidate(formData) {
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
					if (!values.current_country) {
						errors.current_country = 'Country is required';
					}
					if (!values.current_state) {
						errors.current_state = 'State is required';
					}
					if (!values.current_city) {
						errors.current_city = 'City is required';
					}
					if (values.website) {
						if (
							!values.website.match(
								/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
							)
						) {
							errors.website = 'Please enter a valid URL';
						}
					}
					if (values.github) {
						if (
							!values.github.match(
								/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
							)
						) {
							errors.github = 'Please enter a valid URL';
						}
					}
					if (values.linkedin) {
						if (
							!values.linkedin.match(
								/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
							)
						) {
							errors.linkedin = 'Please enter a valid URL';
						}
					}
					if (values.facebook) {
						if (
							!values.facebook.match(
								/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
							)
						) {
							errors.facebook = 'Please enter a valid URL';
						}
					}
					if (values.twitter) {
						if (
							!values.twitter.match(
								/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
							)
						) {
							errors.twitter = 'Please enter a valid URL';
						}
					}
					return errors;
				}}
				onSubmit={(values) => {
					createCandidate(values);
					// updateRender('2');
				}}
			>
				<Form layout='vertical' className='candidate-form'>
					<Row className='personal-information'>
						<Col span={24}>
							<h2>Personal Information</h2>
							<p className='hp-p1-body hp-mb-0'>
								Add you personal details like full name, address details etc
							</p>
							<Divider />
						</Col>
						<Col span={24}>
							<Row gutter={[16]}>
								<Col md={12} span={24}>
									<Form.Item
										label={
											<>
												First Name:
												<span style={{ color: 'red', fontSize: '1em' }}>*</span>
											</>
										}
										name='first_name'
									>
										<Input name='first_name' />
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item
										label={
											<>
												Last Name:
												<span style={{ color: 'red', fontSize: '1em' }}>*</span>
											</>
										}
										name='last_name'
									>
										<Input name='last_name' />
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item
										label={
											<>
												Email Address:
												<span style={{ color: 'red', fontSize: '1em' }}>*</span>
											</>
										}
										name='email'
									>
										<Input name='email' type='email' />
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item
										label={
											<>
												Phone Number:
												<span style={{ color: 'red', fontSize: '1em' }}>*</span>
											</>
										}
										name='phone'
									>
										<Input name='phone' type='tel' />
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<h4>Current Address</h4>
									<Row>
										<Col md={24} span={24}>
											<Form.Item
												label={
													<>
														Address Line 1:
														<span style={{ color: 'red', fontSize: '1em' }}>
															*
														</span>
													</>
												}
												name='current_address_line_1'
											>
												<Input name='current_address_line_1' />
											</Form.Item>
										</Col>
										<Col md={24} span={24}>
											<Form.Item
												label={
													<>
														Address Line 2:
														<span style={{ color: 'red', fontSize: '1em' }}>
															*
														</span>
													</>
												}
												name='current_address_line_2'
											>
												<Input name='current_address_line_2' />
											</Form.Item>
										</Col>
										<Col md={12} span={24}>
											<Form.Item
												label={
													<>
														Country:
														<span style={{ color: 'red', fontSize: '1em' }}>
															*
														</span>
													</>
												}
												name='current_country'
											>
												<Select
													name='current_country'
													style={{ marginRight: '10px' }}
													options={countryOptions}
													onSelect={(value, event) => fetchState(value, token)}
												></Select>
											</Form.Item>
										</Col>
										<Col md={12} span={24}>
											<Form.Item
												label={
													<>
														State:
														<span style={{ color: 'red', fontSize: '1em' }}>
															*
														</span>
													</>
												}
												name='current_state'
											>
												<Select
													name='current_state'
													options={stateOptions}
													onSelect={(value, event) => fetchCities(value, token)}
												></Select>
											</Form.Item>
										</Col>
										<Col md={12} span={24}>
											<Form.Item
												label={
													<>
														City:
														<span style={{ color: 'red', fontSize: '1em' }}>
															*
														</span>
													</>
												}
												name='current_city'
											>
												<Select
													name='current_city'
													options={cityOptions}
												></Select>
											</Form.Item>
										</Col>
										<Col md={12} span={24}>
											<Form.Item
												label={
													<>
														Zipcode:
														<span style={{ color: 'red', fontSize: '1em' }}>
															*
														</span>
													</>
												}
												name='cur_zipcode'
											>
												<Input name='cur_zipcode' type='tel' />
											</Form.Item>
										</Col>
									</Row>
								</Col>
								<Col md={12} span={24}>
									<h4>Permenant Address</h4>
									<Row>
										<Col md={24} span={24}>
											<Form.Item
												label={
													<>
														Address Line 1:
														<span style={{ color: 'red', fontSize: '1em' }}>
															*
														</span>
													</>
												}
												name='permanent_address_line_1'
											>
												<Input name='permanent_address_line_1' />
											</Form.Item>
										</Col>
										<Col md={24} span={24}>
											<Form.Item
												label={
													<>
														Address Line 2:
														<span style={{ color: 'red', fontSize: '1em' }}>
															*
														</span>
													</>
												}
												name='permanent_address_line_2'
											>
												<Input name='permanent_address_line_2' />
											</Form.Item>
										</Col>
										<Col md={12} span={24}>
											<Form.Item
												label={
													<>
														Country:
														<span style={{ color: 'red', fontSize: '1em' }}>
															*
														</span>
													</>
												}
												name='permanent_country'
											>
												<Select
													name='permanent_country'
													style={{ marginRight: '10px' }}
													options={countryOptions}
													onSelect={(value, event) => fetchState(value, token, true)}
												>
												</Select>
											</Form.Item>
										</Col>
										<Col md={12} span={24}>
											<Form.Item
												label={
													<>
														State:
														<span style={{ color: 'red', fontSize: '1em' }}>
															*
														</span>
													</>
												}
												name='permanent_state'
											>
												<Select 
													name='permanent_state' 
													options={perStateOptions}
													onSelect={(value, event) => fetchCities(value, token, true)}
												>
												</Select>
											</Form.Item>
										</Col>
										<Col md={12} span={24}>
											<Form.Item
												label={
													<>
														City:
														<span style={{ color: 'red', fontSize: '1em' }}>
															*
														</span>
													</>
												}
												name='permanent_city'
											>
												<Select name='permanent_city' options={perCityOptions}>
												</Select>
											</Form.Item>
										</Col>
										<Col md={12} span={24}>
											<Form.Item
												label={
													<>
														Zipcode:
														<span style={{ color: 'red', fontSize: '1em' }}>
															*
														</span>
													</>
												}
												name='permanent_zip_code'
											>
												<Input name='permanent_zip_code' type='tel' />
											</Form.Item>
										</Col>
									</Row>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row className='work-information'>
						<Col span={24}>
							<h2>Work Information</h2>
							<p className='hp-p1-body hp-mb-0'>
								Add you work related details like skills, categoty etc
							</p>
							<Divider />
						</Col>
						<Col span={24}>
							<Row gutter={[16]}>
								<Col md={12} span={24}>
									<Form.Item
										label={
											<>
												Job Category:
												<span style={{ color: 'red', fontSize: '1em' }}>*</span>
											</>
										}
										name='job_category_id'
									>
										<Select name='job_category_id'>
											<Select.Option value='city-1'>City 1</Select.Option>
											<Select.Option value='city-2'>City 2</Select.Option>
											<Select.Option value='city-3'>City 3</Select.Option>
										</Select>
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item
										label={
											<>
												Total Experience:
												<span style={{ color: 'red', fontSize: '1em' }}>*</span>
											</>
										}
										name='total_experience'
									>
										<InputNumber
											addonAfter='Years'
											min={0}
											max={100}
											name='total_experience'
										/>
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item
										label={
											<>
												Currency:
												<span style={{ color: 'red', fontSize: '1em' }}>*</span>
											</>
										}
										name='currency_id'
									>
										<Select name='currency_id'>
											<Select.Option value='1'>INR</Select.Option>
											<Select.Option value='2'>USD</Select.Option>
											<Select.Option value='3'>Other</Select.Option>
										</Select>
									</Form.Item>
								</Col>
								<Col md={12} span={24}></Col>
								<Col md={12} span={24}>
									<Form.Item
										label={
											<>
												Current CTC:
												<span style={{ color: 'red', fontSize: '1em' }}>*</span>
											</>
										}
										name='current_ctc'
									>
										<InputNumber
											addonAfter='USD'
											min={0}
											max={100}
											name='current_ctc'
										/>
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item
										label={
											<>
												Expected CTC:
												<span style={{ color: 'red', fontSize: '1em' }}>*</span>
											</>
										}
										name='expected_ctc'
									>
										<InputNumber
											addonAfter='USD'
											min={0}
											max={100}
											name='expected_ctc'
										/>
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item
										label={
											<>
												Skills:
												<span style={{ color: 'red', fontSize: '1em' }}>*</span>
											</>
										}
										name='skills'
									>
										<Select name='skills'>
											<Select.Option value='1'>Skill 1</Select.Option>
											<Select.Option value='2'>Skill 2</Select.Option>
											<Select.Option value='3'>Skill 3</Select.Option>
										</Select>
									</Form.Item>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row className='experience'>
						<Col span={24}>
							<h2>Work experience details</h2>
							<p className='hp-p1-body hp-mb-0'>
								Add you work related details like company name, role, duration
								etc.
							</p>
							<Divider />
						</Col>
						<Col span={24}>
							<Row gutter={[16]}>
								<Col md={12} span={24}>
									<Form.Item label={<>Search your company:</>} name='company'>
										<Input addonAfter='Search' name='company' />
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item label={<>Role / Designation:</>} name='role'>
										<Input name='role' />
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item label={<>Start Date:</>} name='start_date'>
										<DatePicker name='start_date' />
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item label={<>End Date:</>} name='end_date'>
										<DatePicker name='end_date' />
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item label={<>Description:</>} name='description'>
										<TextArea name='description' rows={4} />
									</Form.Item>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row className='resume'>
						<Col span={24}>
							<h2>Upload your latest resume</h2>
							<p className='hp-p1-body hp-mb-0'>
								Upload your latest resume with all details
							</p>
							<Divider />
						</Col>
						<Col span={24}>
							<Row gutter={[16]}>
								<Col md={24} span={24} style={{ marginBottom: '20px' }}>
									<Dragger {...resumeProps}>
										<p className='ant-upload-drag-icon'>
											<UploadOutlined />
										</p>
										<p className='ant-upload-text'>
											Click or drag file to this area to upload
										</p>
										<p className='ant-upload-hint'>
											Support for a single upload. File types: PDF, DOCX, PPTX
										</p>
									</Dragger>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row className='video'>
						<Col span={24}>
							<h2>Upload your video introduction</h2>
							<p className='hp-p1-body hp-mb-0'>
								Present yourself in a video introduction
							</p>
							<Divider />
						</Col>
						<Col span={24}>
							<Row gutter={[16]}>
								<Col md={24} span={24} style={{ marginBottom: '20px' }}>
									<Dragger {...videoProps}>
										<p className='ant-upload-drag-icon'>
											<UploadOutlined />
										</p>
										<p className='ant-upload-text'>
											Click or drag file to this area to upload
										</p>
										<p className='ant-upload-hint'>
											Support for a single upload. Video only:mp4, 4:3, less
											than 3 min, max 15MB
										</p>
									</Dragger>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row className='social-links'>
						<Col span={24}>
							<h2>Add your social links</h2>
							<p className='hp-p1-body hp-mb-0'>
								Showcase your social links, website here
							</p>
							<Divider />
						</Col>
						<Col span={24}>
							<Row gutter={[16]}>
								<Col md={24} span={24}>
									<Form.Item label='Portfolio / Website:' name='website'>
										<Input
											addonBefore='https://'
											name='website'
											defaultValue=''
										/>
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item label='LinkedIn:' name='linkedin'>
										<Input
											addonBefore={<LinkedinOutlined />}
											name='linkedin'
											defaultValue=''
										/>
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item label='GitHub:' name='github'>
										<Input
											addonBefore={<GithubOutlined />}
											name='github'
											defaultValue=''
										/>
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item label='Facebook:' name='facebook'>
										<Input
											addonBefore={<FacebookOutlined />}
											name='facebook'
											defaultValue=''
										/>
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item label='Twitter:' name='twitter'>
										<Input
											addonBefore={<TwitterOutlined />}
											name='twitter'
											defaultValue=''
										/>
									</Form.Item>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col md={24} span={24} className='button-actions-col'>
							<SubmitButton>Save</SubmitButton>
						</Col>
					</Row>
				</Form>
			</Formik>
		</>
	);
}

export default EditProfile;
