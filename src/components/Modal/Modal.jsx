/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledLImage, StyledModal, StyledModalOverlay } from './Modal.styled';

export const Modal = ({ onClose, largeImg }) => {
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    })
    const handleKeyDown = e => {
		if (e.key === 'Escape' || e.target === e.currentTarget) {
			onClose()
		}
	}
	return (
		<StyledModalOverlay onClick={handleKeyDown}>
			<StyledModal>
				<StyledLImage src={largeImg} alt="image" />
			</StyledModal>
		</StyledModalOverlay>
	);
};

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	largeImg: PropTypes.string.isRequired,
};
