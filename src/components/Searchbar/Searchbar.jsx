import React from 'react';
import {
	StyledSearchForm,
	StyledSearchFormBtn,
	StyledSearchFormInput,
	StyledSearchbar,
} from './Searchbar.styled';

import PropTypes from 'prop-types';

export const Searchbar = ({ onChangeQuery }) => {
	const onSubmit = e => {
		e.preventDefault()
		const form = e.target
		onChangeQuery(form.searchImg.value)
		
	}
	return (
		<StyledSearchbar>
			<StyledSearchForm onSubmit={onSubmit}>
				<StyledSearchFormBtn type="submit" >
					<span>Search</span>
				</StyledSearchFormBtn>
				<StyledSearchFormInput
					type="text"
					autocomplete="off"
					name='searchImg'
					autoFocus
					placeholder="Search images and photos"
				/>
			</StyledSearchForm>
		</StyledSearchbar>
	);
};

Searchbar.propTypes = {
	onChangeQuery: PropTypes.func.isRequired
}
