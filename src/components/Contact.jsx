import "../styles/Contact.css";
function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Contact Us</h2>

      <p>📸 RP Weddings Photography</p>

      <p>👤 Rajesh Pawar</p>

      <div className="contact-buttons">

        <a
          className="whatsapp-btn"
          href="https://wa.me/919579834649"
          target="_blank"
          rel="noreferrer"
        >
          💬 WhatsApp Book Now
        </a>

        <a
          className="call-btn"
          href="tel:+919579834649"
        >
          📞 Call Now
        </a>

      </div>

      <p>📧 rpphotography51@gmail.com</p>

      <a
        className="instagram-btn"
        href="https://www.instagram.com/rp_weddings.in"
        target="_blank"
        rel="noreferrer"
      >
        📸 Follow on Instagram
      </a>

      <br /><br />

      <a
        href="https://maps.app.goo.gl/2w8sz3EK5xgFD5wm7"
        target="_blank"
        rel="noreferrer"
      >
        📍 Satara Location
      </a>

    </section>
  )
}

export default Contact