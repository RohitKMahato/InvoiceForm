



// import React, { useState } from "react";

// export default function ItemTable() {
//   const [items, setItems] = useState([
//     {
//       slNo: "1",
//       itemDescription: "Support Service",
//       sac: "9983",
//       nights: 1,
//       rate: 3275000.0,
//       cgstPercentage: 9,
//       cgstAmount: 294750.0,
//       igstPercentage: 18,
//       igstAmount: 589500.0,
//       amount: 3275000.0,
//     },
//   ]);

//   const handleInputChange = (index, field, value) => {
//     const newItems = items.map((item, i) => {
//       if (i === index) {
//         return {
//           ...item,
//           [field]: value,
//         };
//       }
//       return item;
//     });
//     setItems(newItems);
//   };

//   // 
  
//   const addItem = () => {
//     setItems(prevItems => [
//       ...prevItems,
//       {
//         slNo: prevItems.length + 1,
//         itemDescription: "",
//         sac: "",
//         nights: 0,
//         rate: 0,
//         cgstPercentage: 0,
//         cgstAmount: 0,
//         igstPercentage: 0,
//         igstAmount: 0,
//         amount: 0,
//       }
//     ]);
//   };
  
//   const removeItem = (index) => {
//     // Only remove if more than one item exists
//     if (items.length > 1) {
//       setItems(prevItems => 
//         prevItems.filter((_, i) => i !== index).map((item, idx) => ({
//           ...item,
//           slNo: idx + 1  // Reset serial numbers
//         }))
//       );
//     }
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="w-full border-collapse text-xs">
//         <thead className="bg-gray-200 print-bg">
//         <tr className="thead-row">
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-6">
//             S.L.<br />No
//           </th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-left w-28">
//             Item & Description
//           </th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-10">
//             SAC
//           </th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-10">
//             Nights
//           </th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-right w-16">
//             Rate (INR)
//           </th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-20" colSpan="2">
//             CGST
//           </th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-20" colSpan="2">
//             IGST
//           </th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-right w-16">
//             Amount
//           </th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-10 action-buttons print:hidden">
//             Actions
//           </th>
//         </tr>

//           <tr >
//             <th className="border-b border-l border-r border-gray-300"></th>
//             <th className="border-b border-l border-r border-gray-300"></th>
//             <th className="border-b border-l border-r border-gray-300"></th>
//             <th className="border-b border-l border-r border-gray-300"></th>
//             <th className="border-b border-l border-r border-gray-300"></th>
//             <th className="border-b border-l border-r border-gray-300 p-1 font-normal text-left w-6">
//               %
//             </th>
//             <th className="border-b border-l border-r border-gray-300 p-1 font-normal text-left w-12">
//               Amt
//             </th>
//             <th className="border-b border-l border-r border-gray-300 p-1 font-normal text-left w-6">
//               %
//             </th>
//             <th className="border-b border-l border-r border-gray-300 p-1 font-normal text-left w-12">
//               Amt
//             </th>
//             <th className="border-b border-l border-r border-gray-300"></th>
//             <th className="border-b border-l border-r border-gray-300"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item, index) => (
//             <tr key={index}>
//               <td className="border border-gray-300 p-1 text-center">
//                 <input
//                   type="text"
//                   value={item.slNo}
//                   onChange={(e) =>
//                     handleInputChange(index, "slNo", e.target.value)
//                   }
//                   className="w-full text-center border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-1">
//                 <textarea
//                   // type="text"
//                   value={item.itemDescription}
//                   onChange={(e) =>
//                     handleInputChange(index, "itemDescription", e.target.value)
//                   }
//                   className="w-full border-none focus:outline-none resize-none whitespace-pre-wrap overflow-hidden min-h-[32px]"
//                   rows={1}
//                 />
//               </td>
//               <td className="border border-gray-300 p-1">
//                 <input
//                   type="text"
//                   value={item.sac}
//                   onChange={(e) =>
//                     handleInputChange(index, "sac", e.target.value)
//                   }
//                   className="w-full border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-1 text-center">
//                 <input
//                   type="number"
//                   value={item.nights}
//                   onChange={(e) =>
//                     handleInputChange(index, "nights", parseFloat(e.target.value))
//                   }
//                   className="w-full text-center border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-1 text-right">
//                 <input
//                   type="number"
//                   step="1"
//                   value={item.rate}
//                   onChange={(e) =>
//                     handleInputChange(index, "rate", parseFloat(e.target.value))
//                   }
//                   className="w-full text-right border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-0.5 text-right">
//                 <input
//                   type="number"
//                   step="1"
//                   value={item.cgstPercentage}
//                   onChange={(e) =>
//                     handleInputChange(index, "cgstPercentage", parseFloat(e.target.value))
//                   }
//                   className="w-full text-right border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-0.5 text-right">
//                 <input
//                   type="number"
//                   step="1"
//                   value={item.cgstAmount}
//                   onChange={(e) =>
//                     handleInputChange(index, "cgstAmount", parseFloat(e.target.value))
//                   }
//                   className="w-full text-right border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-0.5 text-right">
//                 <input
//                   type="number"
//                   step="1"
//                   value={item.igstPercentage}
//                   onChange={(e) =>
//                     handleInputChange(index, "igstPercentage", parseFloat(e.target.value))
//                   }
//                   className="w-full text-right border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-0.5 text-right">
//                 <input
//                   type="number"
//                   step="1"
//                   value={item.igstAmount}
//                   onChange={(e) =>
//                     handleInputChange(index, "igstAmount", parseFloat(e.target.value))
//                   }
//                   className="w-full text-right border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-1 text-right">
//                 <input
//                   type="number"
//                   step="1"
//                   value={item.amount}
//                   onChange={(e) =>
//                     handleInputChange(index, "amount", parseFloat(e.target.value))
//                   }
//                   className="w-full text-right border-none focus:outline-none"
//                 />
//               </td>
//                             <td className="border text-center action-buttons print:hidden">
//                                     {items.length > 1 && (
//                                       <button 
//                                         onClick={() => removeItem(index)} 
//                                         className="text-red-500 text-xs text-[8px]"
//                                       >
//                                         Remove -
//                                       </button>
//                                     )}
//                                     <button 
//                                       onClick={addItem} 
//                                       className="text-blue-500 text-xs ml-2 text-[8px]"
//                                     >
//                                       Add Row+
//                                     </button>
//                                   </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
    
//     </div>
//   );
// }



























// import React, { useState } from "react";

// export default function ItemTable() {
//   const [items, setItems] = useState([
//     {
//       slNo: "1",
//       itemDescription: "Support Service",
//       sac: "9983",
//       nights: 1,
//       rate: 3275000.0,
//       cgstPercentage: 9,
//       cgstAmount: 294750.0,
//       igstPercentage: 18,
//       igstAmount: 589500.0,
//       amount: 3275000.0,
//     },
//   ]);

//   const handleInputChange = (index, field, value) => {
//     const newItems = items.map((item, i) => {
//       if (i === index) {
//         return {
//           ...item,
//           [field]: value,
//         };
//       }
//       return item;
//     });
//     setItems(newItems);
//   };

//   // 
  
//   const addItem = () => {
//     setItems(prevItems => [
//       ...prevItems,
//       {
//         slNo: prevItems.length + 1,
//         itemDescription: "",
//         sac: "",
//         nights: 0,
//         rate: 0,
//         cgstPercentage: 0,
//         cgstAmount: 0,
//         igstPercentage: 0,
//         igstAmount: 0,
//         amount: 0,
//       }
//     ]);
//   };
  
//   const removeItem = (index) => {
//     // Only remove if more than one item exists
//     if (items.length > 1) {
//       setItems(prevItems => 
//         prevItems.filter((_, i) => i !== index).map((item, idx) => ({
//           ...item,
//           slNo: idx + 1  // Reset serial numbers
//         }))
//       );
//     }
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="w-full border-collapse text-xs">
//         <thead className="bg-gray-200 print-bg">
//         <tr className="thead-row">
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-6">
//             S.L.<br />No
//           </th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-left w-28">
//             Item & Description
//           </th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-10">
//             SAC
//           </th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-10">
//             Nights
//           </th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-right w-16">
//             Rate (INR)
//           </th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-20" colSpan="2">
//             CGST
//           </th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-20" colSpan="2">
//             IGST
//           </th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-right w-16">
//             Amount
//           </th>
//           <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center w-10 action-buttons">
//             Actions
//           </th>
//         </tr>

//           <tr >
//             <th className="border-b border-l border-r border-gray-300"></th>
//             <th className="border-b border-l border-r border-gray-300"></th>
//             <th className="border-b border-l border-r border-gray-300"></th>
//             <th className="border-b border-l border-r border-gray-300"></th>
//             <th className="border-b border-l border-r border-gray-300"></th>
//             <th className="border-b border-l border-r border-gray-300 p-1 font-normal text-left w-6">
//               %
//             </th>
//             <th className="border-b border-l border-r border-gray-300 p-1 font-normal text-left w-12">
//               Amt
//             </th>
//             <th className="border-b border-l border-r border-gray-300 p-1 font-normal text-left w-6">
//               %
//             </th>
//             <th className="border-b border-l border-r border-gray-300 p-1 font-normal text-left w-12">
//               Amt
//             </th>
//             <th className="border-b border-l border-r border-gray-300"></th>
//             <th className="border-b border-l border-r border-gray-300"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item, index) => (
//             <tr key={index}>
//               <td className="border border-gray-300 p-1 text-center">
//                 <input
//                   type="text"
//                   value={item.slNo}
//                   onChange={(e) =>
//                     handleInputChange(index, "slNo", e.target.value)
//                   }
//                   className="w-full text-center border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-1">
//                 <input
//                   type="text"
//                   value={item.itemDescription}
//                   onChange={(e) =>
//                     handleInputChange(index, "itemDescription", e.target.value)
//                   }
//                   className="w-full border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-1">
//                 <input
//                   type="text"
//                   value={item.sac}
//                   onChange={(e) =>
//                     handleInputChange(index, "sac", e.target.value)
//                   }
//                   className="w-full border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-1 text-center">
//                 <input
//                   type="number"
//                   value={item.nights}
//                   onChange={(e) =>
//                     handleInputChange(index, "nights", parseFloat(e.target.value))
//                   }
//                   className="w-full text-center border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-1 text-right">
//                 <input
//                   type="number"
//                   step="1"
//                   value={item.rate}
//                   onChange={(e) =>
//                     handleInputChange(index, "rate", parseFloat(e.target.value))
//                   }
//                   className="w-full text-right border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-0.5 text-right">
//                 <input
//                   type="number"
//                   step="1"
//                   value={item.cgstPercentage}
//                   onChange={(e) =>
//                     handleInputChange(index, "cgstPercentage", parseFloat(e.target.value))
//                   }
//                   className="w-full text-right border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-0.5 text-right">
//                 <input
//                   type="number"
//                   step="1"
//                   value={item.cgstAmount}
//                   onChange={(e) =>
//                     handleInputChange(index, "cgstAmount", parseFloat(e.target.value))
//                   }
//                   className="w-full text-right border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-0.5 text-right">
//                 <input
//                   type="number"
//                   step="1"
//                   value={item.igstPercentage}
//                   onChange={(e) =>
//                     handleInputChange(index, "igstPercentage", parseFloat(e.target.value))
//                   }
//                   className="w-full text-right border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-0.5 text-right">
//                 <input
//                   type="number"
//                   step="1"
//                   value={item.igstAmount}
//                   onChange={(e) =>
//                     handleInputChange(index, "igstAmount", parseFloat(e.target.value))
//                   }
//                   className="w-full text-right border-none focus:outline-none"
//                 />
//               </td>
//               <td className="border border-gray-300 p-1 text-right">
//                 <input
//                   type="number"
//                   step="1"
//                   value={item.amount}
//                   onChange={(e) =>
//                     handleInputChange(index, "amount", parseFloat(e.target.value))
//                   }
//                   className="w-full text-right border-none focus:outline-none"
//                 />
//               </td>
//                             <td className="border text-center action-buttons ">
//                                     {items.length > 1 && (
//                                       <button 
//                                         onClick={() => removeItem(index)} 
//                                         className="text-red-500 text-xs text-[8px]"
//                                       >
//                                         Remove -
//                                       </button>
//                                     )}
//                                     <button 
//                                       onClick={addItem} 
//                                       className="text-blue-500 text-xs ml-2 text-[8px]"
//                                     >
//                                       Add Row+
//                                     </button>
//                                   </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
    
//     </div>
//   );
// }
































import React, { useState } from "react";

export default function ItemTable() {
  // ... (keep all the previous state and handler functions exactly the same)
  

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

  // 
  
  const addItem = () => {
    setItems(prevItems => [
      ...prevItems,
      {
        slNo: prevItems.length + 1,
        itemDescription: "",
        sac: "",
        nights: 0,
        rate: 0,
        cgstPercentage: 0,
        cgstAmount: 0,
        igstPercentage: 0,
        igstAmount: 0,
        amount: 0,
      }
    ]);
  };
  
  const removeItem = (index) => {
    // Only remove if more than one item exists
    if (items.length > 1) {
      setItems(prevItems => 
        prevItems.filter((_, i) => i !== index).map((item, idx) => ({
          ...item,
          slNo: idx + 1  // Reset serial numbers
        }))
      );
    }
  };


  return (
    <div className="overflow-x-auto item-table ">
      <table className="w-full border-collapse text-xs">
        <thead className="bg-gray-200 ">
          <tr>
            <th className="border p-1 font-bold text-center w-[5%]">S.L. No</th>
            <th className="border p-1 font-bold text-left w-[25%]">Item & Description</th>
            <th className="border p-1 font-bold text-center w-[8%]">SAC</th>
            <th className="border p-1 font-bold text-center w-[6%]">Nights</th>
            <th className="border p-1 font-bold text-right w-[12%]">Rate (INR)</th>
            <th className="border p-1 font-bold text-center w-[6%]">CGST%</th>
            <th className="border p-1 font-bold text-right w-[10%]">CGST Amt</th>
            <th className="border p-1 font-bold text-center w-[6%]">IGST%</th>
            <th className="border p-1 font-bold text-right w-[10%]">IGST Amt</th>
            <th className="border p-1 font-bold text-right w-[16%]">Amount</th>
            <th className="border p-1 print:hidden w-[6%]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              {/* Serial Number */}
              <td className="border p-1 text-center align-top">
                <input
                  value={item.slNo}
                  onChange={(e) => handleInputChange(index, "slNo", e.target.value)}
                  className="w-full text-center border-none focus:outline-none"
                />
              </td>

              {/* Item Description */}
              <td className="border p-1 align-top">
                <textarea
                  value={item.itemDescription}
                  onChange={(e) => handleInputChange(index, "itemDescription", e.target.value)}
                  className="w-full border-none focus:outline-none resize-none whitespace-pre-wrap overflow-hidden min-h-[32px] leading-tight"
                  rows={1}
                />
              </td>

              {/* SAC */}
              <td className="border p-1 align-top">
                <input
                  value={item.sac}
                  onChange={(e) => handleInputChange(index, "sac", e.target.value)}
                  className="w-full border-none focus:outline-none text-center"
                />
              </td>

              {/* Nights */}
              <td className="border p-1 text-center align-top">
                <input
                  type="number"
                  value={item.nights}
                  onChange={(e) => handleInputChange(index, "nights", parseFloat(e.target.value))}
                  className="w-full border-none focus:outline-none text-center prin:hidden"
                />
              </td>

              {/* Rate */}
              <td className="border p-1 text-right align-top">
                <input
                  type="number"
                  value={item.rate}
                  onChange={(e) => handleInputChange(index, "rate", parseFloat(e.target.value))}
                  className="w-full border-none focus:outline-none text-right prin:hidden"
                />
              </td>

              {/* CGST */}
              <td className="border p-1 text-center align-top">
                <input
                  type="number"
                  value={item.cgstPercentage}
                  onChange={(e) => handleInputChange(index, "cgstPercentage", parseFloat(e.target.value))}
                  className="w-full border-none focus:outline-none text-center prin:hidden"
                />
              </td>
              <td className="border p-1 text-right align-top">
                <input
                  type="number"
                  value={item.cgstAmount}
                  onChange={(e) => handleInputChange(index, "cgstAmount", parseFloat(e.target.value))}
                  className="w-full border-none focus:outline-none text-right prin:hidden"
                />
              </td>

              {/* IGST */}
              <td className="border p-1 text-center align-top">
                <input
                  type="number"
                  value={item.igstPercentage}
                  onChange={(e) => handleInputChange(index, "igstPercentage", parseFloat(e.target.value))}
                  className="w-full border-none focus:outline-none text-center"
                />
              </td>
              <td className="border p-1 text-right align-top">
                <input
                  type="number"
                  value={item.igstAmount}
                  onChange={(e) => handleInputChange(index, "igstAmount", parseFloat(e.target.value))}
                  className="w-full border-none focus:outline-none text-right"
                />
              </td>

              {/* Amount */}
              <td className="border p-1 text-right align-top">
                <input
                  type="number"
                  value={item.amount}
                  onChange={(e) => handleInputChange(index, "amount", parseFloat(e.target.value))}
                  className="w-full border-none focus:outline-none text-right"
                />
              </td>

              {/* Actions (Hidden on Print) */}
              <td className="border p-1 text-center print:hidden align-top">
                <div className="flex flex-col space-y-1">
                  {items.length > 1 && (
                    <button
                      onClick={() => removeItem(index)}
                      className="text-red-500 text-xs hover:text-red-700"
                    >
                      Remove
                    </button>
                  )}
                  <button
                    onClick={addItem}
                    className="text-blue-500 text-xs hover:text-blue-700"
                  >
                    Add
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}