import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGlobe, FaExchangeAlt, FaClipboardCheck, FaRecycle, FaTruck, FaBuilding } from 'react-icons/fa'; 
import '../component/service.css';

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  const services = [
    { icon: <FaGlobe />, title: "Import Services", text: "Streamline the process of bringing goods into India with precision and efficiency." },
    { icon: <FaExchangeAlt />, title: "Export Services", text: "Top-notch export services tailored to meet diverse client needs efficiently." },
    { icon: <FaClipboardCheck />, title: "Customs Brokerage", text: "Smooth customs clearance services maintaining compliance with regulations." },
    { icon: <FaRecycle />, title: "Supply Chain Management", text: "Optimize your supply chain for efficiency and cost-effectiveness." },
    { icon: <FaTruck />, title: "Logistics and Transportation", text: "End-to-end logistics solutions, including warehousing and transportation." },
    { icon: <FaBuilding />, title: "Trade Solutions", text: "Tailored trade solutions to meet the unique needs of various industries." }
  ];

  return (
    <div className="container my-5">
      <center>
        <h2 className="services-header" data-aos="fade-up">
          <b>Our Services</b>
        </h2>
        <p className="services-subtext" data-aos="fade-up" data-aos-delay="200">
          At Akarswift Global, we offer comprehensive trade solutions tailored to meet your unique needs.
          Our expertise ensures your goods reach their destination safely and efficiently.
        </p>
      </center>
      <div className="row g-4 mt-4">
        {services.map((service, index) => (
          <div className="col-md-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="service-card text-center p-4">
              <div className="service-icon mb-3">{service.icon}</div>
              <h5 className="service-title mb-2">{service.title}</h5>
              <p className="service-text">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;