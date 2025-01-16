import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Form = () => {
  const formRef = useRef(null);

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    const input = formRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("form.pdf");
    });
  };

  // Function to handle printing
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-8">
      {/* Form */}
      <div ref={formRef} className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Form Details</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your message"
              rows="4"
            />
          </div>
        </form>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Download as PDF
        </button>
        <button
          onClick={handlePrint}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default Form;