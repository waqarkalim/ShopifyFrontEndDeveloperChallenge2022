import React, { Fragment, ReactElement, useEffect, useState } from "react";
import moment from "moment";
import { AxiosResponse } from "axios";

import DisplayGrid from "./../DisplayGrid"

import API from "./../../api";
import { API_URL, API_KEY } from "./../../constants";

import "./styles.scss";

type Props = {
    startDate: string;
    clicker: number
}

const ImageContainer = ({ startDate, clicker }: Props): ReactElement => {
    const [images, setImages] = useState<any[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    const endDate: string = moment().format("YYYY-MM-DD");

    useEffect(() => {
        fetchImages();
    }, [clicker])

    // Fetching images from NASA API, timeout set to 10 seconds
    const fetchImages = (): void => {
        setLoading(true);
        const URL: string = `${API_URL}?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}&thumbs=true`;
        API
            .get(URL)
            .then((response: AxiosResponse<any>) => {
                setImages(processImages(response.data));
            })
            .catch((err: any) => {
                console.log(err);
                alert(`Error occurred while fetching images. Please try again!`);
                setImages([]);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    // Retrieving the appropriate image url for each image object (for the case where the media type is video and so the url property points to a video and not an image)
    const processImages = (images: any[]): any[] => {
        return images.map((image: any): void => {
            const { media_type, thumbnail_url, url } = image;

            // If media_type is video and then assign the video thumbnail as the display image
            const imageUrl = (media_type === "video" && thumbnail_url !== "") ? thumbnail_url : url;

            return { ...image, ...{ imageUrl: imageUrl } };
        })
    }

    return <DisplayGrid images={images} isLoading={isLoading} />
}

export default ImageContainer
