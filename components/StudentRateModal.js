import React from 'react';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Star from '../static/star.png';
import StudentRateButtons from './student/StudentRateButtons';

const StudentRateModal = (props) => {
	const [ modal, setModal ] = useState(false);

	const handleToggle = () => {
		setModal(!modal);
	};

	return (
		<div>
			<img onClick={handleToggle} src={Star} alt="View Details" width="35px" />

			<Modal isOpen={modal} toggle={handleToggle}>
				<ModalHeader toggle={handleToggle}>How was your tutor?</ModalHeader>
				<ModalBody>
					<p className="RateModal-p1">Communication</p>
					<StudentRateButtons />
					<p className="RateModal-p">Quality Service</p>
					<StudentRateButtons />
					<p className="RateModal-p">Knowledge</p>
					<StudentRateButtons />
					<p className="RateModal-p">Comments:</p>
					<textarea rows="3" cols="50" placeholder="Please tell us how we can improve our services." />
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={handleToggle}>
						Submit
					</Button>{' '}
					<Button color="secondary" onClick={handleToggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default StudentRateModal;
