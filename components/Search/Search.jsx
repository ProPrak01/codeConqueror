import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loader/Loader';

const Search = ({ data, search }) => {
    const [searchKey, setSearchKey] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        setSearchKey(e.target.value);
        setSearchResults(data.filter(obj => obj.title.toLowerCase().includes(searchKey.toLowerCase())));
    };
    return (
        <div className='Container'>
            <ul className="cards">
                {data ? (
                    data
                        .filter(obj => obj.title.toLowerCase().includes(search.toLowerCase()))
                        .map(item => (
                            <li key={item.id}>
                                {item.title === search && ( // Conditionally render the anchor element
                                    <a href="" className="card">
                                        <Link to={`/imageinfo/${item.albumId}/${item.id}`}>
                                            <img src={item.thumbnailUrl} className="card__image" alt="" />
                                        </Link>
                                        <div className="card__overlay">
                                            <div className="card__header">
                                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                                <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                                <div className="card__header-text">
                                                    <h3 className="card__title">{item.title}</h3>
                                                    <span className="card__status">{item.albumId}</span>
                                                </div>
                                            </div>
                                            <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                                        </div>
                                    </a>
                                )}
                            </li>
                        ))
                ) : (
                    <Loading />
                )}
            </ul>
        </div>
    );
};

export default Search;
