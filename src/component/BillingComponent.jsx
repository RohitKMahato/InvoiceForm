


import React, { useState } from 'react';

const BillingComponent = () => {
  const [companyDetails, setCompanyDetails] = useState({
    name: 'Rakesh Kumar Sharma',
    address: 'F No. A-803, GH-98, SECTOR 54, GURGAON, Gurugram, Haryana, 122002  Haryana India',
    gstin: '30AAGCI9865C1ZM',
  });

  const handleInputChange = (field, value) => {
    setCompanyDetails({
      ...companyDetails,
      [field]: value,
    });
  };

  return (
    <div className=" text-black ">
      {/* Bill To Header */}
      <div className="border-b border-gray-300 px-3 text-[12px] font-bold text-left leading-snug bg-gray-200 print-bg">
        Bill To
      </div>

      {/* Company Details */}
      <div className="px-3 space-y-0 text-[12px] leading-tight text-left">
        <div className="flex items-center space-x-1 font-bold">
          <label className="font-bold w-1/6">Name:</label>
          <input
            type="text"
            value={companyDetails.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="p-0 text-[12px] w-5/6 outline-none"
          />
        </div>
        <div className="flex items-center space-x-1">
          <label className="font-bold w-1/6">Address:</label>
          <input
            type="text"
            value={companyDetails.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className="p-0.5 text-[12px] w-5/6 outline-none"
          />
        </div>
        <div className="flex items-center space-x-1">
          <label className="font-bold w-1/6">GSTIN:</label>
          <input
            type="text"
            value={companyDetails.gstin}
            onChange={(e) => handleInputChange('gstin', e.target.value)}
            className="p-0.5 text-[12px] w-3/4 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default BillingComponent;




