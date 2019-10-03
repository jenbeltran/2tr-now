import React from 'react';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Star from '../static/star.png';

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
					<div class="btn-group" role="group" aria-label="Basic example">
						<button type="button" class="btn btn-light">
							Complete
						</button>
						<button type="button" class="btn btn-light">
							Partial
						</button>
						<button type="button" class="btn btn-light">
							Not Useful
						</button>
					</div>
					<p className="RateModal-p">Quality Service</p>
					<div class="btn-group" role="group" aria-label="Basic example">
						<button type="button" class="btn btn-light">
							Complete
						</button>
						<button type="button" class="btn btn-light">
							Partial
						</button>
						<button type="button" class="btn btn-light">
							Not Useful
						</button>
					</div>
					<p className="RateModal-p">Knowledge</p>
					<div class="btn-group" role="group" aria-label="Basic example">
						<button type="button" class="btn btn-light">
							Complete
						</button>
						<button type="button" class="btn btn-light">
							Partial
						</button>
						<button type="button" class="btn btn-light">
							Not Useful
						</button>
					</div>
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
