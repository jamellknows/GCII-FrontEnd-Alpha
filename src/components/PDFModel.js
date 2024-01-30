// PDFModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const PDFModal = ({ isOpen, onClose, pdfFile }) => {
  const [fileContent, setFileContent] = useState('');

  const readFile = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      setFileContent(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  React.useEffect(() => {
    if (pdfFile) {
      readFile(pdfFile);
    }
  }, [pdfFile]);

  // Custom styles for the modal overlay and content
  const customStyles = {
    overlay: {
      zIndex: 1000, // Adjust the zIndex value as needed
    },
    content: {
      zIndex: 1001, // Ensure content is above the overlay
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="PDF Modal"
      style={customStyles} // Apply custom styles
    >
      <button onClick={onClose}>Close</button>
      {fileContent && (
        <object
          data={fileContent}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>It appears you don't have a PDF plugin for this browser. No biggie... you can <a href={fileContent}>click here to download the PDF file.</a></p>
        </object>
      )}
    </Modal>
  );
};

export default PDFModal;
