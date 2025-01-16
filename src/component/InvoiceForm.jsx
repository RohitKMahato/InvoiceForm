import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function InvoiceForm() {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [items, setItems] = useState([{ description: '', quantity: 1, unitPrice: 0 }]);

  const addItem = () => {
    setItems([...items, { description: '', quantity: 1, unitPrice: 0 }]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const updateItem = (index, field, value) => {
    const newItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Invoice Form</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Form Section */}
        <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Invoice Details</h2>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="invoice-number" style={{ display: 'block', marginBottom: '5px' }}>Invoice Number</label>
            <input
              id="invoice-number"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="invoice-date" style={{ display: 'block', marginBottom: '5px' }}>Invoice Date</label>
            <input
              id="invoice-date"
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="client-name" style={{ display: 'block', marginBottom: '5px' }}>Client Name</label>
            <input
              id="client-name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="client-address" style={{ display: 'block', marginBottom: '5px' }}>Client Address</label>
            <textarea
              id="client-address"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Items</h2>
          {items.map((item, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                <span>Item {index + 1}</span>
                <button onClick={() => removeItem(index)} style={{ padding: '4px', background: '#e53e3e', color: '#fff', borderRadius: '4px', border: 'none' }}>
                  <Minus size={14} />
                </button>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <label htmlFor={`description-${index}`} style={{ display: 'block', marginBottom: '5px' }}>Description</label>
                <input
                  id={`description-${index}`}
                  value={item.description}
                  onChange={(e) => updateItem(index, 'description', e.target.value)}
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '5px' }}>
                <label htmlFor={`quantity-${index}`} style={{ display: 'block', marginBottom: '5px' }}>Quantity</label>
                <input
                  id={`quantity-${index}`}
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItem(index, 'quantity', parseFloat(e.target.value))}
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '5px' }}>
                <label htmlFor={`unit-price-${index}`} style={{ display: 'block', marginBottom: '5px' }}>Unit Price</label>
                <input
                  id={`unit-price-${index}`}
                  type="number"
                  step="0.01"
                  value={item.unitPrice}
                  onChange={(e) => updateItem(index, 'unitPrice', parseFloat(e.target.value))}
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>
            </div>
          ))}
          <button onClick={addItem} style={{ marginTop: '10px', padding: '8px 16px', background: '#3182ce', color: '#fff', borderRadius: '4px', border: 'none' }}>
            <Plus size={14} /> Add Item
          </button>
        </div>

        {/* Preview Section */}
        <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Invoice Preview</h2>
          <div style={{ marginBottom: '10px' }}>
            <p><strong>Invoice #{invoiceNumber}</strong></p>
            <p>{invoiceDate}</p>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <p><strong>Client Information</strong></p>
            <p>{clientName}</p>
            <p>{clientAddress}</p>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <p><strong>Items</strong></p>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left' }}>Description</th>
                  <th style={{ textAlign: 'right' }}>Quantity</th>
                  <th style={{ textAlign: 'right' }}>Unit Price</th>
                  <th style={{ textAlign: 'right' }}>Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.description}</td>
                    <td style={{ padding: '8px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>{item.quantity}</td>
                    <td style={{ padding: '8px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>${item.unitPrice.toFixed(2)}</td>
                    <td style={{ padding: '8px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>${(item.quantity * item.unitPrice).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <p><strong>Total: ${calculateTotal().toFixed(2)}</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}
