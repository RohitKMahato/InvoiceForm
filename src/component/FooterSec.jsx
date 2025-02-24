




import React, { useState } from 'react';

const FooterSec = () => {
  const [hsnData, setHsnData] = useState([
    { 
      hsnSac: '9983', 
      taxableAmount: 3275000, 
      igstRate: 18, 
      igstAmount: 589500, 
      sgstRate: 9, 
      sgstAmount: 294750, 
      totalTaxAmount: 884250 
    }
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedData = hsnData.map((item, i) => {
      if (i === index) {
        const newValue = parseFloat(value) || 0;
        let updatedItem = { ...item, [field]: newValue };

        if (field === 'taxableAmount' || field === 'igstRate' || field === 'sgstRate') {
          updatedItem.igstAmount = (updatedItem.taxableAmount * updatedItem.igstRate) / 100;
          updatedItem.sgstAmount = (updatedItem.taxableAmount * updatedItem.sgstRate) / 100;
          updatedItem.totalTaxAmount = updatedItem.igstAmount + updatedItem.sgstAmount;
        }

        return updatedItem;
      }
      return item;
    });
    setHsnData(updatedData);
  };

  const calculateTotal = (field) => {
    return hsnData.reduce((acc, item) => acc + item[field], 0);
  };

  return (
    <div className="w-full ">
      <div className=" border-gray-300">
        <p className="text-[10px] font-medium mb-1 text-left ml-3">HSN/SAC Summary:</p>
        <table className="w-full border-collapse text-[9px]">
          <thead>
          <tr>
            <th className="border border-gray-300 p-1 text-left font-bold w-1/8">HSN/SAC</th>
            <th className="border border-gray-300 p-1 text-right font-bold w-1/8">Taxable Amount</th>
            <th colSpan="2" className="border border-gray-300 p-0 w-1/4">
              <div className="text-center font-bold border-b border-gray-300 p-0.5">IGST</div>
              <div className="flex">
                <div className="w-1/2 border-r border-gray-300 p-0.5 text-center font-bold">Rate</div>
                <div className="w-1/2 p-0.5 text-center font-bold">Amount</div>
              </div>
            </th>
            <th colSpan="2" className="border border-gray-300 p-0 w-1/4">
              <div className="text-center font-bold border-b border-gray-300 p-0.5">SGST</div>
              <div className="flex">
                <div className="w-1/2 border-r border-gray-300 p-0.5 text-center font-bold">Rate</div>
                <div className="w-1/2 p-0.5 text-center font-bold">Amount</div>
              </div>
            </th>
            <th className="border border-gray-300 p-1 text-right font-bold w-1/4">Total Tax Amount</th>
          </tr>

          </thead>
          <tbody>
            {hsnData.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    value={item.hsnSac}
                    onChange={(e) => handleInputChange(index, 'hsnSac', e.target.value)}
                    className="w-full p-0.5 text-[9px] border-none outline-none"
                  />
                </td>
                <td className="border border-gray-300 p-1 text-right">
                  <input
                    type="number"
                    value={item.taxableAmount}
                    onChange={(e) => handleInputChange(index, 'taxableAmount', e.target.value)}
                    className="w-full p-0.5 text-right text-[9px] border-none outline-none"
                  />
                </td>
                <td className="border border-gray-300 p-1 text-center">
                  <input
                    type="number"
                    value={item.igstRate}
                    onChange={(e) => handleInputChange(index, 'igstRate', e.target.value)}
                    className="w-full p-0.5 text-center text-[9px] border-none outline-none"
                  />
                </td>
                <td className="border border-gray-300 p-1 text-right">
                  <input
                    type="number"
                    value={item.igstAmount}
                    readOnly
                    className="w-full p-0.5 text-right text-[9px] border-none outline-none"
                  />
                </td>
                <td className="border border-gray-300 p-1 text-center">
                  <input
                    type="number"
                    value={item.sgstRate}
                    onChange={(e) => handleInputChange(index, 'sgstRate', e.target.value)}
                    className="w-full p-0.5 text-center text-[9px] border-none outline-none"
                  />
                </td>
                <td className="border border-gray-300 p-1 text-right">
                  <input
                    type="number"
                    value={item.sgstAmount}
                    readOnly
                    className="w-full p-0.5 text-right text-[9px]  border-none outline-none"
                  />
                </td>
                <td className="border border-gray-300 p-1 text-right">
                  <input
                    type="number"
                    value={item.totalTaxAmount}
                    readOnly
                    className="w-full p-0.5 text-right text-[9px] border-none outline-none"
                  />
                </td>
              </tr>
            ))}
            <tr className="text-[9px]">
              <td className="border  p-1 text-left font-medium">Total</td>
              <td className="border  p-1 text-right font-bold">
                {calculateTotal('taxableAmount').toLocaleString()}
              </td>
              <td className="border  p-1.5 text-center"></td>
              <td className="border  p-1.5 text-right font-bold">
                {calculateTotal('igstAmount').toLocaleString()}
              </td>
              <td className="border  p-1.5 text-center"></td>
              <td className="border  p-1.5 text-right font-bold">
                {calculateTotal('sgstAmount').toLocaleString()}
              </td>
              <td className="border  p-1.5 text-right font-bold w-1/4">
                {calculateTotal('totalTaxAmount').toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FooterSec;