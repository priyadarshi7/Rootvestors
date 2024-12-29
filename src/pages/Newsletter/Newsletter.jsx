import * as React from 'react';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
import NewsletterData from '../../data/NewsletterData';
import NewsletterCard from '../../components/Newsletter/NewsletterCards/NewsletterCards';
import './Newsletter.css';
import DrawerAppBar from '../../components/Navbar/Navbar';
import ContactUs from '../../components/Footer/Footer';

const Newsletter = () => {
  return (
    <>
         <DrawerAppBar/>
      <div className='newsletter-page'>
        <div className="newsletter-cards-container">
          <span className='main-text' id="main-text-2">Rootwise</span>
          <div className='newsletter-cards'>
            {NewsletterData.map((data, index) => (
              <NewsletterCard
                key={index}
                edition={data.edition}
                volume={data.volume}
                coverImage={data.coverImage}
                content={data.content}
                pdfSrc={data.pdfSrc} // Assuming your data object includes pdfSrc for each newsletter
                date={data.date}
              />
            ))}
          </div>
        </div>
        <ContactUs />
      </div>
    </>
  );
}

export default Newsletter;
