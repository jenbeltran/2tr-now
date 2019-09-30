import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal : false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState((prevState) => ({
			modal : !prevState.modal
		}));
	}

	render() {
		return (
			<div>
				<Button outline onClick={this.toggle}>
					Upload
				</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Criminal Record Upload</ModalHeader>
					<ModalBody>Please attach your criminal record</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.toggle}>
							Upload
						</Button>{' '}
						<Button color="secondary" onClick={this.toggle}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default ModalExample;
