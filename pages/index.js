import { Button } from 'reactstrap';

const Index = () => {
	return (
		<div>
			<h1 className="Index-h1">
				Simply register an account, login, and get matched with a tutor specifically suited to your needs.
			</h1>
			<Button className="Index-button" outline href="register">
				Register
			</Button>
		</div>
	);
};

export default Index;
