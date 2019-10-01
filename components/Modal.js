import React from 'react';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalTemplate = (props) => {
	const [ modal, setModal ] = useState(false);

	const handleToggle = () => {
		setModal(!modal);
	};

	return (
		<div>
			<Button outline onClick={handleToggle}>
				{props.modalButton}
			</Button>
			<Modal isOpen={modal} toggle={handleToggle}>
				<ModalHeader toggle={handleToggle}>{props.modalHeader}</ModalHeader>
				<ModalBody>{props.modalBody}</ModalBody>
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

export default ModalTemplate;
