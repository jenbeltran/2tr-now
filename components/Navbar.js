import { Button } from 'reactstrap';
const Navbar = () => (
	<div>
		<h1 className="Navbar-h1">2TR-Now</h1>
		<Button className="Navbar-button1" outline href="/">
			Sign In
		</Button>
		<Button className="Navbar-button2" outline href="register">
			Register
		</Button>
	</div>
);

export default Navbar;
