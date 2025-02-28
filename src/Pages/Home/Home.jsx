import PropTypes from 'prop-types';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Estate from '../Estate/Estate';
import Footer from '../Shared/Footer/Footer';

const Home = ({ estates }) => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Estate estates={estates} />
            <Footer></Footer>
        </div>
    );
};

// Define PropTypes
Home.propTypes = {
    estates: PropTypes.array.isRequired
};

export default Home;
