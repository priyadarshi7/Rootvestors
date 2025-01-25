import * as React from 'react';
import { useState } from 'react';
import { Modal, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LOGO from "../../../assets/logos/LOGO.png";
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// PdfPreview Component
const PdfPreview = ({ src, onClose }) => {
  const defaultPlugin = defaultLayoutPlugin();

  return (
    <Modal open onClose={onClose}>
      <div
        style={{
          background: 'white',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '90%',
          overflowY: 'auto',
          borderRadius: '8px',
          padding: '10px',
        }}
      >
        <Button
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'black',
            color: 'white',
            zIndex: 1000,
          }}
        >
          Close
        </Button>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl={src} plugins={[defaultPlugin]} />
        </Worker>
      </div>
    </Modal>
  );
};

// NewsletterCard Component
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

  return (
    <div>
      <Card
        sx={{
          background: "white",
          width: 345,
          height: 500,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0px 10px 20px 5px rgba(0, 0, 0, 0.9)',
          transition: '0.3s',
          '&:hover': {
            boxShadow: '0px 15px 30px 10px rgba(0, 0, 0, 1)',
          },
          padding: "10px",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'transparent' }} aria-label="logo">
              <img src={LOGO} height="100%" alt="logo" />
            </Avatar>
          }
          title={`Edition: ${props.edition} Volume: ${props.volume}`}
          subheader={props.date}
          titleTypographyProps={{
            sx: {
              fontWeight: 'bold',
              color: "black",
            },
          }}
          subheaderTypographyProps={{
            sx: {
              fontWeight: 'bold',
              color: "black",
            },
          }}
        />
        <CardMedia
          component="img"
          sx={{
            height: 200,
            objectFit: 'cover',
            borderRadius: "18px",
          }}
          image={props.coverImage}
          alt="Newsletter Cover"
        />
        <CardContent
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            color: "black",
          }}
        >
          <Typography variant="body2" sx={{ textWrap: 'wrap' }}>
            {props.content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            sx={{
              background: 'white',
              color: 'black',
              marginLeft: 'auto',
              marginRight: '10px',
              border:"2px solid #CCEB58",
              borderRadius:"16px"
            }}
            onClick={handleViewClick}
          >
            View
          </Button>
          <Button
            sx={{
              background: 'white',
              color: 'black',
              marginRight: "auto",
              border:"2px solid black",
              borderRadius:"18px"
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
