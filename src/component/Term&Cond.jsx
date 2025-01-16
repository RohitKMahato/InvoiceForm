
import React from 'react';

const TermsAndConditions = ({ qrCodeUrl }) => {
  return (
    <div className=" border border-gray-300 p-4 ">
      <div className="space-y-1">
      <h6 className="font-medium mb-0.5 text-[10px]">Terms & Conditions</h6>
      <div className="space-y-0.5 text-[10px]"> {/* Smaller font size */}
  <p className="flex gap-0.5"> 
    <span>1.</span>
    <span>We declare that this invoice shows the actual price of the Services described and that all particulars are true and correct.</span>
  </p>
  <p className="flex gap-0.5"> 
    <span>2.</span>
    <span>We are registered under MSME, Registration No: UDYAM-HR-05-0060924.</span>
  </p>
  <p className="flex gap-0.5"> 
    <span>3.</span>
    <span>Subject to Goa Jurisdiction.</span>
  </p>
  <p className="flex gap-0.5"> 
    <span>4.</span>
    <span>Payment should be made 2 days before check-in.</span>
  </p>
</div>

        
        <div className="mt-4 flex items-start gap-4 text-[10px]">
          {qrCodeUrl ? (
            <img 
              src={qrCodeUrl} 
              alt="QR Code" 
              className="w-32 h-32"
            />
          ) : (
            <div className="w-24 h-24 bg-gray-200 flex items-center justify-center border border-gray-300">
              QR Code
            </div>
          )}
          <p className="text-[10px] self-center font-bold">Scan the QR code to view the configured information.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
