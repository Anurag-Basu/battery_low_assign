import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
const useResult = () => {
  const componentPDF = useRef<HTMLDivElement>(null);
  const handleDownloadPdf = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Userdata",
    onAfterPrint: () => alert("PDF Downloaded..."),
  });
  return {
    componentPDF,
    handleDownloadPdf,
  };
};

export default useResult;
