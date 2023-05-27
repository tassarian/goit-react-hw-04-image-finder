import React from 'react';
import PropTypes from 'prop-types'
import { StyledGalleryItem, StyledImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ getCurrentPicture, image }) => {
	return (
		<StyledGalleryItem
			key={image.id}
			onClick={() => {
				getCurrentPicture(image.largeImageURL);
			}}
		>
			<StyledImg src={image.webformatURL} alt="image" />
		</StyledGalleryItem>
	);
};

ImageGalleryItem.propTypes = {
    getCurrentPicture: PropTypes.func.isRequired,
    image: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
      })
}

