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
							<NavLink className="StudentNavbar-link" href="/">
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="StudentNavbar-link" href="/">
								Create New Request
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="StudentNavbar-link" href="/">
								View Pending Requests
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="StudentNavbar-link" href="/">
								Completed Sessions
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="StudentNavbar-link" href="/">
								View Profile
							</NavLink>
						</NavItem>
						<UncontrolledDropdown>
							<DropdownToggle id="StudentNavbar-welcome" nav caret>
								Welcome, Sydney!
							</DropdownToggle>
							<DropdownMenu right>
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
