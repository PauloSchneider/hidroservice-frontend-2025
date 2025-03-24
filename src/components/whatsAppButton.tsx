import React from 'react';

import { IoLogoWhatsapp } from "react-icons/io5";
import { CompanySocialNetwork } from '@/app/globals';

const WhatsAppButton = () => {
  return (
    <a
      href={CompanySocialNetwork.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition duration-300 animate-horizontal-vibrate"
    >
        <IoLogoWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;