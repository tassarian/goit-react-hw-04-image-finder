import React from "react";
import PropTypes from 'prop-types';
import { StyledLImage, StyledModal, StyledModalOverlay } from "./Modal.styled";

export class Modal extends React.Component {
    handleKeyDown = e => {
		if (e.key === 'Escape') {
			this.props.onClose()
		}
	}
    onBackdropClick = e => {
		if (e.target === e.currentTarget) {
			this.props.onClose()
		}
	}
    componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown)
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown)
	}
    render() {
        return (
            <StyledModalOverlay onClick={this.onBackdropClick}>
                <StyledModal>
                    <StyledLImage src={this.props.largeImg}  alt='image' />
                </StyledModal>
            </StyledModalOverlay>
        )
    }
    
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImg: PropTypes.string.isRequired,
}