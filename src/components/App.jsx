import React, { useCallback, useEffect, useState } from 'react';
import { Notify } from 'notiflix';

import { StyledApp } from './Global.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

import MyLoader from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { getImg } from '../../src/services/PixabayApi';
import { useToggle } from './hooks/useToggle';

const STATUS = {
	idle: 'loading',
	pending: 'pending',
	fulfilled: 'fulfilled',
	rejected: 'rejected',
};
export const App = () => {
	const [images, setImages] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [page, setPage] = useState(1);
	const [pictureUrl, setPictureUrl] = useState('');
	const [status, setStatus] = useState('idle');
	const [hits, setHits] = useState(null);

	const fetchImages = useCallback(() => {
		const { pending, fulfilled, rejected } = STATUS;
		setStatus(pending);
		getImg(searchQuery, page)
			.then(results => {
				setStatus(fulfilled);
				setImages(prev => [...prev, ...results.data.hits]);
				setHits(results.data.totalHits);
				Notify.success(`We found ${results.data.totalHits} images!`);
			})
			.catch(e => {
				setStatus(rejected);
				Notify.failure('Something went wrong!');
			});
	}, [searchQuery, page]);

	useEffect(() => {
		if (!searchQuery) {
			return;
		} else {
			fetchImages();
		}
	}, [searchQuery, fetchImages]);

	const moreImages = () => {
		setPage(prev => prev + 1);
	};

	const handleChangeQuery = query => {
		setImages([]);
		setSearchQuery(query);
		setPage(1);
	};

	const getCurrentPicture = largeImg => {
		setPictureUrl(largeImg);
		open()
	};
	
	const { open, isOpen, close} = useToggle()
	const { pending, fulfilled, rejected } = STATUS;
	return (
		<StyledApp>
			<Searchbar onChangeQuery={handleChangeQuery} />
			{status === pending && <MyLoader />}
			{status === fulfilled && (
				<ImageGallery
					images={images}
					getCurrentPicture={getCurrentPicture}
				/>
			)}
			{status === rejected && (
				<h1>We did not found imageі for you request</h1>
			)}

			{hits > 12 && status === fulfilled && hits !== images.length && (
				<Button onClick={moreImages} />
			)}

			{isOpen && <Modal onClose={close} largeImg={pictureUrl} />}
		</StyledApp>
	);
};
