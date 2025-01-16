import React from 'react';

export default function BillingComponent() {
  return (
    <div className="border border-gray-300">
      {/* Bill To Header */}
      <div className="border-b border-gray-300 px-3 py-1 text-xs font-bold">
        Bill To
      </div>
      
      {/* Company Details */}
      <div className="px-3 py-2 space-y-1 text-xs">
        <p className="font-bold">Ishanee Villas Tech Private Limited - GOA</p>
        <p >GSTIN 30AAGCI9865C1ZM</p>
      </div>
      
     
    </div>
  );
}