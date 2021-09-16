import { ReactElement, useEffect, useState } from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './styles.scss';

import store from './../../storage';

import { SHOPIFY_IS_AWESOME } from './../../constants';

type Props = {
	image: any;
};

/**
 * @description The ImageCard component is a component for displaying the information about each image
 *
 * @param {object} image
 * @returns ReactElement
 */
const ImageCard = ({ image }: Props): ReactElement => {
	const [isExpanded, setExpanded] = useState<boolean>(false);

	// Checking to see if the image's like status already exists in local storage, if not, assigns it to false
	const [isLiked, setLiked] = useState<boolean>(
		store.get(SHOPIFY_IS_AWESOME)[image.imageUrl] || false
	);

	const { id, date, title, imageUrl, explanation } = image;

	useEffect(() => {
		// Changing the like status of the image in local storage
		store.set(SHOPIFY_IS_AWESOME, {
			...store.get(SHOPIFY_IS_AWESOME),
			...{ [imageUrl]: isLiked },
		});
	}, [isLiked]);

	const toggleLiked = (): void => {
		setLiked(!isLiked);
	};

	const toggleExpanded = (): void => {
		setExpanded(!isExpanded);
	};

	return (
		<div id={`image-card-${id}`} className="image-card">
			{/* Displaying the header titles of each image card */}
			<div id={`image-header-${id}`}>
				<div
					id={`image-title-${id}`}
					className="image-title"
					aria-label={title}
				>
					<p>{title}</p>
				</div>
				<div
					id={`image-date-${id}`}
					className="image-date"
					aria-label={date}
				>
					<p>{date}</p>
				</div>
			</div>

			{/* Displaying the actual image of each image card */}
			<img
				id={`image-media-${id}`}
				className="image-media"
				alt={title}
				src={imageUrl}
			/>

			{/* Displaying the like button and the expand description button for each image card */}
			<div className="btn-section">
				<div>
					<button
						type="button"
						id={`like-button-${id}`}
						className="like-btn"
						onClick={toggleLiked}
						aria-pressed={isLiked}
						aria-label="Like Button"
					>
						{isLiked ? (
							<FavoriteIcon className="liked-btn" />
						) : (
							<FavoriteBorderIcon />
						)}
					</button>
				</div>
				<div>
					<button
						type="button"
						id={`expand-button-${id}`}
						className="expand-btn"
						onClick={toggleExpanded}
						aria-expanded={isExpanded}
						aria-label="Expand Button"
						aria-controls="image-description"
					>
						<ExpandMoreIcon
							className={`expand ${
								isExpanded ? 'expand-open' : ''
							}`}
						/>
					</button>
				</div>
			</div>

			{/* The hidden image description section that can only be shown when the `expand-button-${id}` button is clicked */}
			<div
				role="region"
				id={`image-description-${id}`}
				className="image-description"
				hidden={!isExpanded}
				aria-label={explanation}
				aria-labelledby={`expand-button-${id}`}
				aria-hidden={!isExpanded}
			>
				<p>{explanation}</p>
			</div>
		</div>
	);
};

export default ImageCard;
