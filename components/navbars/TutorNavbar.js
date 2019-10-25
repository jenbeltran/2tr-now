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
							<NavLink className="Navbar-link" href="/tutor_dashboard/2000">
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
							<NavLink className="Navbar-link" href="/tutor_completed/2000">
								Completed Sessions
							</NavLink>
						</NavItem>
						<UncontrolledDropdown>
							<DropdownToggle id="Navbar-welcome" nav caret>
								Welcome!
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem href="/tutor_profile/2000">View Profile</DropdownItem>
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
