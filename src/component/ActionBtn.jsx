import React from "react";
import { Download, Printer } from "lucide-react";
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ActionButtons = () => {
  // Function to handle printing
  const handlePrint = () => {
    window.print();
  };

  // Function to save the content as an HTML file
  const handleSave = () => {
    const content = document.querySelector(".print-container");

    if (!content) {
      console.error("Print container not found!");
      return;
    }

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Invoice</title>
          <style>
            @page {
              size: A4;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
              font-family: system-ui, -apple-system, sans-serif;
            }
            .print-container {
              width: 210mm;
              min-height: 297mm;
              padding: 20mm;
              margin: 0 auto;
              background: white;
            }
          </style>
        </head>
        <body>
          ${content.innerHTML}
        </body>
      </html>
    `;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "invoice.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  //   // Function to download the content as a PDF
  //   const handleDownloadPDF = () => {
  //     const element = document.getElementById('invoice-preview');
  //     if (!element) {
  //       console.error('Element with ID "invoice-preview" not found.');
  //       return;
  //     }

  //     setTimeout(() => {
  //     const options = {
  //       margin: 10,
  //       filename: 'invoice.pdf',
  //       image: { type: 'jpeg', quality: 0.98 },
  //       html2canvas: { scale: 2 },
  //       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  //     };

  //     html2pdf().set(options).from(element).save();
  //   }, 100);
  // }

  const handleDownloadPDF = () => {
    const element = document.getElementById("invoice-preview");
    if (!element) {
      console.error('Element with ID "invoice-preview" not found.');
      return;
    }

    const options = {
      margin: 10,
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true, // Add this to handle cross-origin images
        logging: false, // Disable logging for cleaner output
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
      pagebreak: { mode: "avoid-all" }, // Try to keep content together
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div>
      {/* Action Buttons */}
      <div className="fixed bottom-4 right-4 flex gap-2 no-print">
        {/* Print Button */}
        <button
          onClick={handlePrint}
          className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          aria-label="Print"
        >
          <Printer size={20} />
        </button>

        {/* Save as HTML Button */}
        {/* <button
          onClick={handleSave}
          className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
          aria-label="Save as HTML"
        >
          <Download size={20} />
        </button> */}

        {/* Download as PDF Button */}
        <button
          onClick={downlodePDF}
          className="flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          aria-label="Download PDF"
        >
          <Download size={20} />
        </button>
      </div>

      {/* Content to Print */}
      <div id="invoice-preview" className="print-container">
        {/* <h1>Invoice Content</h1>
        <p>This is the content of the invoice that will be printed or saved.</p> */}
      </div>
    </div>
  );
};

export default ActionButtons;
