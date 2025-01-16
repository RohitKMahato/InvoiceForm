
import React from 'react';

const FooterSec = () => {
  return (
    <div className="w-full">
      <div className="border border-gray-300 p-1"> {/* Reduced padding */}
        <p className="text-[9px] font-medium mb-1">HSN/SAC Summary:</p> {/* Smaller font size */}
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 p-1 text-left font-bold text-[9px] w-1/5">HSN/SAC</th> {/* Smaller padding and font */}
              <th className="border border-gray-300 p-1 text-right font-bold text-[9px] w-1/5">Taxable Amount</th>
              <th colSpan="2" className="border border-gray-300 p-0 w-2/5">
                <div className="text-center font-bold text-[9px] border-b border-gray-300 p-0.5">IGST</div> {/* Smaller font and padding */}
                <div className="flex">
                  <div className="w-1/2 border-r border-gray-300 p-0.5 text-center font-bold text-[9px]">Rate</div>
                  <div className="w-1/2 p-0.5 text-center font-bold text-[9px]">Amount</div>
                </div>
              </th>
              <th className="border border-gray-300 p-1 text-right font-bold text-[9px] w-1/5">Total Tax Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-1 text-[9px]">9983</td> {/* Smaller padding and font */}
              <td className="border border-gray-300 p-1 text-right text-[9px]">32,75,000.00</td>
              <td className="border border-gray-300 p-1 text-center text-[9px]">18%</td>
              <td className="border border-gray-300 p-1 text-right text-[9px]">5,89,500.00</td>
              <td className="border border-gray-300 p-1 text-right text-[9px]">5,89,500.00</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-1 text-[9px] font-medium">Total</td>
              <td className="border border-gray-300 p-1 text-right text-[9px] font-bold">32,75,000.00</td>
              <td className="border border-gray-300 p-1 text-center text-[9px]"></td>
              <td className="border border-gray-300 p-1 text-right text-[9px] font-bold">5,89,500.00</td>
              <td className="border border-gray-300 p-1 text-right text-[9px] font-bold">5,89,500.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FooterSec;
