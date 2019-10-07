import React from 'react';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ReplyModal = () => {
	const [ modal, setModal ] = useState(false);

	const handleToggle = () => {
		setModal(!modal);
	};

	return (
		<div>
			<Button className="ReplyModal-button" outline onClick={handleToggle}>
				Reply
			</Button>
			<Modal isOpen={modal} toggle={handleToggle}>
				<ModalHeader toggle={handleToggle}>Message</ModalHeader>
				<ModalBody>
					<textarea rows="5" cols="50" placeholder="Add your message here." />
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

export default ReplyModal;
