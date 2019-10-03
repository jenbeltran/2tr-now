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

const StudentNavbar = (props) => {
	const [ dropdown, setDropdown ] = useState(false);

	const handleToggle = () => {
		setDropdown(!dropdown);
	};
	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">
					<p className="Navbar-brand">2TR-Now</p>
				</NavbarBrand>
				<NavbarToggler onClick={handleToggle} />
				<Collapse isOpen={dropdown} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink className="Navbar-link" href="/student_dashboard">
								Dashboard
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="Navbar-link" href="/student_request">
								Create New Request
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="Navbar-link" href="/student_pending">
								Pending Requests
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="Navbar-link" href="/student_completed">
								Completed Sessions
							</NavLink>
						</NavItem>
						<UncontrolledDropdown>
							<DropdownToggle id="Navbar-welcome" nav caret>
								Welcome, Sydney!
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem href="/student_profile">View Profile</DropdownItem>
								<DropdownItem href="/">Logout</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default StudentNavbar;
