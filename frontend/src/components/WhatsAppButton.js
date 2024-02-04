// WhatsAppButton.js
import './whatsapp.css'
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace 'your-phone-number' with your actual phone number
    const phoneNumber = 'your-phone-number';
    const whatsappLink = `https://wa.me/${8435776053}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="whatsapp-container">
      <div
        className="whatsapp-icon"
        onClick={handleWhatsAppClick}
        title="Click to open WhatsApp"
      >
        <FaWhatsapp size={40} color="#25d366" />
      </div>
    </div>
  );
};

export default WhatsAppButton;
