import React from 'react';

export default function AddProduct() {
  return (
    <div className="p-5">
      <nav className="bg-white p-4 flex justify-between items-center pl-20 ">
        <div>
          <div className="text-gray-800 text-lg font-semibold">Product Add</div>
          <div className="text-gray-600 text-sm">Create new product</div>
        </div>
      </nav>
      <div className='shadow-xl pl-20 mr-10 h-96 overflow-visible'> {/* Updated margin-right here */}
        <div className="flex flex-row">
          <div className="flex flex-col mb-4 mr-10">
            <label htmlFor="productName" className="text-sm font-medium text-gray-700">Product Name</label>
            <input type="text" id="productName" name="productName" className="p-2 w-55 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1" />
          </div>
          <div className="flex flex-col mb-4 mr-10">
            <label htmlFor="category" className="text-sm font-medium text-gray-700">Category</label>
            <div className="relative">
              <select id="category" name="category" className="p-2 w-55 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1 pr-8">
                <option>Select Category</option>
                {/* Add options dynamically */}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-4 mr-10">
            <label htmlFor="subCategory" className="text-sm font-medium text-gray-700">Sub Category</label>
            <select id="subCategory" name="subCategory" className="p-2 w-55 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1 mr-10">
              <option>Select Sub Category</option>
              {/* Add options dynamically */}
            </select>
          </div>
          <div className="flex flex-col mb-4 mr-10">
            <label htmlFor="brand" className="text-sm font-medium text-gray-700">Brand</label>
            <input type="text" id="brand" name="brand" className="p-2 w-55 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1 mr-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
