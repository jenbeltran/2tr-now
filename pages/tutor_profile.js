import axios from 'axios';
import { useState } from 'react';
import { Container } from 'reactstrap';
import Modal from '../components/Modal';
import Placeholder from '../static/placeholder.png';
import Countries from '../components/Countries';
import Programs from '../components/Program';
import SpecialtyBusiness from '../components/specialty/SpecialtyBusiness';
import SpecialtyMath from '../components/specialty/SpecialtyMath';
import SpecialtyLanguage from '../components/specialty/SpecialtyLanguage';
import SpecialtyOther from '../components/specialty/SpecialtyOther';
import SpecialtyScience from '../components/specialty/SpecialtyScience';

const TutorProfile = ({ posts }) => (
	<div>
		{posts.map((requests) => (
			<table key={requests.tutorId} className="profile-table">
				<tr>
					<td>
						<Modal
							modalButton={<img src={Placeholder} alt="placeholder" className="modal-img" />}
							modalHeader={'Profile Photo Upload'}
							modalBody={'Please upload a profile photo'}
						/>
					</td>
				</tr>
				<tr>
					<td>
						<h1>
							{requests.firstName} {requests.lastName}
						</h1>
					</td>
				</tr>
			</table>
		))}

		<Container>
			{posts.map((requests) => (
				<table key={requests.tutorId}>
					<tr>
						<td>
							<p className="Profile-p">First Name:</p>
							<input type="text" value={requests.firstName} readOnly />
						</td>
						<td>
							<p className="Profile-p">Last Name:</p>
							<input type="text" value={requests.lastName} readOnly />
						</td>
					</tr>
				</table>
			))}
			{posts.map((requests) => (
				<div key={requests.tutorId}>
					<p className="Profile-p">Email:</p>
					<input type="email" value={requests.tutorEmail} readOnly />
					<p className="Profile-p">Location:</p>
					<Countries value={requests.location} />
				</div>
			))}
			{posts.map((requests) => (
				<table key={requests.tutorId}>
					<tr>
						<td>
							<p className="Profile-p">Program:</p>
							<Programs name="program" value={requests.program} />
						</td>
						<td>
							<p className="Profile-p">Specialty:</p>
							<input type="subject" value={requests.specialty} readOnly />
						</td>
					</tr>
				</table>
			))}
			<br />
			<Modal
				modalButton={'Save'}
				modalHeader={'Confirm Details'}
				modalBody={'Please confirm your details below:'}
			/>
		</Container>
	</div>
);

TutorProfile.getInitialProps = async ({ query }) => {
	const { data } = await axios.get(`http://localhost:3000/api/tutor/${query.id}`);
	return { ...query, posts: data };
};

export default TutorProfile;
