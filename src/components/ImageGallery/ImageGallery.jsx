import React from "react";
import PropTypes from 'prop-types'
import { StyledImageGallery } from "./ImageGallery.styled";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, getCurrentPicture }) => {
    
    return (
        <StyledImageGallery>
            {images.map(image => {
                return (
                    <ImageGalleryItem
                        key={image.id}
                        image={image}
                        getCurrentPicture={getCurrentPicture}
                    />
                )
                
                    
               
            })}
            
        </StyledImageGallery>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      })
    ).isRequired,
    getCurrentPicture: PropTypes.func.isRequired,
  };