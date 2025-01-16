
import React from 'react';

export default function InvoiceDetails() {
  return (
    <div className="flex justify-between text-xs border border-gray-300">
      {/* Left Section */}
      <div className="p-3 space-y-1">
        <div className="flex">
          <span className="text-gray-600">Invoice No.</span>
          <span className="ml-1 font-bold">: IVHR/24-25/513</span>
        </div>
        <div className="flex">
          <span className="text-gray-600">Invoice Date</span>
          <span className="ml-1 font-bold">: 30/09/2024</span>
        </div>
        <div className="flex">
          <span className="text-gray-600 ">Terms</span>
          <span className="ml-1 font-bold">: Due on Check-in</span>
        </div>
        <div className="flex">
          <span className="text-gray-600">Due Date</span>
          <span className="ml-1 font-bold">: 30/09/2024</span>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="border-l border-gray-300"></div>

      {/* Right Section */}
      <div className="p-3">
        <div className="flex">
          <span className="text-gray-600">Place of Supply</span>
          <span className="ml-1 font-bold">: Goa (30)</span>
        </div>
      </div>
    </div>
  );
}
