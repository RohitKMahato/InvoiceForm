
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function InvoiceForm() {
  const [formData, setFormData] = useState({
    // Invoice Details
    invoiceNo: '',
    invoiceDate: '',
    terms: 'Due on Check-in',
    dueDate: '',
    placeOfSupply: '',

    // Bill To Details
    companyName: '',
    gstin: '',

    // Service Details
    serviceName: '',
    sac: '',
    nights: '',
    rate: '',
    igstPercent: '18',

    // Bank Details
    accountHolder: '',
    bankName: '',
    accountNo: '',
    branchAndIfsc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const calculateTotals = () => {
    const rate = parseFloat(formData.rate) || 0;
    const igstPercent = parseFloat(formData.igstPercent) || 0;
    const igstAmount = (rate * igstPercent) / 100;
    const total = rate + igstAmount;
    return { subTotal: rate, igstAmount, total };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { subTotal, igstAmount, total } = calculateTotals();
    
    // Here you would generate the invoice HTML using your existing components
    // and convert it to PDF for download
    console.log('Form submitted:', {
      ...formData,
      subTotal,
      igstAmount,
      total
    });
    
    // TODO: Add your PDF generation and download logic here
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Create Invoice</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Invoice Details Section */}
          <div className="grid grid-cols-2 gap-4">
            <h3 className="col-span-2 font-semibold text-lg">Invoice Details</h3>
            <div className="space-y-2">
              <label className="text-sm">Invoice Number</label>
              <Input
                name="invoiceNo"
                value={formData.invoiceNo}
                onChange={handleChange}
                placeholder="IVHR/24-25/513"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Invoice Date</label>
              <Input
                type="date"
                name="invoiceDate"
                value={formData.invoiceDate}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Due Date</label>
              <Input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Place of Supply</label>
              <Input
                name="placeOfSupply"
                value={formData.placeOfSupply}
                onChange={handleChange}
                placeholder="e.g., Goa (30)"
              />
            </div>
          </div>

          {/* Bill To Section */}
          <div className="grid grid-cols-2 gap-4">
            <h3 className="col-span-2 font-semibold text-lg">Bill To</h3>
            <div className="space-y-2 col-span-2">
              <label className="text-sm">Company Name</label>
              <Input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
              />
            </div>
            <div className="space-y-2 col-span-2">
              <label className="text-sm">GSTIN</label>
              <Input
                name="gstin"
                value={formData.gstin}
                onChange={handleChange}
                placeholder="e.g., 30AAGCI9865C1ZM"
              />
            </div>
          </div>

          {/* Service Details Section */}
          <div className="grid grid-cols-3 gap-4">
            <h3 className="col-span-3 font-semibold text-lg">Service Details</h3>
            <div className="space-y-2">
              <label className="text-sm">Service Name</label>
              <Input
                name="serviceName"
                value={formData.serviceName}
                onChange={handleChange}
                placeholder="e.g., Support Service"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">SAC</label>
              <Input
                name="sac"
                value={formData.sac}
                onChange={handleChange}
                placeholder="e.g., 9983"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Nights</label>
              <Input
                type="number"
                name="nights"
                value={formData.nights}
                onChange={handleChange}
                placeholder="1"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Rate (INR)</label>
              <Input
                type="number"
                name="rate"
                value={formData.rate}
                onChange={handleChange}
                placeholder="0.00"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">IGST %</label>
              <Input
                type="number"
                name="igstPercent"
                value={formData.igstPercent}
                onChange={handleChange}
                placeholder="18"
              />
            </div>
          </div>

          {/* Bank Details Section */}
          <div className="grid grid-cols-2 gap-4">
            <h3 className="col-span-2 font-semibold text-lg">Bank Details</h3>
            <div className="space-y-2">
              <label className="text-sm">Account Holder Name</label>
              <Input
                name="accountHolder"
                value={formData.accountHolder}
                onChange={handleChange}
                placeholder="Account Holder Name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Bank Name</label>
              <Input
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                placeholder="e.g., ICICI Bank Limited"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Account Number</label>
              <Input
                name="accountNo"
                value={formData.accountNo}
                onChange={handleChange}
                placeholder="Account Number"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Branch & IFSC Code</label>
              <Input
                name="branchAndIfsc"
                value={formData.branchAndIfsc}
                onChange={handleChange}
                placeholder="Branch & IFSC Code"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Generate & Download Invoice
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
