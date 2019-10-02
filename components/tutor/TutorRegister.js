import { Button } from 'reactstrap';
import Countries from '../Countries';
import Programs from '../Program';
import SpecialtyBusiness from '../specialty/SpecialtyBusiness';
import SpecialtyMath from '../specialty/SpecialtyMath';
import Modal from '../Modal';

const TutorRegister = (props) => (
	<div className="Register-div">
		<table>
			<tr>
				<td>
					<p className="Register-p">First Name:</p>
					<input type="text" />
				</td>
				<td>
					<p className="Register-p">Last Name:</p>
					<input type="text" />
				</td>
			</tr>
		</table>

		<p className="Register-p">Email:</p>
		<input type="email" />
		<p className="Register-p">Password:</p>
		<input type="password" />
		<p className="Register-p">Re-enter Password:</p>
		<input type="password" />

		<table>
			<tr>
				<td>
					<p className="Register-p">Location:</p>
					<Countries />
				</td>
				<td className="Register-record">
					<p className="Register-p">Criminal Record:</p>
					<Modal
						modalButton={'Upload'}
						modalBody={'Please upload your criminal record'}
						modalHeader={'Criminal Record'}
					/>
				</td>
			</tr>
			<tr>
				<td>
					<p className="Register-p">Program:</p>
					<Programs />
				</td>
				<td>
					<p className="Register-p">Specialty:</p>
					<SpecialtyBusiness />
				</td>
			</tr>
		</table>
		<br />
		<Button outline href="tutor_dashboard">
			Register
		</Button>
	</div>
);

export default TutorRegister;