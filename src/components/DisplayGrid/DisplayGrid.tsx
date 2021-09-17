import { Fragment, ReactElement } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageCard from './../ImageCard';

import { SHOPIFY_IS_AWESOME } from './../../constants';

import store from './../../storage';

import './styles.scss';

const _ = require('lodash');

type Props = {
	isLoading: boolean;
	images: any[];
	setImages: (images: any[]) => void;
};

/**
 * @description The DisplayGrid component is a component for displaying all of the images
 */
const DisplayGrid = ({ isLoading, images, setImages }: Props): ReactElement => {
	const toggleLiked = (index: number): void => {
		const newArr: any[] = [...images];

		// If an image is liked, the imageUrl is added to local storage with a true flag, else the imageUrl is removed from local storage
		if (!newArr[index].isLiked)
			store.set(SHOPIFY_IS_AWESOME, {
				...store.get(SHOPIFY_IS_AWESOME),
				...{ [newArr[index].imageUrl]: !newArr[index].isLiked },
			});
		else
			store.set(
				SHOPIFY_IS_AWESOME,
				_.omit(store.get(SHOPIFY_IS_AWESOME), newArr[index].imageUrl)
			);

		newArr[index].isLiked = !newArr[index].isLiked;

		setImages(newArr);
	};

	return (
		<Fragment>
			{isLoading ? (
				<CircularProgress />
			) : (
				<div className="grid">
					{images.map((image: any, index: number) => (
						<ImageCard key={index} image={image} toggleLiked={toggleLiked} />
					))}
				</div>
			)}
		</Fragment>
	);
};

export default DisplayGrid;
