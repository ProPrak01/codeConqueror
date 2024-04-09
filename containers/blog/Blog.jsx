import React, { useEffect, useState } from 'react'
import './Blog.css'
import Loading from '../../components/Loader/Loader';
import { Link } from 'react-router-dom';
const Blog = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const jsonWalaData = await response.json();
        setData(jsonWalaData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // console.log(data);
  return (
    <div className='Container'>

      <ul class="cards">
        {
          data ? (
            data.map((item) => {
              return (

                <li>
                  <a href="" class="card">
                    <Link to={`/imageinfo/${item.albumId}/${item.id}`} >
                      <img src={item.thumbnailUrl} class="card__image" alt="" />
                    </Link>
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                        <div class="card__header-text">
                          <h3 class="card__title">{item.title}</h3>
                          <span class="card__status">{item.albumId}</span>
                        </div>
                      </div>
                      <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                  </a>
                </li>


              )
            })
          ) : (
            <Loading />
          )
        }
      </ul>
    </div>

  )
}

export default Blog