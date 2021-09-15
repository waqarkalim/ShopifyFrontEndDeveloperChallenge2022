import React, { Fragment, ReactElement } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageCard from "./../ImageCard";

import "./styles.scss";

type Props = {
    isLoading: boolean;
    images: any[]
}

const DisplayGrid = ({ isLoading, images }: Props): ReactElement => {
    return (
        <Fragment>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <div className="grid">
                    {images.map((image: any, index: number) => (
                        <ImageCard key={index} image={image} />
                    ))}
                </div>
            )}
        </Fragment>
    );
}

export default DisplayGrid;
