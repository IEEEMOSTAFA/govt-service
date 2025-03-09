




import  { useEffect, useState } from 'react';

import Navbar from '../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Estate from '../Estate/Estate';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    const [estates, setEstates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch estates data from the public directory
    useEffect(() => {
        fetch('/catagory.json') // Fetch from public directory
            .then((response) => response.json())
            .then((data) => {
                setEstates(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading estates: {error.message}</div>;
    }

    return (
        <div>
            <Navbar />
            <Banner />
            <Estate estates={estates} />
            <Footer></Footer>
        </div>
    );
};

export default Home;






// import React from "react";
// import PropTypes from "prop-types";
// import Navbar from "../Shared/Navbar/Navbar";
// import Banner from "../Banner/Banner";
// import Estate from "../Estate/Estate";
// import Footer from "../Shared/Footer/Footer";

// const Home = ({ estates }) => {
//   return (
//     <div>
//       <Navbar />
//       <Banner />
//       <Estate estates={estates} />
//       <Footer />
//     </div>
//   );
// };

// Home.propTypes = {
//   estates: PropTypes.array.isRequired,
// };

// export default Home;