




// import React, { useState } from 'react';

// export default function InvoiceDetails() {
//   const [invoiceNumber, setInvoiceNumber] = useState('IVHR/24-25/513');
//   const [invoiceDate, setInvoiceDate] = useState('2024-09-30');
//   const [terms, setTerms] = useState('Due on Check-in');
//   const [dueDate, setDueDate] = useState('2024-09-30');
//   const [placeOfSupply, setPlaceOfSupply] = useState('Goa (30)');
//   const [bookingNumber, setBookingNumber] = useState('30832403793');

//   return (
//     <div className="flex justify-between text-xs p-[4px] pl-[12px] text-left ">
//       {/* Left Section */}
//       <div className="w-1/2 space-y-0">
//         <div className="flex items-center">
//           <label htmlFor="invoice-number" className="text-gray-600 w-24">Invoice No.</label>
//           <input
//             id="invoice-number"
//             type="text"
//             value={invoiceNumber}
//             onChange={(e) => setInvoiceNumber(e.target.value)}
//             className="ml-1 font-bold flex-1 px-2 rounded "
//           />
//         </div>
//         <div className="flex items-center">
//           <label htmlFor="invoice-date" className="text-gray-600 w-24">Invoice Date</label>
//           <input
//             id="invoice-date"
//             type="date"
//             value={invoiceDate}
//             onChange={(e) => setInvoiceDate(e.target.value)}
//             className="ml-1 font-bold flex-1 px-2 rounded"
//           />
//         </div>
//         <div className="flex items-center">
//           <label htmlFor="terms" className="text-gray-600 w-24">Terms</label>
//           <input
//             id="terms"
//             type="text"
//             value={terms}
//             onChange={(e) => setTerms(e.target.value)}
//             className="ml-1 font-bold flex-1 px-2 rounded"
//           />
//         </div>
//         <div className="flex items-center">
//           <label htmlFor="due-date" className="text-gray-600 w-24">Due Date</label>
//           <input
//             id="due-date"
//             type="date"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//             className="ml-1 font-bold flex-1 px-2 rounded"
//           />
//         </div>
//         <div className="flex items-center">
//           <label htmlFor="booking-id" className="text-gray-600 w-24">Booking ID #</label>
//           <input
//             id="booking-id"
//             type="text"
//             value={bookingNumber}
//             onChange={(e) => setBookingNumber(e.target.value)}
//             className="ml-1 font-bold flex-1 px-2 rounded"
//           />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-1/2 space-y-0 pl-4">
//         <div className="flex items-start">
//           <label htmlFor="place-of-supply" className="text-gray-600 w-32">Place of Supply</label>
//           <textarea
//             id="place-of-supply"
            
//             value={placeOfSupply.startsWith(":") ? placeOfSupply : `: ${placeOfSupply}`} 
//             onChange={(e) => setPlaceOfSupply(e.target.value)}
//             className="w-full focus:outline-none resize-none whitespace-pre-wrap overflow-hidden min-h-[80px] leading-tight font-bold mr-1"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }






import React, { useState } from "react";

export default function InvoiceDetails() {
  const [invoiceNumber, setInvoiceNumber] = useState(": IVHR/24-25/513");
  const [invoiceDate, setInvoiceDate] = useState(":2024-09-30");
  const [terms, setTerms] = useState(": Due on Check-in");
  const [dueDate, setDueDate] = useState("2024-09-30");
  const [placeOfSupply, setPlaceOfSupply] = useState(": Goa (30)");
  const [bookingNumber, setBookingNumber] = useState(": 30832403793");

  // Helper function to ensure `:` is always at the start
  const ensurePrefix = (value) => (value.startsWith(":") ? value : `: ${value}`);

  return (
    <div className="flex justify-between text-xs p-[4px] pl-[12px] text-left">
      {/* Left Section */}
      <div className="w-1/2 space-y-0">
        <div className="flex items-center">
          <label htmlFor="invoice-number" className="text-gray-600 w-24">Invoice No.</label>
          <input
            id="invoice-number"
            type="text"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(ensurePrefix(e.target.value))}
            className="ml-1 font-bold flex-1 px-2 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="invoice-date" className="text-gray-600 w-24">Invoice Date</label>
          <input
            id="invoice-date"
            type="date"
            value={dueDate} // No `:` for dates
            onChange={(e) => setInvoiceDate(e.target.value)}
            className="ml-1 font-bold flex-1 px-2 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="terms" className="text-gray-600 w-24">Terms</label>
          <input
            id="terms"
            type="text"
            value={terms}
            onChange={(e) => setTerms(ensurePrefix(e.target.value))}
            className="ml-1 font-bold flex-1 px-2 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="due-date" className="text-gray-600 w-24">Due Date</label>
          <input
            id="due-date"
            type="date"
            value={dueDate} // No `:` for dates
            onChange={(e) => setDueDate(e.target.value)}
            className="ml-1 font-bold flex-1 px-2 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="booking-id" className="text-gray-600 w-24">Booking ID #</label>
          <input
            id="booking-id"
            type="text"
            value={bookingNumber}
            onChange={(e) => setBookingNumber(ensurePrefix(e.target.value))}
            className="ml-1 font-bold flex-1 px-2 rounded"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 space-y-0 pl-4">
        <div className="flex items-start">
          <label htmlFor="place-of-supply" className="text-gray-600 w-32">Place of Supply</label>
          <textarea
            id="place-of-supply"
            value={placeOfSupply}
            onChange={(e) => setPlaceOfSupply(ensurePrefix(e.target.value))}
            className="w-full focus:outline-none resize-none whitespace-pre-wrap overflow-hidden min-h-[80px] leading-tight font-bold mr-1"
          />
        </div>
      </div>
    </div>
  );
}
