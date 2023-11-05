import React, { useEffect, useState } from 'react';
import { BsGlobe2 } from 'react-icons/bs';
import { FaHandshake, FaGlobeAsia } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdVolunteerActivism, MdOutlineEventAvailable, MdGroups2 } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Number() {
  const [numinc1, setNuminc1] = useState(0);
  const [numinc2, setNuminc2] = useState(0);
  const [numinc3, setNuminc3] = useState(0);
  const [numinc4, setNuminc4] = useState(0);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (numinc1 < 1000) {
        setNuminc1((prevValue) => prevValue + 10);
      }
      if (numinc2 < 50) {
        setNuminc2((prevValue) => prevValue + 1);
      }
      if (numinc3 < 150) {
        setNuminc3((prevValue) => prevValue + 2);
      }
      if (numinc4 < 200) {
        setNuminc4((prevValue) => prevValue + 3);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [numinc1, numinc2, numinc3, numinc4]);

  return (
    <div>
      <div className="flex justify-center mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          <div data-aos="flip-left" className="rounded-lg bg-gray-700">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <p className="text-base text-center text-white lg:text-xl sm:text-2xl" id="numinc1">
                  {numinc1}+
                </p>
                <div className="font-bold lg:text-3xl text-center text-white sm:text-xl">Connected</div>
              </div>
            </div>
          </div>

          <div data-aos="flip-right" className="rounded-lg bg-gray-700">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <p className="text-base text-center text-white lg:text-xl sm:text-2xl" id="numinc2">
                  {numinc2}+
                </p>
                <div className="font-bold lg:text-3xl text-center text-white sm:text-xl">Cities</div>
              </div>
            </div>
          </div>

          <div data-aos="flip-right" className="rounded-lg bg-gray-700">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <p className="text-base text-center text-white lg:text-xl sm:text-2xl" id="numinc3">
                  {numinc3}+
                </p>
                <div className="font-bold lg:text-3xl text-center text-white sm:text-xl">Events</div>
              </div>
            </div>
          </div>

          <div data-aos="flip-right" className="rounded-lg bg-gray-700">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <p className="text-base text-center text-white lg:text-xl sm:text-2xl" id="numinc4">
                  {numinc4}+
                </p>
                <div className="font-bold lg:text-3xl text-center text-white sm:text-xl">Volunteers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
