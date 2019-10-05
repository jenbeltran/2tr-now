import { Button } from 'reactstrap';
const Navbar = () => (
	<div>
		<a href="/">
			<h1 className="Navbar-h1" href="/">
				2TR-Now
			</h1>
		</a>
		<Button className="Navbar-button1" outline href="/login">
			Sign In
		</Button>
		<Button className="Navbar-button2" outline href="register">
			Register
		</Button>
	</div>
);

export default Navbar;
