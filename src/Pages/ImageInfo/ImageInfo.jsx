import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../../components/Loader/Loader';

import './ImageInfo.css';
const ImageInfo = () => {
    const { albumId, id } = useParams();
    const [imageData, setImageData] = useState(null);
    const [relatedImages, setRelatedImages] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
                const jsonWalaData = await response.json();
                setImageData(jsonWalaData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);



    useEffect(() => {
        const fetchRelatedImages = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
                const jsonWalaData = await response.json();
                setRelatedImages(jsonWalaData.slice(0, 5)); // Limiting to first 5 related images
            } catch (error) {
                console.error('Error fetching related images:', error);
            }
        };

        fetchRelatedImages();
    }, [albumId]);

    return (
        <div className='Container'>
            {imageData ? (

                <ul class="cards">
                    <li>
                        <a href="" class="card">
                            <img src={imageData.url} class="card__image" alt="" />
                            <div class="card__overlay">
                                <div class="card__header">
                                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                    <div class="card__header-text">
                                        <h3 class="card__title">{imageData.title}</h3>
                                        <span class="card__status">{imageData.albumId}</span>
                                    </div>
                                </div>
                                <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                            </div>
                        </a>
                    </li>



                    <h1>Related Images</h1>
                    {relatedImages.map((image) => (
                        <li key={image.id}>
                            <Link to={`/imageinfo/${image.albumId}/${image.id}`} className="card">
                                <img src={image.thumbnailUrl} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <div className="card__header-text">
                                            <h3 className="card__title">{image.title}</h3>
                                            <span className="card__status">{image.id}</span>
                                        </div>
                                    </div>
                                    <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                                </div>
                            </Link>
                        </li>
                    ))}

                </ul>
            ) : (
                <div>
                    <Loading />
                </div>
            )}
        </div>
    );
};

export default ImageInfo;
