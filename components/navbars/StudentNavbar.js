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
import Link from 'next/link';

const StudentNavbar = () => {
	const [ dropdown, setDropdown ] = useState(false);

	const handleToggle = () => {
		setDropdown(!dropdown);
	};
	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand>
					<Link href="/">
						<p className="Navbar-brand">2TR-Now</p>
					</Link>
				</NavbarBrand>
				<NavbarToggler onClick={handleToggle} />
				<Collapse isOpen={dropdown} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink className="Navbar-link" href="/student_dashboard/1001">
								Dashboard
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="Navbar-link" href="/student_request">
								New Request
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="Navbar-link" href="/student_pending/1001">
								Pending Requests
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="Navbar-link" href="/student_active/1001">
								Active Requests
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="Navbar-link" href="/student_completed/1001">
								Completed Sessions
							</NavLink>
						</NavItem>
						<UncontrolledDropdown>
							<DropdownToggle id="Navbar-welcome" nav caret>
								Welcome, testing!
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem href="/student_profile/1001">View Profile</DropdownItem>
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
