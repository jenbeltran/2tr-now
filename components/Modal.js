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
				Upload
			</Button>
			<Modal isOpen={modal} toggle={handleToggle}>
				<ModalHeader toggle={handleToggle}>Criminal Record Upload</ModalHeader>
				<ModalBody>Please attach your criminal record</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={handleToggle}>
						Upload
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
