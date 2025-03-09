import React from "react";
import "animate.css/animate.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Animate = () => {
    const handleClick = () => {
        toast.success("Welcome! Let's get started.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
            <ToastContainer />
            {/* Logo Section */}
            <div className="mb-6">
                <img src="https://i.ibb.co/dsTBLcxK/3271236-481602-PH02-WC-347.jpg" alt="Company Logo" className="w-20 h-20 rounded-full" />
            </div>
            
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
                    Innovate. Build. Scale.
                </h1>
                <p className="text-xl text-gray-300 animate__animated animate__fadeInUp animate__delay-1s">
                    We deliver cutting-edge software solutions for your business.
                </p>
            </div>

            {/* Services Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate__animated animate__fadeInLeft animate__delay-2s">
                    <h2 className="text-2xl font-bold mb-4">Custom Software Development</h2>
                    <p className="text-gray-300">Tailored solutions to meet your unique business needs.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-2s">
                    <h2 className="text-2xl font-bold mb-4">Cloud Solutions</h2>
                    <p className="text-gray-300">Scalable and secure cloud infrastructure for your applications.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate__animated animate__fadeInRight animate__delay-2s">
                    <h2 className="text-2xl font-bold mb-4">AI & Machine Learning</h2>
                    <p className="text-gray-300">Harness the power of AI to drive innovation and efficiency.</p>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center animate__animated animate__fadeInUp animate__delay-3s">
                <button 
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    onClick={handleClick}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Animate;
