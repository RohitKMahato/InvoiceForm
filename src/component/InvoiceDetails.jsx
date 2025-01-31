



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