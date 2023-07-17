import { Component } from 'react';
import { Backdrop, ModalImg, StyledModal } from './Modal.styled';
import { PropTypes } from 'prop-types';

export class Modal extends Component {
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown);
	}
	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	onBackdropClick = e => {
		if (e.currentTarget === e.target) {
			this.props.action('', '');
		}
	};
	handleKeyDown = e => {
		if (e.key === 'Escape') {
			this.props.action('', '');
		}
	};
	render() {
		const { img, tags } = this.props;
		return (
			<Backdrop onClick={this.onBackdropClick}>
				<StyledModal>
					<ModalImg src={img} alt={tags} />
				</StyledModal>
			</Backdrop>
		);
	}
}

Modal.propTypes = {
	action: PropTypes.func.isRequired,
	img: PropTypes.string.isRequired,
	tags: PropTypes.string.isRequired,
};
