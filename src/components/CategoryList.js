import React from 'react';

export default function CategoryList() {
  return (
    <div className="p-5">
      <nav className="bg-white p-4 flex justify-between items-center">
        <div>
          <div className="text-gray-800 text-lg font-semibold">Product Category list</div>
          <div className="text-gray-600 text-sm">View/Search product Category</div>
        </div>
        <button className="flex items-center bg-orange-400 text-white text-lg hover:bg-gray-800 py-2 px-4 rounded-lg shadow-md">
          <span className="font-semibold text-xl mr-1">+</span> Add Category
        </button>
      </nav>
      <div className='shadow-xl p-10 mr-5 h-96 overflow-visible'>
      yetachgnawun sra ezignawu dev lay sra <span className="font-semibold text-xl mr-1">anchi yekok merek
      </span> 
      </div>
    </div>
  );
}
