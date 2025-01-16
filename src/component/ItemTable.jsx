
import React from 'react';

export default function ItemTable() {
  return (
    <table className="w-full border-collapse text-xs">
      <thead>
        <tr>
          <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-left whitespace-nowrap ">S.L.<br />No</th>
          <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-left">Item & Description</th>
          <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-left">SAC</th>
          <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-left">Nights</th>
          <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-left">Rate (INR)</th>
          <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-center border-b" colSpan="2">IGST</th>
          <th className="border-t border-l border-r border-gray-300 p-1 font-bold text-left">Amount</th>
        </tr>
        <tr>
          <th className="border-b border-l border-r border-gray-300"></th>
          <th className="border-b border-l border-r border-gray-300"></th>
          <th className="border-b border-l border-r border-gray-300"></th>
          <th className="border-b border-l border-r border-gray-300"></th>
          <th className="border-b border-l border-r border-gray-300"></th>
          <th className="border-b border-l border-r border-gray-300 p-1 font-normal text-left">%</th>
          <th className="border-b border-l border-r border-gray-300 p-1 font-normal text-left">Amt</th>
          <th className="border-b border-l border-r border-gray-300"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-1 text-center">1</td>
          <td className="border border-gray-300 p-1">Support Service</td>
          <td className="border border-gray-300 p-1">9983</td>
          <td className="border border-gray-300 p-1 text-center">1</td>
          <td className="border border-gray-300 p-1 text-right">32,75,000.00</td>
          <td className="border border-gray-300 p-1 text-right">18%</td>
          <td className="border border-gray-300 p-1 text-right">5,89,500.00</td>
          <td className="border border-gray-300 p-1 text-right">32,75,000.00</td>
        </tr>
      </tbody>
    </table>
  );
}
