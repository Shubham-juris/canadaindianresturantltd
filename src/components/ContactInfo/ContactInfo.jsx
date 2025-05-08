import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function ContactInfo() {
  return (
    <motion.div 
      className='d-flex flex-column align-items-center'
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
        <h2 className='fs-1 mb-3 text-uppercase fw-bold'>Where to find us</h2>
        
        <p className='mb-4 d-flex align-items-center'>
          <FaMapMarkerAlt className='me-2 text-danger' /> 1935 32 Ave NE #107
Calgary, Alberta T2E 3R1, Canada
        </p>
        
        <p className='mb-4 d-flex align-items-center'>
          <FaPhoneAlt className='me-2 text-primary' /> +1 825-540-1711
        </p>
        
        <p className='mb-5 d-flex align-items-center'>
          <FaEnvelope className='me-2 text-warning' /> info.civr1@gmail.com
        </p>

        <h3 className='text-capitalize'>Opening hours</h3>
        <p className="m-0">Mon - Fri: 09:00 - 17:00</p>
        <p>Sat - Sun: 10:00 - 15:00</p>
        <section className="bg-white py-10 px-4">
  <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl font-semibold text-center text-success mb-6">Find Us Here</h2>
    <div className="rounded-lg overflow-hidden shadow-md aspect-video">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1000!2d-114.0129795!3d51.0819378!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537164e1c4c63611%3A0x410b160b4359735b!2s1935%2032%20Ave%20NE%20%23107%2C%20Calgary%2C%20AB%20T2E%207C8%2C%20Canada!5e0!3m2!1sen!2sin!4v1746701370961!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>

        
    </motion.div>
  );
}

export default ContactInfo;
