import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* grid responsive fix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* logo and about */}
          <div>
            <a href="#" className="text-3xl font-bold">
              Rahul Gr<span className="text-orange-500 uppercase">o</span>cfiy
            </a>
            <p className="text-sm text-gray-600 mt-6 max-w-[300px]">
              Bred for a high content of beneficial substances. Our products are all fresh and healthy.
            </p>
            <p className="text-sm mt-6 text-gray-700">
              © {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>

          {/* company */}
          <ul>
            <li>
              <h5 className="text-2xl font-bold">Company</h5>
            </li>
            <li className="text-sm mt-5">
              <a href="#" className="text-gray-800 hover:text-orange-500">About</a>
            </li>
            <li className="text-sm mt-3">
              <a href="#" className="text-gray-800 hover:text-orange-500">FAQ</a>
            </li>
          </ul>

          {/* support */}
          <ul>
            <li>
              <h5 className="text-2xl font-bold">Support</h5>
            </li>
            <li className="text-sm mt-5">
              <a href="#" className="text-gray-800 hover:text-orange-500">Support Contact</a>
            </li>
            <li className="text-sm mt-3">
              <a href="#" className="text-gray-800 hover:text-orange-500">Contact</a>
            </li>
            <li className="text-sm mt-3">
              <a href="#" className="text-gray-800 hover:text-orange-500">Feedback</a>
            </li>
          </ul>

          {/* connect */}
          <ul>
            <li>
              <h5 className="text-2xl font-bold mb-3">Stay Connected</h5>
            </li>
            <li>
              <p className="text-sm text-gray-700 mb-3">
                Have feedback? We’d love to hear from you.
              </p>
            </li>
            <li>
              <div className="flex items-center rounded-3xl bg-white overflow-hidden w-full max-w-[250px]">
                <input
                  type="email"
                  placeholder="Your@gmail.com"
                  className="flex-1 px-4 py-2 outline-none text-sm"
                />
                <button className="px-3 text-orange-500 text-2xl">
                  <IoIosArrowDroprightCircle />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
