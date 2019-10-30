import React from 'react';
import { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

const TutorNavbar = (props) => {
	const [ dropdown, setDropdown ] = useState(false);

	const handleToggle = () => {
		setDropdown(!dropdown);
	};
	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand>
					<a href="/">
						<p className="Navbar-brand">2TR-Now</p>
					</a>
				</NavbarBrand>
				<NavbarToggler onClick={handleToggle} />
				<Collapse isOpen={dropdown} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink className="Navbar-link" href={`/tutor_dashboard/${props.value}`}>
								Dashboard
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="Navbar-link" href="/tutor_pending">
								Pending Requests
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="Navbar-link" href="/tutor_active">
								Active Requests
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="Navbar-link" href={`/tutor_completed/${props.value}`}>
								Completed Sessions
							</NavLink>
						</NavItem>
						<UncontrolledDropdown>
							<DropdownToggle id="Navbar-welcome" nav caret>
								Welcome!
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem href={`/tutor_profile/${props.value}`}>View Profile</DropdownItem>
								<DropdownItem href="/">Logout</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default TutorNavbar;
