import React from 'react'

export default function heading() {
  return (
    <section className="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/group-senior-retirement-friends-happiness-concept_53876-29490.jpg?size=626&ext=jpg&ga=GA1.1.1952382529.1699128604&semt=ais')" }}>

    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
      Age is celebrated, <br/> wisdom is cherished, <br/> every story is a masterpiece
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
      Because those responsible for bringing us into this world should be able to enjoy the process of aging gracefully in the familiar surroundings of their own homes.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a
          href="#"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Connect with Us
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          href="#"
          className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
        >
          Learn about Us
        </a>
      </div>
    </div>
  </section>
  )
}