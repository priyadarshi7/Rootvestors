import * as React from 'react';
import { useState, useEffect } from 'react';
import { pdfjs } from 'pdfjs-dist/legacy/build/pdf';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Modal, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const PdfPreview = ({ src, onClose }) => {
  const [pdfDocument, setPdfDocument] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scrollableElement, setScrollableElement] = useState(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        console.log('Loading PDF from source:', src);
        const doc = await pdfjs.getDocument(src).promise;
        setPdfDocument(doc);
        console.log('PDF loaded successfully:', doc);
      } catch (error) {
        console.error('Failed to load PDF:', error);
      }
    };

    loadPdf();
  }, [src]);

  useEffect(() => {
    if (!pdfDocument || !scrollableElement) return;

    const handleScroll = (event) => {
      const target = event.target;
      if (target.scrollHeight - target.scrollTop === target.clientHeight) {
        // Bottom of the PDF, load next page
        goToNextPage();
      }
    };

    scrollableElement.addEventListener('scroll', handleScroll);

    return () => {
      scrollableElement.removeEventListener('scroll', handleScroll);
    };
  }, [pdfDocument, scrollableElement]);

  const goToNextPage = () => {
    if (pdfDocument && pageNumber < pdfDocument.numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const newPlugin = defaultLayoutPlugin();

  return (
    <Modal open onClose={onClose}>
      <div ref={setScrollableElement} className="pdf-preview-modal-content" style={{
         background: 'white', position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)', width: '80%', height: '95%', overflowY: 'auto'
      }}>
        <Button onClick={onClose} sx={{
          position: 'absolute', top: '10px', right: '10px', background: 'black', color: 'white'
        }}>Close</Button>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl={src} plugins={[newPlugin]}/>
        </Worker>
      </div>
    </Modal>
  );
};

export default function NewsletterCard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = props.pdfSrc;
    link.download = 'newsletter.pdf';
    link.click();
  };

  const handleShareClick = () => {
    // Assuming a URL to share the newsletter
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl);
    alert('Newsletter link copied to clipboard!');
  };

  return (
    <div>
      <Card
        sx={{
          background:"transparent",
          color:"white",
          maxWidth: 345,
          height: 500, // Fixed card height
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: '16px',
          overflow: 'hidden', // Prevents content from overflowing the card
          boxShadow: '0px 10px 20px 5px rgba(0, 0, 0, 0.9)', // Darker black shadow with more spread
          transition: '0.3s', // Smooth transition for hover effect
          '&:hover': {
            boxShadow: '0px 15px 30px 10px rgba(0, 0, 0, 1)', // Even darker and more spread on hover
          },
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
              <img src="/3D_Logo.png" height="100%" alt="logo" />
            </Avatar>
          }
          title={`Edition: ${props.edition} Volume: ${props.volume}`}
          subheader={props.date}
          titleTypographyProps={{
            sx: {
              fontWeight: 'bold',
            },
          }}
          subheaderTypographyProps={{
            sx: {
              fontWeight: 'bold',
              color:"white",
            },
          }}
        />
        <CardMedia
          component="img"
          sx={{
            height: 200, // Fixed image height
            objectFit: 'cover', // Ensures the image covers the area without distortion
          }}
          image={props.coverImage}
          alt="Rootvestors"
        />
        <CardContent
          sx={{
            overflow: 'hidden', // Prevents content overflow
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap', // Keeps the content in a single line
          }}
        >
          <Typography variant="body2" sx={{ textWrap: 'wrap' }}>
            {props.content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            sx={{
              background: 'black',
              color: 'white',
              marginLeft: 'auto',
              marginRight: '10px',
            }}
            onClick={handleViewClick}
          >
            View
          </Button>
          <Button
            sx={{
              background: 'black',
              color: 'white',
              marginRight:"auto"
            }}
            onClick={handleDownloadClick}
          >
            <FileDownloadIcon />
          </Button>
        </CardActions>
      </Card>
      {isModalOpen && <PdfPreview src={props.pdfSrc} onClose={handleCloseModal} />}
    </div>
  );
}
