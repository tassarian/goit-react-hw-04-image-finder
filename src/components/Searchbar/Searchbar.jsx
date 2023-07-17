import { PropTypes } from 'prop-types';
import { Button, Form, Header, Input } from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';

export const Searchbar = ({ action }) => {
	const handleSubmit = evt => {
		evt.preventDefault();
		action(evt.target.search.value);
	};
	return (
		<Header>
			<Form onSubmit={handleSubmit}>
				<Input
					name="search"
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search Images"
				/>
				<Button type="submit">
					<FaSearch />
				</Button>
			</Form>
		</Header>
	);
};

Searchbar.propTypes = {
	action: PropTypes.func.isRequired,
};
