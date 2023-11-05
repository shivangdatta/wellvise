import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaList, FaCog, FaInfoCircle, FaRobot } from 'react-icons/fa';
import { CgCommunity } from 'react-icons/cg';

const navigation = [
  { name: 'Community', to: '/', current: false },
  { name: 'Services', to: '/', current: false },
  { name: 'Plans', to: '/Plans', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <nav
      className="fixed w-full z-20 top-0 left-0"
      style={{
        backdropFilter: 'blur(10px)', // Apply the backdrop filter for the blurred effect
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black background
      }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Wellvise</span>
        </Link>
        <div className="flex md:order-2">
          {/* ... Rest of your code ... */}
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white ' : 'text-white hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-lg font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <div className="flex">
                    {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
