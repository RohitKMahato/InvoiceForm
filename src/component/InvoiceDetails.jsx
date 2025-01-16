
// import React from 'react';

// export default function InvoiceDetails() {
//   return (
//     <div className="flex justify-between text-xs border border-gray-300">
//       {/* Left Section */}
//       <div className="p-3 space-y-1">
//         <div className="flex">
//           <span className="text-gray-600">Invoice No.</span>
//           <span className="ml-1 font-bold">: IVHR/24-25/513</span>
//         </div>
//         <div className="flex">
//           <span className="text-gray-600">Invoice Date</span>
//           <span className="ml-1 font-bold">: 30/09/2024</span>
//         </div>
//         <div className="flex">
//           <span className="text-gray-600 ">Terms</span>
//           <span className="ml-1 font-bold">: Due on Check-in</span>
//         </div>
//         <div className="flex">
//           <span className="text-gray-600">Due Date</span>
//           <span className="ml-1 font-bold">: 30/09/2024</span>
//         </div>
//       </div>

//       {/* Vertical Divider */}
//       <div className="border-l border-gray-300"></div>

//       {/* Right Section */}
//       <div className="p-3">
//         <div className="flex">
//           <span className="text-gray-600">Place of Supply</span>
//           <span className="ml-1 font-bold">: Goa (30)</span>
//         </div>
//       </div>
//     </div>
//   );
// }

















import React, { useState } from 'react'

export default function InvoiceDetails() {
  const [invoiceNumber, setInvoiceNumber] = useState('IVHR/24-25/513')
  const [invoiceDate, setInvoiceDate] = useState('2024-09-30')
  const [terms, setTerms] = useState('Due on Check-in')
  const [dueDate, setDueDate] = useState('2024-09-30')
  const [placeOfSupply, setPlaceOfSupply] = useState('Goa (30)')

  return (
    <div className="flex justify-between text-xs p-4 text-left leading-[0.6]">
      {/* Left Section */}
      <div className="w-1/2 space-y-2 ">
        <div className="flex items-center ">
          <label htmlFor="invoice-number" className="text-gray-600 w-24 ">Invoice No.</label>
          <input
            id="invoice-number"
            type="text"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            className="ml-1 font-bold flex-1 border  px-2 py-1 "
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="invoice-date" className="text-gray-600 w-24">Invoice Date</label>
          <input
            id="invoice-date"
            type="date"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
            className="ml-1 font-bold flex-1 border  px-2 "
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="terms" className="text-gray-600 w-24">Terms</label>
          <input
            id="terms"
            type="text"
            value={terms}
            onChange={(e) => setTerms(e.target.value)}
            className="ml-1 font-bold flex-1 border  px-2"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="due-date" className="text-gray-600 w-24">Due Date</label>
          <input
            id="due-date"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="ml-1 font-bold flex-1 border  px-2 py-1"
          />
        </div>
      </div>

      {/* Vertical Divider */}
      {/* <div className="border-l "></div> */}

      {/* Right Section */}
      <div className="w-1/2 space-y-2 pl-4">
        <div className="flex items-center">
          <label htmlFor="place-of-supply" className="text-gray-600 w-32">Place of Supply</label>
          <input
            id="place-of-supply"
            type="text"
            value={placeOfSupply}
            onChange={(e) => setPlaceOfSupply(e.target.value)}
            className="ml-1 font-bold flex-1 border  px-2 py-1"
          />
        </div>
      </div>
    </div>
  )
}