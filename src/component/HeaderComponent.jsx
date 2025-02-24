

// import React from 'react';

// export default function HeaderComponent() {
//   return (
//     <div className="w-full mx-auto flex justify-between items-center border-b"> 
//       <div className="flex items-center space-x-2">
//         <img
//           // src="https://www.alayastays.com/assets/images/icons/png/ogimage.png"
//           src="https://www.elivaas.com/assets/images/icons/png/ogimage.png"
//           alt="Company Logo"
//           className="h-20 w-20 object-contain" // Reduced logo size
//         />
//         <div>
//           <h1 className="font-bold text-[11px]">Ishanee Villas Tech Private Limited</h1>
//           <p className="text-[9px] leading-[1.2] font-bold text-left">
//             CTA252, The Crest, <br />
//             DLF 5,
//             Park Drive, <br />
//             Gurugram Haryana 122011, 
//             India
//           </p>
//           <p className="text-[9px] font-medium mt-0.5 text-left">GSTIN 06AAGCI9865C1ZD</p>
//         </div>
//       </div>
//       <div className="ml-4">
//         <h1 className="text-2xl font-bold">TAX INVOICE</h1> {/* Reduced font size */}
//       </div>
//     </div>
//   );
// }









// import React, { useState } from 'react';

// export default function HeaderComponent() {
//   // ✅ State to toggle between images
//   const [imageSrc, setImageSrc] = useState("https://www.alayastays.com/assets/images/icons/png/ogimage.png");

//   // ✅ Function to toggle images
//   const toggleImage = () => {
//     setImageSrc(prevSrc =>
//       prevSrc === "https://www.alayastays.com/assets/images/icons/png/ogimage.png"
//         ? "https://www.elivaas.com/assets/images/icons/png/ogimage.png"
//         : ""
//     );
//   };

//   return (
//     <div className="w-full mx-auto flex justify-between items-center border">
//       {/* ✅ Logo Section */}
//       <div className="flex items-center space-x-4">
//         {/* ✅ Larger Image without increasing component height */}
//         <div className="w-[150px] flex items-center justify-center overflow-hidden ml-2">
//           <img
//             src={imageSrc}
//             alt="Company Logo"
//             className="max-w-full max-h-full object-contain"
//           />
//         </div>
        
//         {/* ✅ Company Details */}
//         <div>
//           <h1 className="font-bold text-[11px]">Ishanee Villas Tech Private Limited</h1>
//           <p className="text-[9px] leading-[1.2] font-bold text-left">
//             CTA252, The Crest, <br />
//             DLF 5, Park Drive, <br />
//             Gurugram Haryana 122011, India
//           </p>
//           <p className="text-[9px] font-medium mt-0.5 text-left">GSTIN 06AAGCI9865C1ZD</p>
//         </div>
//       </div>

//       {/* ✅ Invoice Title */}
//       <div className="flex flex-col justify-end items-end h-full self-end">
//         <h1 className="text-3xl">TAX INVOICE</h1>
//       </div>

//       {/* ✅ Image Toggle Button (Hidden in Print Mode) */}
//       <button
//         onClick={toggleImage}
//         className="ml-2 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition print:hidden"
//       >
//         Change Logo
//       </button>
//     </div>
//   );
// }




























import React, { useState } from 'react';

export default function HeaderComponent() {
  // ✅ State to toggle between images
  const [imageSrc, setImageSrc] = useState("https://www.alayastays.com/assets/images/icons/png/ogimage.png");

  // ✅ Function to toggle images (including "No Image" option)
  const toggleImage = () => {
    setImageSrc(prevSrc => {
      if (prevSrc === "https://www.alayastays.com/assets/images/icons/png/ogimage.png") {
        return "https://www.elivaas.com/assets/images/icons/png/ogimage.png"; 
      } else if (prevSrc === "https://www.elivaas.com/assets/images/icons/png/ogimage.png") {
        return ""; // ✅ Remove image completely
      } else {
        return "https://www.alayastays.com/assets/images/icons/png/ogimage.png"; // ✅ Reset to first image
      }
    });
  };

  return (
    <div className="w-full mx-auto flex justify-between items-center border relative">
      {/* ✅ Logo Section */}
      <div className="flex items-center space-x-4">
        {/* ✅ Conditionally Render Image (Hides when no image is selected) */}
        {imageSrc && (
          <div className="w-[150px] flex items-center justify-center overflow-hidden ml-2">
            <img
              src={imageSrc}
              alt="Company Logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}

        {/* ✅ Company Details */}
        <div className="ml-3">
          <h1 className="font-bold text-[11px]">Ishanee Villas Tech Private Limited</h1>
          <p className="text-[9px] leading-[1.2] font-bold text-left">
            CTA252, The Crest, <br />
            DLF 5, Park Drive, <br />
            Gurugram Haryana 122011, India
          </p>
          <p className="text-[9px] font-medium mt-0.5 text-left">GSTIN 06AAGCI9865C1ZD</p>
        </div>
      </div>

      {/* ✅ Invoice Title */}
      <div className="flex flex-col justify-end items-end h-full self-end">
        <h1 className="text-3xl font-normal">TAX INVOICE</h1>
      </div>

      {/* ✅ Image Toggle Button (Hidden in Print Mode) */}
      <button
        onClick={toggleImage}
        className="ml-2 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition print:hidden"
      >
        {imageSrc ? "Change Logo" : "Show Logo"}
      </button>
    </div>
  );
}
