import { ReactElement, useEffect, useState } from 'react';
import moment from 'moment';
import { AxiosResponse } from 'axios';

import DisplayGrid from './../DisplayGrid';

import { client as API, handleError } from './../../api';
import { API_URL, API_KEY, SHOPIFY_IS_AWESOME } from './../../constants';

import { Image, TImageList } from './../../types';

import store from './../../storage';

import './styles.scss';

type Props = {
	startDate: string;
	clicker: number;
};

const VIDEO_MEDIA_TYPE: string = 'video';

/**
 * @description The ImageContainer component is a component for fetching the images from NASA's API before displaying them. (Employs the Container Component Pattern to separate the logic and the view)
 */
const ImageContainer = ({ startDate, clicker }: Props): ReactElement => {
	const [images, setImages] = useState<TImageList>([]);
	const [isLoading, setLoading] = useState<boolean>(false);

	const endDate: string = moment().format('YYYY-MM-DD');

	useEffect(() => {
		// If like status for each of the liked images is NOT stored in local storage, repopulate local storage with the like information stored in the props
		if (!store.get(SHOPIFY_IS_AWESOME))
			store.set(
				SHOPIFY_IS_AWESOME,
				images.reduce((acc: Record<string, boolean>, curr: Image) => {
					if (curr.isLiked) {
						acc[curr.imageUrl] = curr.isLiked;
					}
					return acc;
				}, {})
			);
	}, [images]);

	// Initiating fetching whenever the pull images button is pressed
	useEffect(() => {
		fetchImages();
	}, [clicker]);

	// Fetching images from NASA API, timeout set to 10 seconds
	const fetchImages = (): void => {
		setLoading(true);
		const URL: string = `${API_URL}?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}&thumbs=true`;

		API.get<TImageList>(URL)
			.then((response: AxiosResponse<any>) => {
				setImages(processImages(response.data));
			})
			.catch((err: any) => {
				const error: Error = handleError(err);

				if (error.message) alert(error.message);
				else alert(`Error occurred while fetching images.`);

				setImages([]);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	// Retrieving the appropriate image url for each image object (for the case where the media type is video and so the url property points to a video and not an image)
	const processImages = (images: TImageList): TImageList => {
		return images.map((image: Image, index: number): Image => {
			const { media_type, thumbnail_url, url } = image;

			// As the API does not return any unique id for each image and the code is only using the id for accessiblity purposes, we are considering the array index as our unique id
			const id: number = index;

			// If media_type is video and thumbnail exists and then assign the video thumbnail as the display image
			const imageUrl: string =
				media_type === VIDEO_MEDIA_TYPE && thumbnail_url !== ''
					? thumbnail_url
					: url;

			const isLiked: boolean = store.get(SHOPIFY_IS_AWESOME)[imageUrl] || false;

			return { ...image, ...{ id: id, imageUrl: imageUrl, isLiked: isLiked } };
		});
	};

	return (
		<DisplayGrid images={images} isLoading={isLoading} setImages={setImages} />
	);
};

export default ImageContainer;
