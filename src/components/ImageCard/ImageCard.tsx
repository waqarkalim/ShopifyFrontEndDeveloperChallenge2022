import React, { ReactElement, useEffect, useState } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

import './styles.scss'

import store from './../../storage'

type Props = {
	image: any
}

const ImageCard = ({ image }: Props): ReactElement => {
	const [isExpanded, setExpanded] = useState<boolean>(false)
	const [isLiked, setLiked] = useState<boolean>(
		store.get(image.imageUrl) || false
	)

	const { date, title, imageUrl, explanation } = image

	useEffect(() => {
		store.set(imageUrl, isLiked)
	}, [isLiked])

	const toggleLiked = (): void => {
		setLiked(!isLiked)
	}

	const toggleExpanded = (): void => {
		setExpanded(!isExpanded)
	}

	return (
		<div id="image-card" className="image-card">
			<div id="image-header">
				<p
					id="image-title"
					className="image-title"
					aria-label={title}
					aria-labelledby="image-header"
				>
					{title}
				</p>
				<p
					id="image-date"
					className="image-date"
					aria-label={date}
					aria-labelledby="image-header"
				>
					{date}
				</p>
			</div>
			<img
				id="image-media"
				alt={title}
				src={imageUrl}
				className="image-media"
			/>
			<div className="btn-section">
				<div>
					<button
						type="button"
						id="like-button"
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
						id="expand-button"
						className="expand-btn"
						onClick={toggleExpanded}
						aria-expanded={isExpanded}
                        aria-label="Expand Button"
					>
						<ExpandMoreIcon
							className={`expand ${
								isExpanded ? 'expand-open' : ''
							}`}
						/>
					</button>
				</div>
			</div>
			{isExpanded && (
				<div
					id="image-description"
					className="image-description"
					aria-label={explanation}
					aria-labelledby="expand-button"
				>
					{explanation}
				</div>
			)}
		</div>
	)
}

export default ImageCard
