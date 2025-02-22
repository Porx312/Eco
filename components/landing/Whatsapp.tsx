import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "+34695866771"; // Reemplaza con tu número de WhatsApp sin espacios ni símbolos
  const message = encodeURIComponent(
    "¡Hola! Estoy interesado en sus visita para ver sus purificadores de agua.",
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center gap-2"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
