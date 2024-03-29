import { useEffect } from 'react';
import { Backdrop, ModalImg, StyledModal } from './Modal.styled';
import { PropTypes } from 'prop-types';

export const Modal = ({ data, close }) => {
	useEffect(() => {
		const handleKeyDown = e => {
			if (e.key === 'Escape') {
				close();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [close]);

	const closeOnClick = e => {
		if (e.target === e.currentTarget) {
			close();
		}
	};

	return (
		<Backdrop onClick={closeOnClick}>
			<StyledModal>
				<ModalImg src={data.img} alt={data.tags} />
			</StyledModal>
		</Backdrop>
	);
};

Modal.propTypes = {
	data: PropTypes.object.isRequired,
	close: PropTypes.func.isRequired,
};
