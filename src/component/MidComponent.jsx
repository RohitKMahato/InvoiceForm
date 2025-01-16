// import React from 'react';

// export default function MidComponent() {
//   return (
//     <div className="flex justify-between text-xs mt-4">
//       {/* Left Section */}
//       <div className="w-1/2">
//         <div className="border border-gray-300 p-3 space-y-2">
//           <div>
//             <p className="font-medium">Total In Words</p>
//             <p className="italic font-bold">Indian Rupee Thirty-Eight Lakh Sixty-Four Thousand Five Hundred Only</p>
//           </div>
          
//           <div className="border-t border-gray-300 pt-2">
//             <p className="font-medium">Notes</p>
//             <p>Thanks for your business.</p>
//           </div>
          
//           <div className="space-y-0.5">
//             <p>A/c Holder's Name : Ishanee Villas Tech Private Limited.</p>
//             <p>Bank Name : ICICI Bank Limited.</p>
//             <p>A/c No. : 114705001875.</p>
//             <p>Branch & IFSC Code : Gurgaon Sector 57 Branch & ICIC0001147.</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-1/2 ml-4">
//         <div className="space-y-1 text-right">
//           <div className="flex justify-between">
//             <span>Sub Total</span>
//             <span className="ml-8">32,75,000.00</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Total Taxable Amount</span>
//             <span className="ml-8">32,75,000.00</span>
//           </div>
//           <div className="flex justify-between">
//             <span>IGST18 (18%)</span>
//             <span className="ml-8">5,89,500.00</span>
//           </div>
//           <div className="flex justify-between font-medium">
//             <span className='font-bold'>Total</span>
//             <span className="ml-8 font-bold">₹38,64,500.00</span>
//           </div>
//           <div className="flex justify-between font-medium">
//             <span className='font-bold'>Balance Due</span>
//             <span className="ml-8 font-bold">₹38,64,500.00</span>
//           </div>
//         </div>

//         <div className="mt-8 text-center">
//           <div className="flex flex-col items-center">
//             <p>Ishanee Villas Tech Private Limited</p>
//             <img 
//               src="/api/placeholder/120/60" 
//               alt="Digital Signature"
//               className="my-2"
//             />
//             <p>Authorized Signature</p>
//             <p className="text-gray-500 text-[10px]">(DSC)</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


























import React, { useState } from 'react'

export default function MidComponent() {
  const [totalInWords, setTotalInWords] = useState('Indian Rupee Thirty-Eight Lakh Sixty-Four Thousand Five Hundred Only')
  const [notes, setNotes] = useState('Thanks for your business.')
  const [accountHolderName, setAccountHolderName] = useState('Ishanee Villas Tech Private Limited.')
  const [bankName, setBankName] = useState('ICICI Bank Limited.')
  const [accountNumber, setAccountNumber] = useState('114705001875')
  const [branchIFSCCode, setBranchIFSCCode] = useState('Gurgaon Sector 57 Branch & ICIC0001147')
  const [subTotal, setSubTotal] = useState('32,75,000.00')
  const [totalTaxableAmount, setTotalTaxableAmount] = useState('32,75,000.00')
  const [igstAmount, setIGSTAmount] = useState('5,89,500.00')
  const [total, setTotal] = useState('₹38,64,500.00')
  const [balanceDue, setBalanceDue] = useState('₹38,64,500.00')

  return (
    <div className="flex justify-between text-xs mt-4">
      {/* Left Section */}
      <div className="w-1/2">
        <div className="border border-gray-300 p-3 space-y-2">
          <div>
            <p className="font-medium text-left text-[10px]">Total In Words</p>
            <input
              type="text"
              value={totalInWords}
              onChange={(e) => setTotalInWords(e.target.value)}
              className="w-full border-none focus:outline-none italic font-bold text-[8px]"
            />
          </div>
          
          <div className="border-t border-gray-300 pt-2">
            <p className="font-medium text-left">Notes</p>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border-none focus:outline-none"
            />
          </div>
          
          <div className="space-y-0.5">
            <input
              type="text"
              value={accountHolderName}
              onChange={(e) => setAccountHolderName(e.target.value)}
              className="w-full border-none focus:outline-none"
            />
            <input
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="w-full border-none focus:outline-none"
            />
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full border-none focus:outline-none"
            />
            <input
              type="text"
              value={branchIFSCCode}
              onChange={(e) => setBranchIFSCCode(e.target.value)}
              className="w-full border-none focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 ml-4">
        <div className="space-y-1 text-right">
          <div className="flex justify-between">
            <span>Sub Total</span>
            <input
              type="text"
              value={subTotal}
              onChange={(e) => setSubTotal(e.target.value)}
              className="ml-8 border-none focus:outline-none"
            />
          </div>
          <div className="flex justify-between">
            <span>Total Taxable Amount</span>
            <input
              type="text"
              value={totalTaxableAmount}
              onChange={(e) => setTotalTaxableAmount(e.target.value)}
              className="ml-8 border-none focus:outline-none"
            />
          </div>
          <div className="flex justify-between">
            <span>IGST18 (18%)</span>
            <input
              type="text"
              value={igstAmount}
              onChange={(e) => setIGSTAmount(e.target.value)}
              className="ml-8 border-none focus:outline-none"
            />
          </div>
          <div className="flex justify-between font-medium">
            <span className='font-bold'>Total</span>
            <input
              type="text"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              className="ml-8 border-none focus:outline-none font-bold"
            />
          </div>
          <div className="flex justify-between font-medium">
            <span className='font-bold'>Balance Due</span>
            <input
              type="text"
              value={balanceDue}
              onChange={(e) => setBalanceDue(e.target.value)}
              className="ml-8 border-none focus:outline-none font-bold"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="flex flex-col items-center">
            <input
              type="text"
              value="Ishanee Villas Tech Private Limited"
              className="border-none focus:outline-none"
            />
            <img 
              src="/api/placeholder/120/60" 
              alt="Digital Signature"
              className="my-2"
            />
            <p>Authorized Signature</p>
            <p className="text-gray-500 text-[10px]">(DSC)</p>
          </div>
        </div>
      </div>
    </div>
  )
}