import { Button } from 'reactstrap';
import Countries from '../components/Countries';
import Programs from '../components/Program';
import Date from '../components/Date';
import Month from '../components/Month';
import Year from '../components/Year';

const StudentRegister = () => (
	<div className="StudentRegister-div">
		<table>
			<tr>
				<td>
					<p className="StudentRegister-p">First Name:</p>
					<input type="text" />
				</td>
				<td>
					<p className="StudentRegister-p">Last Name:</p>
					<input type="text" />
				</td>
			</tr>
		</table>

		<p className="StudentRegister-p">Date of Birth:</p>
		<table>
			<tr>
				<td>
					<Date />
				</td>
				<td>
					<Month />
				</td>
				<td>
					<Year />
				</td>
			</tr>
		</table>

		<p className="StudentRegister-p">Email:</p>
		<input type="email" />
		<p className="StudentRegister-p">Password:</p>
		<input type="password" />
		<p className="StudentRegister-p">Re-enter Password:</p>
		<input type="password" />

		<table>
			<tr>
				<td>
					<p className="StudentRegister-p">Location:</p>
					<Countries />
				</td>
				<td>
					<p className="StudentRegister-p">Program:</p>
					<Programs />
				</td>
			</tr>
		</table>
		<br />
		<Button outline>Register</Button>
	</div>
);

export default StudentRegister;
