import { Fragment, ReactElement, useEffect, useState } from 'react';
import moment from 'moment';

import { CircularProgress } from '@material-ui/core';
import ImageCard from '../ImageCard';

import { fetchImages, handleError } from '../../api';

import { DATE_FORMAT, SHOPIFY_IS_AWESOME } from './../../constants';

import { Image } from './../../types';

import store, {
  repopulateLikeStatusInLocalStorage,
  updateLikeStatusInLocalStorage,
} from './../../storage';

import './styles.scss';

type Props = {
  startDate: string;
  clicker: number;
  setButtonDisabled: (buttonDisabled: boolean) => void;
};

const VIDEO_MEDIA_TYPE: string = 'video';

/**
 * @description The ImageContainer component is a component for fetching the images from NASA's API before displaying them. (Employs the Container Component Pattern to separate the logic and the view)
 */
const ImageContainer = ({
  startDate,
  clicker,
  setButtonDisabled,
}: Props): ReactElement => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const endDate: string = moment().format(DATE_FORMAT);

  // Whenever the images are updated, if the local storage does not contain any key for the images' like status, the local storage gets repopulated with the like information stored in the state
  useEffect(() => {
    if (!store.get(SHOPIFY_IS_AWESOME))
      repopulateLikeStatusInLocalStorage(SHOPIFY_IS_AWESOME, images);
  }, [images]);

  // Whenever the pull images button is pressed, the images are retrieved
  useEffect(() => {
    retrieveImages(startDate, endDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicker]);

  /**
   * @description The retrieveImages() function fetches the images from the API, processes those images to contain the relevant informations that we need, and then sets those images to our images state
   * @param startDate The starting date from when the API should return the images
   * @param endDate The ending date to when the API should return the images
   */
  const retrieveImages = (startDate: string, endDate: string) => {
    setButtonDisabled(true);
    setLoading(true);
    fetchImages(startDate, endDate, true)
      .then((data: Image[]) => {
        setImages(processImages(data));
      })
      .catch((err: any) => {
        const error: Error = handleError(err);

        if (error.message) alert(error.message);
        else alert(`Error occurred while fetching images.`);

        setImages([]);
      })
      .finally(() => {
        setLoading(false);
        setButtonDisabled(false);
      });
  };

  /**
   * @description The processImages() function adds a few important properties to each image object, properties such as an id property (the id to reference the image object by), an imageUrl property (the actual url pointing to the image we are going to display), and the isLiked property (the liked/unliked status of an image)
   * @param images An array of Images - images that are retrieved from the API
   * @returns An array of Images with the added relevant properties
   */
  const processImages = (images: Image[]): Image[] => {
    return images.map((image: Image, index: number): Image => {
      const { media_type, thumbnail_url, url } = image;

      // As the API does not return any unique id for each image and the code is only using the id for accessiblity purposes, we are considering the array index as our unique id
      const id: number = index;

      // Assign the video thumbnail as the display image if media_type is video and thumbnail exists, if it isn't then use url as the display image url
      const imageUrl: string =
        media_type === VIDEO_MEDIA_TYPE && thumbnail_url !== ''
          ? thumbnail_url
          : url;

      // Assigns the like status of an image from local storage, if it doesn't exist in local storage, then it defaults to false
      const isLiked: boolean = store.get(SHOPIFY_IS_AWESOME)[imageUrl] || false;

      return { ...image, ...{ id: id, imageUrl: imageUrl, isLiked: isLiked } };
    });
  };

  /**
   * @description The toggleLiked() function toggles the like status of the image in the props, as well as updates the value in local storage. If an image is liked, it is added to local storage, and if it unliked, it is removed from local storage
   * @param index The array index of the image object in the image array
   */
  const toggleLiked = (index: number): void => {
    const newArr: Image[] = [...images];

    newArr[index] = {
      ...newArr[index],
      ...{ isLiked: !newArr[index].isLiked },
    };

    if (store.get(SHOPIFY_IS_AWESOME))
      updateLikeStatusInLocalStorage(SHOPIFY_IS_AWESOME, newArr, index);

    setImages(newArr);
  };
  return (
    <Fragment>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="grid">
          {images.map((image: Image, index: number) => (
            <ImageCard key={index} image={image} toggleLiked={toggleLiked} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default ImageContainer;
