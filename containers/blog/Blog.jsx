import React, { useEffect, useState } from 'react'
import './Blog.css'
import Loading from '../../components/Loader/Loader';
const Blog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch(error => console.error('Error:', error));
  }, [])
  console.log(data);
  return (
    <div>
      {< div className='box-container'>
        data ? ({

          data.map((item) => (

            <div className="box">
              <div className="box-icon"><img height={42} src="../../assets/interiit.jpg" /></div>
              <div className="box-label">{item.id} </div>
              <div className="box-title">

                ✨</div>
              <div className="box-image">
               
                <img src={item.url} alt="image" />
              </div>
              <div className="studio-button">
                <div className="studio-button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={12} r={10} /></svg>
                </div>
                <div className="studio-button-label">
                  Open
                </div>
              </div>
            </div>

          ))

        }
        )

        : (
        <Loading />
        )
      </div>
      }
    </div >

  )
}

export default Blog