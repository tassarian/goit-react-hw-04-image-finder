import { handleFetch } from 'services/PixabayApi';
import { Container, Section } from './Global.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Blocks } from 'react-loader-spinner';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

const { Component } = require('react');

class App extends Component {
	state = {
		images: [],
		query: '',
		page: 1,
		imgPerPage: 12,
		isOpen: false,
		isLoading: false,
		totalPages: null,
		modal: {
			largeImg: '',
			tags: '',
		},
	};

	async componentDidMount() {
		try {
			this.setState({
				isLoading: true,
			});
			const result = await handleFetch(
				'',
				this.state.page,
				this.state.imgPerPage
			);

			this.setState({
				images: [...result.hits],

				isLoading: false,
			});
		} catch (error) {
			console.log(error);
		}
	}

	async componentDidUpdate(_, prevState) {
		if (
			prevState.query !== this.state.query ||
			prevState.page !== this.state.page
		) {
			try {
				this.setState({
					isLoading: true,
				});
				const result = await handleFetch(
					this.state.query,
					this.state.page,
					this.state.imgPerPage
				);
				if (prevState.query !== this.state.query) {
					this.setState({
						images: [...result.hits],
						totalPages: Math.ceil(
							result.totalHits / this.state.imgPerPage
						),
						isLoading: false,
					});
				} else {
					this.setState(prevState => ({
						images: [...prevState.images, ...result.hits],
						isLoading: false,
					}));
				}
			} catch (error) {
				console.log(error.message);
			}
		}
	}

	handleSubmit = query => {
		this.setState({ query, page: 1 });
	};

	handleAddPage = () => {
		if (this.state.page < this.state.totalPages) {
			this.setState(prevState => ({ page: prevState.page + 1 }));
		}
	};

	toggleModal = (img, tags) => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen,
			modal: {
				largeImg: img,
				tags,
			},
		}));
	};

	render() {
		return (
			<>
				<Container>
					<Searchbar action={this.handleSubmit} />

					{this.state.isLoading ? (
						<Section h="max-content" w="max-content" m="250px auto">
							<Blocks
								visible={true}
								height="80"
								width="80"
								ariaLabel="blocks-loading"
								wrapperStyle={{}}
								wrapperClass="blocks-wrapper"
							/>
						</Section>
					) : (
						<Section>
							<ImageGallery
								action={this.toggleModal}
								images={this.state.images}
							/>
							{this.state.totalPages > this.state.page && (
								<Button action={this.handleAddPage} />
							)}
						</Section>
					)}
				</Container>
				{this.state.isOpen && (
					<Modal
						action={this.toggleModal}
						tags={this.state.modal.tags}
						img={this.state.modal.largeImg}
					/>
				)}
			</>
		);
	}
}

export default App;
