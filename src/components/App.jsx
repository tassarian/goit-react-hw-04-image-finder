import React from 'react';
import { Notify } from 'notiflix';

import { StyledApp } from './Global.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

import MyLoader from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { getImg } from '../../src/services/PixabayApi';

const STATUS = {
	idle: 'loading',
	pending: 'pending',
	fulfilled: 'fulfilled',
	rejected: 'rejected',
};
class App extends React.Component {
	state = {
		images: [],
		searchQuery: '',
		page: 1,
		pictureUrl: '',
		status: 'idle',
		hits: null,
		isOpen: false,
	};

	componentDidUpdate = (_, prevState) => {
		if (
			prevState.searchQuery !== this.state.searchQuery ||
			prevState.page !== this.state.page
		)
			this.fetchImages();
	};

	fetchImages = () => {
		const { searchQuery, page } = this.state;
		const { pending, fulfilled, rejected } = STATUS;

		this.setState({ status: pending });
			getImg(searchQuery, page)
				.then(results => {
					this.setState(prevState => ({
						images: [...prevState.images, ...results.data.hits],
						status: fulfilled,
						hits: results.data.totalHits,
					}));
					// Notify.success(`We found ${results.data.totalHits} images!`);
				})
				.catch(e => {
					this.setState({ status: rejected });
					Notify.failure('Something went wrong!');
				});
	};

	moreImages = () => {
		this.setState(prevState => ({ page: prevState.page + 1 }));
	};

	handleChangeQuery = searchQuery => {
		this.setState({ images: [], searchQuery, page: 1 });
	};

	getCurrentPicture = pictureUrl => {
		this.setState({ pictureUrl });
		this.toggleModal();
	};
	toggleModal = () => {
		this.setState(prevState => ({ isOpen: !prevState.isOpen }));
	};

	render() {
		const { images, status, isOpen, pictureUrl, hits } = this.state;
		const { pending, fulfilled, rejected } = STATUS;
		return (
			<StyledApp>
				<Searchbar onChangeQuery={this.handleChangeQuery} />
				{status === pending && <MyLoader />}
				{status === fulfilled && (
					<ImageGallery
						images={this.state.images}
						getCurrentPicture={this.getCurrentPicture}
					/>
				)}
				{status === rejected && (
					<h1>We did not found imageі for you request</h1>
				)}

				{hits > 12 && status === fulfilled && hits !== images.length && <Button onClick={this.moreImages} />}

				{isOpen && (
					<Modal onClose={this.toggleModal} largeImg={pictureUrl} />
				)}
			</StyledApp>
		);
	}
}
export default App;
