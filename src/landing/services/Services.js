import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Services() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 cards at a time on large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Switch to slider on screens with a width less than 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='mt-28 justify-center items-center'>
      <Slider {...settings}>
        {/* First Card */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg ml-20 shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://media.istockphoto.com/id/1413583709/photo/cheerful-senior-having-fun-while-taking-selfie-at-retirement-community.webp?b=1&s=170667a&w=0&k=20&c=2G1_767Au663DVWrPMpDey1bkPkvQbPliKUsJRBCAfo="
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Community
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Join our community and stay connected with like-minded individuals. Together, we can make a positive impact.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Connect Now
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>

        {/* Second Card */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg ml-10 shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img
              className="rounded-t-lg"
              src="https://as1.ftcdn.net/v2/jpg/05/07/42/04/1000_F_507420448_XA4iuz9S9OIcapTy5i81ptntTdn6z2Am.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Health Services
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Discover a healthier you. Explore our range of health services for a better life, because your well-being matters.
            </p>
            <Link
                to="/Services" // Replace with the appropriate route path
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus-ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                Go
                <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
                </Link>
          </div>
        </div>

        {/* Third Card */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img
              className="rounded-t-lg"
              src="https://media.istockphoto.com/id/861129272/photo/thinking-long-and-hard-about-their-financial-options.jpg?s=612x612&w=0&k=20&c=0FZsMFlJgIMi6VGubRy3f00fD3TS_uLN1zpYKwKkaKo="
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Financial Services
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Secure your financial future with our trusted services. Your financial well-being is our utmost priority.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Go
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
}
