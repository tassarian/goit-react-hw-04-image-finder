import React, { useState } from 'react';
import {
	StyledSearchForm,
	StyledSearchFormBtn,
	StyledSearchFormInput,
	StyledSearchbar,
} from './Searchbar.styled';

import PropTypes from 'prop-types';

export const Searchbar = ({ onChangeQuery }) => {
	const [search, setSearch] = useState('')
	const onSubmit = e => {
		e.preventDefault()
		onChangeQuery(search)
	}
	const handleOnChange = e => setSearch(e.target.value)
	return (
		<StyledSearchbar>
			<StyledSearchForm onSubmit={onSubmit}>
				<StyledSearchFormBtn type="submit" >
					<span>Search</span>
				</StyledSearchFormBtn>
				<StyledSearchFormInput
					onChange={handleOnChange}
					value={search}
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
