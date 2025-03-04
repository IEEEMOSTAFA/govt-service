// import React from 'react';
// import { useParams } from 'react-router-dom';
// // import estates from '../../public/catagory.json'; // Import the estates data
// import estates from '../../../public/catagory.json'
// const PropertyDetails = () => {
//     const { id } = useParams(); // Get the property ID from the URL
//     const property = estates.find((estate) => estate.id === parseInt(id)); // Find the property by ID

//     if (!property) {
//         return (
//             <div className="flex items-center justify-center min-h-screen bg-gray-50">
//                 <div className="text-center">
//                     <h1 className="text-4xl font-bold text-gray-800">404</h1>
//                     <p className="text-xl text-gray-600 mt-4">Property not found!</p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="p-6 bg-gray-50 min-h-screen">
//             <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//                 {/* Property Image */}
//                 <img
//                     src={property.image}
//                     alt={property.estate_title}
//                     className="w-full h-96 object-cover"
//                 />

//                 {/* Property Details Section */}
//                 <div className="p-8">
//                     {/* Property Title */}
//                     <h1 className="text-4xl font-bold text-gray-800 mb-4">
//                         {property.estate_title}
//                     </h1>

//                     {/* Property Metadata */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//                         <div className="bg-gray-100 p-4 rounded-lg">
//                             <p className="text-sm text-gray-600">Price</p>
//                             <p className="text-lg font-semibold text-gray-800">${property.price}</p>
//                         </div>
//                         <div className="bg-gray-100 p-4 rounded-lg">
//                             <p className="text-sm text-gray-600">Location</p>
//                             <p className="text-lg font-semibold text-gray-800">{property.location}</p>
//                         </div>
//                         <div className="bg-gray-100 p-4 rounded-lg">
//                             <p className="text-sm text-gray-600">Status</p>
//                             <p className="text-lg font-semibold text-gray-800">{property.status}</p>
//                         </div>
//                         <div className="bg-gray-100 p-4 rounded-lg">
//                             <p className="text-sm text-gray-600">Area</p>
//                             <p className="text-lg font-semibold text-gray-800">{property.area}</p>
//                         </div>
//                     </div>

//                     {/* Property Description */}
//                     <div className="mb-6">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
//                         <p className="text-gray-600">{property.description}</p>
//                     </div>

//                     {/* Facilities Section */}
//                     <div className="mb-6">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Facilities</h2>
//                         <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                             {property.facilities.map((facility, index) => (
//                                 <li
//                                     key={index}
//                                     className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700"
//                                 >
//                                     {facility}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Call to Action Button */}
//                     <div className="text-center">
//                         <button
//                             onClick={() => alert('Contact agent for more details!')}
//                             className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
//                         >
//                             Contact Agent
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PropertyDetails;














import React from 'react';
import { useParams } from 'react-router-dom';
import estates from '../../../public/catagory.json'; // Import the estates data
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify

const PropertyDetails = () => {
    const { id } = useParams(); // Get the property ID from the URL
    const property = estates.find((estate) => estate.id === parseInt(id)); // Find the property by ID

    if (!property) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">404</h1>
                    <p className="text-xl text-gray-600 mt-4">Property not found!</p>
                </div>
            </div>
        );
    }

    // Function to handle the "Contact Agent" button click
    const handleContactAgent = () => {
        toast.success('Agent contacted successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Toast Container (only for this component) */}
            <ToastContainer />

            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Property Image */}
                <img
                    src={property.image}
                    alt={property.estate_title}
                    className="w-full h-96 object-cover"
                />

                {/* Property Details Section */}
                <div className="p-8">
                    {/* Property Title */}
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        {property.estate_title}
                    </h1>

                    {/* Property Metadata */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">Price</p>
                            <p className="text-lg font-semibold text-gray-800">${property.price}</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">Location</p>
                            <p className="text-lg font-semibold text-gray-800">{property.location}</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">Status</p>
                            <p className="text-lg font-semibold text-gray-800">{property.status}</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">Area</p>
                            <p className="text-lg font-semibold text-gray-800">{property.area}</p>
                        </div>
                    </div>

                    {/* Property Description */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
                        <p className="text-gray-600">{property.description}</p>
                    </div>

                    {/* Facilities Section */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Facilities</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {property.facilities.map((facility, index) => (
                                <li
                                    key={index}
                                    className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700"
                                >
                                    {facility}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Call to Action Button */}
                    <div className="text-center">
                        <button
                            onClick={handleContactAgent} // Use the toast function here
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                        >
                            Contact Agent
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;