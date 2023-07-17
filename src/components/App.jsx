import { handleFetch } from 'services/PixabayApi';
import { Container, Section } from './Global.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Blocks } from 'react-loader-spinner';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { useEffect, useRef, useState } from 'react';

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	const imgPerPage = 12;
	const [images, setImages] = useState([]);
	const [query, setQuery] = useState('');
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [totalPages, setTotalPages] = useState(null);
	const [modalData, setModalData] = useState({
		img: '',
		tags: '',
	});
	const isFirstLoad = useRef(true);

	useEffect(() => {
		if (isFirstLoad.current) {
			return;
		}
		setIsLoading(true);
		handleFetch('', page, imgPerPage)
			.then(result => {
				setTotalPages(result.totalHits / imgPerPage);
				if (page > 1) {
					setImages(prevState => [...prevState, ...result.hits]);
				} else {
					setImages(result.hits);
				}
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [page, imgPerPage]);

	useEffect(() => {
		setIsLoading(true);
		handleFetch(query, page, imgPerPage)
			.then(result => {
				setTotalPages(result.totalHits / imgPerPage);
				if (page > 1) {
					setImages(prevState => [...prevState, ...result.hits]);
				} else {
					setImages(result.hits);
				}
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [page, query]);

	const handleSubmit = query => {
		setQuery(query);
		setPage(1);
	};

	const handleAddPage = () => {
		if (page < totalPages) {
			setPage(prevState => prevState + 1);
		}
	};

	const toggleModal = (img, tags) => {
		setModalData({
			img,
			tags,
		});
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<Container>
				<Searchbar action={handleSubmit} />

				{isLoading ? (
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
						<ImageGallery action={toggleModal} images={images} />
						{totalPages > page && <Button action={handleAddPage} />}
					</Section>
				)}
			</Container>
			{isOpen && <Modal close={closeModal} data={modalData} />}
		</>
	);
};

export default App;
