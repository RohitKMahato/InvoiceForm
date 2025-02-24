

import { useRef } from 'react';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import InvoiceDetails from './component/InvoiceDetails';
import BillingComponent from './component/BillingComponent';
import ItemTable from './component/ItemTable';
import MidComponent from './component/MidComponent';
import TermsAndConditions from './component/Term&Cond'; 
import FooterSec from './component/FooterSec';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FaDownload, FaPrint } from "react-icons/fa"; 


const App = () => {
  const pdfRef = useRef();

  // ✅ Function to Print Invoice
  const printInvoice = () => {
    window.print(); // ✅ Opens the browser's print dialog
  };

  // ✅ Function to Download PDF
  const downloadPDF = () => {
    const input = pdfRef.current;
    if (!input) {
      console.error("PDF element not found.");
      return;
    }

    html2canvas(input, { scale: 2 }) // ✅ Improves quality
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4", true);
        const imgWidth = canvas.width * 0.264; // ✅ Convert px to mm
        const imgHeight = canvas.height * 0.264;
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 0;
        pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save("invoice.pdf");
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
        alert("Failed to generate PDF. Please try again.");
      });
  };

  return (
    <>
      {/* Invoice Preview */}
      <div ref={pdfRef} id="print-container">
        <HeaderComponent />
        <InvoiceDetails />
        <BillingComponent />
        <ItemTable />
        <MidComponent />
        <TermsAndConditions />
        <FooterSec />
      </div>

      {/* Download & Print Buttons */}
      <div className="fixed bottom-4 right-4 flex space-x-2 print:hidden">
        <button
          onClick={printInvoice} // ✅ Calls print function instead of downloadPDF
          className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          aria-label="Print"
          title=' Print'
        >
          <FaPrint size={20} />
        </button>
        <button
          onClick={downloadPDF}
          className="flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          aria-label="Download PDF"
          title="Download PDF"
        >
          <FaDownload size={20} />
        </button>
      </div>
    </>
  );
};

export default App;
