import React from "react";
import { IoDocumentSharp } from "react-icons/io5";

const Documents = () => {
  const documents = [
    {
      doc: "DVLA License",
      req: "Required",
    },
    {
      doc: "Compliance Certificate",
      req: "Required",
    },
    {
      doc: "Insurance Certificate",
      req: "Required",
    },
    {
      doc: "Proof of Address",
      req: "Required",
    },
    {
      doc: "Vehicle Plate",
      req: "Required",
    },
    {
      doc: "Hackney Badge Licence",
      req: "Required",
    },
    {
      doc: "Private Hire Badge Licence",
      req: "Required depending on what licence they are joining with",
    },
    {
      doc: "Operators License",
      req: "",
    },
    {
      doc: "Public Liability",
      req: "",
    },
    {
      doc: "Employers Liability",
      req: "",
    },
    {
      doc: "Form B",
      req: "Required",
    },
    {
      doc: "Enhanced DBS",
      req: "Required",
    },
  ];

  const docs = documents.map((doc, index) => {
    return (
      <div key={index} className="flex items-center gap-5 w-full">
        <div className="flex items-center justify-between text-sm rounded-sm py-2 px-4 w-60 shadow-md border border-gray-200">
          {doc.doc} <IoDocumentSharp />
        </div>
        <div className="text-sm">20 / 04 / 2024</div>
        <div className="text-sm">57 days</div>
        <div className="text-sm text-[#2A56FE]">View</div>
        <div className="text-xs text-red-600">{doc.req}</div>
      </div>
    );
  });

  return (
    <div className="w-1/2 pl-4 border-l">
      <div className="text-lg mt-2 mb-3">Documents and Expiry Dates</div>
      <div className="flex flex-col gap-5">{docs}</div>
      <button className="bg-[#2A56FE] text-white py-2.5 px-7 rounded-md mt-20">
        Submit
      </button>
    </div>
  );
};

export default Documents;
