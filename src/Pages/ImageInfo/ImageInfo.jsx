import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loader/Loader';

import './ImageInfo.css';
const ImageInfo = () => {
    const { albumId, id } = useParams();
    const [imageData, setImageData] = useState(null);

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
