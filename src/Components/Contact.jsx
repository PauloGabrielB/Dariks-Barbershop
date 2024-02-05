import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Contact = () => {
  return (
    <section id="contato" className="contact-us">
      <h2 className="contact-us-title">Contato</h2>
      <div className="contact-us-buttons">
        <a href="https://api.whatsapp.com/send/?phone=5585988392477&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="contact-us-button whatsapp">
        <FontAwesomeIcon className='icon' icon={faWhatsapp} />
        </a>
        <a href="https://www.instagram.com/dariksbarbershop" target="_blank" rel="noopener noreferrer" className="contact-us-button github">
        <FontAwesomeIcon className='icon' icon={faInstagram} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
