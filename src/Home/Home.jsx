import React, { useEffect } from 'react'
import '../App.css'
import Header from './../../containers/header/header';
import Brand from './../../components/brand/brand';
import Loading from './../../components/Loader/Loader.jsx';
const Home = () => {
    const [Loader, setLoader] = React.useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    })

    return (
        (
            Loader ? (<Loading />) :
                (
                    <div >
                        <div className="gradient_bg">
                            <Header />
                        </div>

                        <div >
                            <Brand />
                        </div>
                    </div>
                )
        )
    )
}

export default Home
