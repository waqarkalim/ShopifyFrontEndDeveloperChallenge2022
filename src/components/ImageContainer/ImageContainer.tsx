import React, { Fragment, ReactElement, useEffect, useState } from "react";
import moment from "moment";
import { AxiosResponse } from "axios";

import DisplayGrid from "./../DisplayGrid"

import API from "./../../api";
import { API_URL, API_KEY } from "./../../constants";

import "./styles.scss";

interface Props {
    startDate: string;
    clicker: number
}

const ImageContainer = ({ startDate, clicker }: Props): ReactElement => {
    const [images, setImages] = useState<any[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    const endDate: string = moment().format("YYYY-MM-DD");

    useEffect(() => {
        const getItems = async () => {
            const URL: string = `${API_URL}?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}&thumbs=true`;
            
            API
                .get(URL, { timeout: 10_000 })
                .then((response: AxiosResponse<any>) => {
                    setImages(response.data);
                })
                .catch((err: any) => {
                    console.log(err);
                    alert(`Error occurred while fetching images. Please try again!`);
                    setImages([]);
                })
                .finally(() => {
                    setLoading(false);
                })

            // const URL: string = `${API_URL}?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}&thumbs=true`;

            // const results: any = await API.get(URL);

            // setImages(results.data);

            // setLoading(false);
        }
        setLoading(true);
        getItems();
    }, [clicker])

    return <DisplayGrid images={images} isLoading={isLoading} />
}

export default ImageContainer
