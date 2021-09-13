import React, { Fragment, ReactElement, useEffect, useState } from 'react'
import { ReactComponent as Heart } from './outlined-heart.svg';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import "./styles.scss"

interface Props {
    index: number;
    image: any;
}

const ImageCard = ({ index, image }: Props): ReactElement => {
    const [isExpanded, setExpanded] = useState<boolean>(false);
    const [isLiked, setLiked] = useState<boolean>(false);
    const [imageUrl, setImageUrl] = useState<string>('');

    const { date, title, url, explanation, thumbnail_url, media_type } = image;

    useEffect(() => {
        setImageUrl(media_type === "video" ? thumbnail_url : url);
    }, [])

    useEffect(() => {
        const likedInfoFromLocalStorage: string | null = localStorage.getItem(imageUrl);

        if (likedInfoFromLocalStorage) {
            setLiked(JSON.parse(likedInfoFromLocalStorage));
        }
    }, [imageUrl])

    const handleLikeButtonClick = () => {
        localStorage.setItem(imageUrl, JSON.stringify(!isLiked));
        setLiked(!isLiked);
    }

    return (
        <div key={index} className="image-card">
            <div>
                <p className="image-title">{title}</p>
                <p className="image-date">{date}</p>
            </div>
            <img alt={title} src={imageUrl} className="image-media" />
            <div className="btn-section">
                <div>
                    {
                        isLiked ? (
                            <FavoriteIcon onClick={handleLikeButtonClick} />
                        ) : (
                            <FavoriteBorderIcon onClick={handleLikeButtonClick} />
                        )
                    }
                </div>
                <div>
                    <button className="expand-btn" onClick={() => { setExpanded(!isExpanded) }}>
                        {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </button>
                </div>
            </div>
            {isExpanded && (<div className="image-description">{explanation}</div>)}
        </div>
    )

}

export default ImageCard
