import React, { useState } from 'react';

export default function MidComponent() {
  const [totalInWords, setTotalInWords] = useState('Indian Rupee Thirty-Eight Lakh Sixty-Four Thousand Five Hundred Only');
  const [notes, setNotes] = useState('Thanks for your business.');
  const [accountHolderName, setAccountHolderName] = useState('Ishanee Villas Tech Private Limited.');
  const [bankName, setBankName] = useState('ICICI Bank Limited.');
  const [accountNumber, setAccountNumber] = useState('114705001875');
  const [branchIFSCCode, setBranchIFSCCode] = useState('Gurgaon Sector 57 Branch & ICIC0001147');
  const [subTotal, setSubTotal] = useState('32,75,000.00');
  const [totalTaxableAmount, setTotalTaxableAmount] = useState('32,75,000.00');
  const [igstAmount, setIGSTAmount] = useState('5,89,500.00');
  const [cgstAmount, setCGSTAmount] = useState('2,94,750.00');
  const [sgstAmount, setSGSTAmount] = useState('2,94,750.00');
  const [total, setTotal] = useState('₹38,64,500.00');
  const [balanceDue, setBalanceDue] = useState('₹38,64,500.00');

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
      <div className="w-1/2 ml-8">
        <div className="space-y-1">
          
          {/* Sub Total */}
          <div className="flex items-center justify-between mr-12">
            <span className="text-left">Sub Total</span>
            <input
              type="text"
              value={subTotal}
              onChange={(e) => setSubTotal(e.target.value)}
              className="text-right border-none focus:outline-none w-24"
            />
          </div>

          {/* Total Taxable Amount */}
          <div className="flex items-center justify-between mr-12">
            <span className="text-left">Total Taxable Amount</span>
            <input
              type="text"
              value={totalTaxableAmount}
              onChange={(e) => setTotalTaxableAmount(e.target.value)}
              className="text-right border-none focus:outline-none w-24"
            />
          </div>

          {/* IGST */}
          <div className="flex items-center justify-between mr-12">
            <span className="text-left">IGST18 (18%)</span>
            <input
              type="text"
              value={igstAmount}
              onChange={(e) => setIGSTAmount(e.target.value)}
              className="text-right border-none focus:outline-none w-24"
            />
          </div>

          {/* CGST */}
          <div className="flex items-center justify-between mr-12">
            <span className="text-left">CGST9 (9%)</span>
            <input
              type="text"
              value={cgstAmount}
              onChange={(e) => setCGSTAmount(e.target.value)}
              className="text-right border-none focus:outline-none w-24"
            />
          </div>

          {/* SGST */}
          <div className="flex items-center justify-between mr-12">
            <span className="text-left">SGST9 (9%)</span>
            <input
              type="text"
              value={sgstAmount}
              onChange={(e) => setSGSTAmount(e.target.value)}
              className="text-right border-none focus:outline-none w-24"
            />
          </div>

          {/* Total */}
          <div className="flex items-center justify-between font-medium mr-12">
            <span className="font-bold text-left">Total</span>
            <input
              type="text"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              className="text-right border-none focus:outline-none font-bold w-24 "
            />
          </div>

          {/* Balance Due */}
          <div className="flex items-center justify-between font-medium mr-12">
            <span className="font-bold text-left">Balance Due</span>
            <input
              type="text"
              value={balanceDue}
              onChange={(e) => setBalanceDue(e.target.value)}
              className="text-right border-none focus:outline-none font-bold w-24"
            />
          </div>

        </div>

        {/* Signature Section */}
        <div className="mt-8 text-center">
          <div className="flex flex-col items-center">
            <input
              type="text"
              value="Ishanee Villas Tech PVT LTD"
              readOnly
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
  );
}
