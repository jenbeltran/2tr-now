import StudentRegister from '../components/student/StudentRegister';

const Register = () => (
	<div>
		<h1>Register a new account!</h1>
		<div className="Register-student">
			<input type="radio" />
			<label htmlFor="student">Student?</label>
		</div>
		<div className="Register-tutor">
			<input type="radio" />
			<label htmlFor="tutor">Tutor?</label>
		</div>
		<StudentRegister />
	</div>
);

export default Register;
