
import React from 'react';
// import ogimage from './assets/ogimage.png';

export default function HeaderComponent() {
  return (
    <div className="w-full max-w-[700px] mx-auto flex justify-between items-center border-b">
      <div className="flex items-center space-x-3">
        <img
          src="https://www.alayastays.com/assets/images/icons/png/ogimage.png"
          alt="Company Logo"
          className="h-36 w-36 object-contain"
        />
        <div>
          <h1 className="font-bold text-[13px]">Ishanee Villas Tech Private Limited</h1>
          <p className="text-[10px] leading-[1.3] font-bold text-left">
            CTA252, The Crest, <br />
            DLF 5, <br />
            Park Drive, <br />
            Gurugram Haryana 122011, <br />
            India
          </p>
          <p className="text-[10px] font-medium mt-0.5 text-left">GSTIN 06AAGCI9865C1ZD</p>
        </div>
      </div>
      <div className="ml-8">
        <h1 className="text-lg font-bold">TAX INVOICE</h1>
      </div>
    </div>
  );
}
