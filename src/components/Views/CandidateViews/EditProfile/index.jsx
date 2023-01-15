import React, { useState } from "react";
import { Form, Input, SubmitButton, ResetButton } from 'formik-antd';
import { Formik } from 'formik';
import PersonalInformation from "../PersonalInformation";
import WorkInformation from "../WorkInformation";
import Experience from "../Experience";
import Video from "../Video";
import Resume from "../Resume";
import SocialLinks from "../SocialLinks";

function EditProfile() {
    const [render, updateRender] = useState("1");
	return (
		<>
			<Formik
				initialValues={{
					first_name: "",
					last_name: "",
					email: "",
					phone: "",
					current_city: "",
				}}
				validate={(values) => {
					const errors = {};
					if (!values.first_name) {
						errors.first_name = "First name is required";
					}
					if (!values.last_name) {
						errors.last_name = "Last name is required";
					}
					if (!values.email) {
						errors.email = "Email is required";
					}
					if (!values.phone) {
						errors.phone = "Phone is required";
					}
					if (!values.city) {
						errors.city = "City is required";
					}
					return errors;
				}}
				onSubmit={(values) => {
					console.log("jackkkk!", values);
					updateRender("2");
				}}
			>
				<Form layout="vertical" className="personal-information-form">
					<PersonalInformation />
					<WorkInformation />
					<Experience/>
					<Resume />
					<Video />
					<SocialLinks />
				</Form>
			</Formik>
		</>
	);
}

export default EditProfile;
