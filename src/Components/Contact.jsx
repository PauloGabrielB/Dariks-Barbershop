
const Contact = () => {
  return (
    <section id="contato" className="contact-us">
      <h2 className="contact-us-title">Entre em Contato</h2>
      <div className="contact-us-buttons">
        <a href="https://api.whatsapp.com/send/?phone=5585988392477&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="contact-us-button whatsapp">
          <i className="fab fa-whatsapp"></i>
          <span>WhatsApp</span>
        </a>
        <a href="https://www.instagram.com/dariksbarbershop" target="_blank" rel="noopener noreferrer" className="contact-us-button github">
          <i className="fab fa-github"></i>
          <span>Instagram</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
