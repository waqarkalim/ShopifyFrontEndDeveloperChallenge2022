import React, { ReactElement, useEffect, useState } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import "./styles.scss"

import store from "./../../storage";

interface Props {
    key: number;
    image: any;
}

const ImageCard = ({ key, image }: Props): ReactElement => {
    const [isExpanded, setExpanded] = useState<boolean>(false);
    const [isLiked, setLiked] = useState<boolean>(store.get(image.imageUrl) || false);

    const { date, title, imageUrl, explanation } = image;
   
    useEffect(() => {
        store.set(imageUrl, isLiked);
    }, [isLiked])

    const toggleLiked = (): void => {
        setLiked(!isLiked);
    }

    const toggleExpanded = (): void => {
        setExpanded(!isExpanded);
    }

    return (
        <div key={key} className="image-card">
            <div>
                <p className="image-title">{title}</p>
                <p className="image-date">{date}</p>
            </div>
            <img alt={title} src={imageUrl} className="image-media" />
            <div className="btn-section">
                <div>
                    <button className="like-btn" onClick={toggleLiked}>
                        {isLiked ? <FavoriteIcon className="liked-btn"/> : <FavoriteBorderIcon />}
                    </button>
                </div>
                <div>
                    <button className="expand-btn" onClick={toggleExpanded}>
                        <ExpandMoreIcon className={`expand ${isExpanded ? "expand-open" : ""}`} />
                    </button>
                </div>
            </div>
            {isExpanded && <div className="image-description">{explanation}</div>}
        </div>
    )

}

export default ImageCard
