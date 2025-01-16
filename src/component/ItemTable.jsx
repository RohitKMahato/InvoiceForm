
// import React from 'react';

// export default function ItemTable() {
//   return (
//     <table className="w-full border-collapse text-xs">
//       <thead>
//         <tr>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-left whitespace-nowrap ">S.L.<br />No</th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-left">Item & Description</th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-left">SAC</th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-left">Nights</th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-left">Rate (INR)</th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center border-b" colSpan="2">IGST</th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-left">Amount</th>
//         </tr>
//         <tr>
//           <th className="border-b border-l border-r border-gray-300"></th>
//           <th className="border-b border-l border-r border-gray-300"></th>
//           <th className="border-b border-l border-r border-gray-300"></th>
//           <th className="border-b border-l border-r border-gray-300"></th>
//           <th className="border-b border-l border-r border-gray-300"></th>
//           <th className="border-b border-l border-r border-gray-300 p-1 font-normal text-left">%</th>
//           <th className="border-b border-l border-r border-gray-300 p-1 font-normal text-left">Amt</th>
//           <th className="border-b border-l border-r border-gray-300"></th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td className="border border-gray-300 p-1 text-center">1</td>
//           <td className="border border-gray-300 p-1">Support Service</td>
//           <td className="border border-gray-300 p-1">9983</td>
//           <td className="border border-gray-300 p-1 text-center">1</td>
//           <td className="border border-gray-300 p-1 text-right">32,75,000.00</td>
//           <td className="border border-gray-300 p-1 text-right">18%</td>
//           <td className="border border-gray-300 p-1 text-right">5,89,500.00</td>
//           <td className="border border-gray-300 p-1 text-right">32,75,000.00</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }














import React, { useState } from "react";

export default function ItemTable() {
  const [items, setItems] = useState([
    {
      slNo: "1",
      itemDescription: "Support Service",
      sac: "9983",
      nights: 1,
      rate: 3275000.0,
      cgstPercentage: 9,
      cgstAmount: 294750.0,
      igstPercentage: 18,
      igstAmount: 589500.0,
      amount: 3275000.0,
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const newItems = items.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          [field]: value,
        };
      }
      return item;
    });
    setItems(newItems);
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        slNo: items.length + 1,
        itemDescription: "",
        sac: "",
        nights: 0,
        rate: 0.0,
        cgstPercentage: 0,
        cgstAmount: 0.0,
        igstPercentage: 0,
        igstAmount: 0.0,
        amount: 0.0,
      },
    ]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-xs">
        <thead>
          <tr>
            <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-8">
              S.L.<br />No
            </th>
            <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-left w-48">
              Item & Description
            </th>
            <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-8">
              SAC
            </th>
            <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-8">
              Nights
            </th>
            <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-right w-2">
              Rate (INR)
            </th>
            <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-18" colSpan="2">
              CGST
            </th>
            <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-15" colSpan="2">
              IGST
            </th>
            <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-right w-2">
              Amount
            </th>
            <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-12">
              Actions
            </th>
          </tr>
          <tr>
            <th className="border-b border-l border-r border-gray-300"></th>
            <th className="border-b border-l border-r border-gray-300"></th>
            <th className="border-b border-l border-r border-gray-300"></th>
            <th className="border-b border-l border-r border-gray-300"></th>
            <th className="border-b border-l border-r border-gray-300"></th>
            <th className="border-b border-l border-r border-gray-300 p-1 font-normal text-left w-12">
              %
            </th>
            <th className="border-b border-l border-r border-gray-300 p-1 font-normal text-left w-12">
              Amt
            </th>
            <th className="border-b border-l border-r border-gray-300 p-1 font-normal text-left w-12">
              %
            </th>
            <th className="border-b border-l border-r border-gray-300 p-1 font-normal text-left w-12">
              Amt
            </th>
            <th className="border-b border-l border-r border-gray-300"></th>
            <th className="border-b border-l border-r border-gray-300"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-1 text-center">
                <input
                  type="text"
                  value={item.slNo}
                  onChange={(e) =>
                    handleInputChange(index, "slNo", e.target.value)
                  }
                  className="w-full text-center border-none focus:outline-none"
                />
              </td>
              <td className="border border-gray-300 p-1">
                <input
                  type="text"
                  value={item.itemDescription}
                  onChange={(e) =>
                    handleInputChange(index, "itemDescription", e.target.value)
                  }
                  className="w-full border-none focus:outline-none"
                />
              </td>
              <td className="border border-gray-300 p-1">
                <input
                  type="text"
                  value={item.sac}
                  onChange={(e) =>
                    handleInputChange(index, "sac", e.target.value)
                  }
                  className="w-full border-none focus:outline-none"
                />
              </td>
              <td className="border border-gray-300 p-1 text-center">
                <input
                  type="number"
                  value={item.nights}
                  onChange={(e) =>
                    handleInputChange(index, "nights", parseFloat(e.target.value))
                  }
                  className="w-full text-center border-none focus:outline-none"
                />
              </td>
              <td className="border border-gray-300 p-1 text-right">
                <input
                  type="number"
                  step="0.01"
                  value={item.rate}
                  onChange={(e) =>
                    handleInputChange(index, "rate", parseFloat(e.target.value))
                  }
                  className="w-full text-right border-none focus:outline-none"
                />
              </td>
              <td className="border border-gray-300 p-0.5 text-right">
                <input
                  type="number"
                  step="0.01"
                  value={item.cgstPercentage}
                  onChange={(e) =>
                    handleInputChange(index, "cgstPercentage", parseFloat(e.target.value))
                  }
                  className="w-full text-right border-none focus:outline-none"
                />
              </td>
              <td className="border border-gray-300 p-0.5 text-right">
                <input
                  type="number"
                  step="0.01"
                  value={item.cgstAmount}
                  onChange={(e) =>
                    handleInputChange(index, "cgstAmount", parseFloat(e.target.value))
                  }
                  className="w-full text-right border-none focus:outline-none"
                />
              </td>
              <td className="border border-gray-300 p-0.5 text-right">
                <input
                  type="number"
                  step="0.01"
                  value={item.igstPercentage}
                  onChange={(e) =>
                    handleInputChange(index, "igstPercentage", parseFloat(e.target.value))
                  }
                  className="w-full text-right border-none focus:outline-none"
                />
              </td>
              <td className="border border-gray-300 p-0.5 text-right">
                <input
                  type="number"
                  step="0.01"
                  value={item.igstAmount}
                  onChange={(e) =>
                    handleInputChange(index, "igstAmount", parseFloat(e.target.value))
                  }
                  className="w-full text-right border-none focus:outline-none"
                />
              </td>
              <td className="border border-gray-300 p-1 text-right">
                <input
                  type="number"
                  step="0.01"
                  value={item.amount}
                  onChange={(e) =>
                    handleInputChange(index, "amount", parseFloat(e.target.value))
                  }
                  className="w-full text-right border-none focus:outline-none"
                />
              </td>
              <td className="border text-center">
                          <button onClick={() => removeItem(index)} className="text-red-500 text-xs text-[8px]">Remove -</button>
                          <button onClick={addItem} className="text-blue-500 text-xs ml-2 text-[8px]">Add Row+</button>
                        </td>

            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
}
