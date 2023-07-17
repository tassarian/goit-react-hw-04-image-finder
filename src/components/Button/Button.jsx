import { StyledButton } from './Button.styled';
import { PropTypes } from 'prop-types';

export const Button = ({ action }) => {
	return (
		<>
			<StyledButton type="button" onClick={action}>
				Load more
			</StyledButton>
		</>
	);
};

Button.propTypes = {
	action: PropTypes.func.isRequired,
};
