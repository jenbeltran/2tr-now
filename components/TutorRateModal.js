import React from 'react';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Star from '../static/star.png';
import TutorRateButtons from '../components/tutor/TutorRateButtons';

const TutorRateModal = (props) => {
	const [ modal, setModal ] = useState(false);

	const handleToggle = () => {
		setModal(!modal);
	};

	return (
		<div>
			<img onClick={handleToggle} src={Star} alt="View Details" width="35px" />

			<Modal isOpen={modal} toggle={handleToggle}>
				<ModalHeader toggle={handleToggle}>How was your student?</ModalHeader>
				<ModalBody>
					<p className="RateModal-p1">Politeness</p>
					<TutorRateButtons />
					<p className="RateModal-p">Openness</p>
					<TutorRateButtons />
					<p className="RateModal-p">Flexibility</p>
					<TutorRateButtons />
					<p className="RateModal-p">Comments:</p>
					<textarea rows="3" cols="50" placeholder="Please provide further feedback." />
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

export default TutorRateModal;
