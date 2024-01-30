// Home.js
import React, { useEffect, useRef, useState } from 'react';
import { FaReact, FaStar } from 'react-icons/fa';
import { IoMdWater, IoIosPlanet } from 'react-icons/io';
import { css } from '@emotion/react';
import { RotateLoader } from 'react-spinners';
import './Home.css';
import PNGSequence from './PNGSequence';
import EarthSvg from './earth.svg';
import { Modal, Button, Carousel } from 'react-bootstrap';
import PDFModal from '../components/PDFModel'

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import henonImg from '../research/Enhancedpositional.jpeg'
import onehotImg from '../research/onehottwohot.jpeg'
import textBlobImg from '../research/ComparativeStudy.jpeg'
import customLayerImg from '../research/CustomisedLayerArchitectures.jpeg'
import novelWordsImg from '../research/novelwordembeds.jpeg'

import customLayerPDF from '../research/CustomisedLayerArchitectures-Part1.pdf';
import henonPDF from '../research/HenonEncoding.pdf';
import oneHotPDF from '../research/OneHotEncoding.pdf';
import novelWordsPDF from '../research/Sentimental_embedding1.pdf';
import textBlobPDF from '../research/Sentimental_Tokeisation2.pdf';



const SpinningEarth = ({ openModal }) => {
  const earthRef = useRef();

  useEffect(() => {
    const earth = earthRef.current;

    const rotate = () => {
      earth.style.transform = `rotate(${(parseFloat(earth.style.transform.replace('rotate(', '').replace('deg)', '')) || 0) + 1}deg)`;
      requestAnimationFrame(rotate);
    };

    rotate();
  }, []);

  

  return (
    <img
      ref={earthRef}
      src={EarthSvg} // Use the imported SVG file as the source
      alt="Spinning Earth"
      style={{ width: '48px', height: '48px', display: 'inline-block', marginLeft: '8px' }} // Adjust width and height as needed
      onClick={openModal} // Example of calling openModal from within SpinningEarth
    />
  );
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPDFModalOpen, setPDFModalOpen] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);

  const [pdfUrl, setPdfUrl] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
    setPDFModalOpen(false);
 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModalPDF = (pdfUrl) => {
    setPdfUrl(pdfUrl);
    // setIsModalOpen(false);
    setPDFModalOpen(true);

  };

  const closeModalPDF = () => {
    setPDFModalOpen(false);
    setIsModalOpen(true);

  };
;

  

  return (
    <div className="home-content containers align-items-center justify-content-center vh-100">
      <div className="text-center justify-content-center">
        <button className="btn btn-info btn-lg" onClick={openModal}>
          Research
        </button>

        {isModalOpen && (
  <Modal show={isModalOpen} onHide={closeModal}>
    <Modal.Header closeButton>
      <Modal.Title>Research</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {/* React Bootstrap Carousel */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={henonImg} alt="First slide" onClick={() => openModalPDF(henonPDF)}/>
          <button onClick={() => openModalPDF(henonPDF)}>Open PDF Henon Encoding</button>
          <PDFModal isOpen={isPDFModalOpen} onClose={closeModalPDF} pdfUrl={henonPDF} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={customLayerImg} alt="Second slide" onClick={() => openModalPDF(customLayerPDF)} />
          <button onClick={() => openModalPDF(customLayerPDF)}>Open PDF Custom Layer</button>
          <PDFModal isOpen={isPDFModalOpen} onClose={closeModalPDF} pdfUrl={customLayerPDF} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={onehotImg} alt="Third slide" onClick={() => openModalPDF(oneHotPDF)} />
          <button onClick={() => openModalPDF(oneHotPDF)}>Open PDF One Hot Encoding</button>
          <PDFModal isOpen={isPDFModalOpen} onClose={closeModalPDF} pdfUrl={oneHotPDF} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={novelWordsImg} alt="Fourth slide" onClick={() => openModalPDF(novelWordsPDF)}/>
          <button onClick={() => openModalPDF(novelWordsPDF)}>Open PDF Novel Word Embeddings</button>
          <PDFModal isOpen={isPDFModalOpen} onClose={closeModalPDF} pdfUrl={novelWordsPDF} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={textBlobImg} alt="Fifth slide" onClick={() => openModalPDF(textBlobPDF)} />
          <button onClick={() => openModalPDF(textBlobPDF)}>Open PDF Text Blob</button>
          <PDFModal isOpen={isPDFModalOpen} onClose={closeModalPDF} pdfUrl={textBlobPDF} />
        </Carousel.Item>
        {/* Add more Carousel.Items as needed */}
      </Carousel>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={closeModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
)}
    <h2 className="mt-4 ml-4 container-fluid" style={{ display: 'flex', alignItems: 'center' }}>
      GCII <SpinningEarth openModal={openModal}/> 
    </h2>
    <p>In development</p>
  </div>
</div>
  );
};

export default Home;
