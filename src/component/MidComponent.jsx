import React from 'react';

export default function MidComponent() {
  return (
    <div className="flex justify-between text-xs mt-4">
      {/* Left Section */}
      <div className="w-1/2">
        <div className="border border-gray-300 p-3 space-y-2">
          <div>
            <p className="font-medium">Total In Words</p>
            <p className="italic font-bold">Indian Rupee Thirty-Eight Lakh Sixty-Four Thousand Five Hundred Only</p>
          </div>
          
          <div className="border-t border-gray-300 pt-2">
            <p className="font-medium">Notes</p>
            <p>Thanks for your business.</p>
          </div>
          
          <div className="space-y-0.5">
            <p>A/c Holder's Name : Ishanee Villas Tech Private Limited.</p>
            <p>Bank Name : ICICI Bank Limited.</p>
            <p>A/c No. : 114705001875.</p>
            <p>Branch & IFSC Code : Gurgaon Sector 57 Branch & ICIC0001147.</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 ml-4">
        <div className="space-y-1 text-right">
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span className="ml-8">32,75,000.00</span>
          </div>
          <div className="flex justify-between">
            <span>Total Taxable Amount</span>
            <span className="ml-8">32,75,000.00</span>
          </div>
          <div className="flex justify-between">
            <span>IGST18 (18%)</span>
            <span className="ml-8">5,89,500.00</span>
          </div>
          <div className="flex justify-between font-medium">
            <span className='font-bold'>Total</span>
            <span className="ml-8 font-bold">₹38,64,500.00</span>
          </div>
          <div className="flex justify-between font-medium">
            <span className='font-bold'>Balance Due</span>
            <span className="ml-8 font-bold">₹38,64,500.00</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="flex flex-col items-center">
            <p>Ishanee Villas Tech Private Limited</p>
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
