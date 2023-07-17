import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleyItem/ImageGalleryItem';
import { PropTypes } from 'prop-types';

export const ImageGallery = ({ images, action }) => {
	return (
		<ImageGalleryList>
			{images.map(el => {
				return (
					<ImageGalleryItem
						action={action}
						key={el.id}
						img={el.webformatURL}
						tag={el.tags}
					/>
				);
			})}
		</ImageGalleryList>
	);
};

ImageGallery.propTypes = {
	images: PropTypes.array.isRequired,
	action: PropTypes.func.isRequired,
};
