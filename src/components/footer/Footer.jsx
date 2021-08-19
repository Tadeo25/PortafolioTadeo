import React from "react";
import emailjs from "emailjs-com";
import "./Footer.css";

export default function Footer() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f6pbpww",
        "template_k1grj0d",
        e.target,
        "user_cy3OAPOdFgHVinsRMxEIj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <footer className="footer">
        <div className="footer-info">
          <h1>Tadeo Mocoroa</h1>
          <p>Mar del Plata, Buenos Aires, Argentina</p>
        </div>
        <div className="footer-contact">
          <h3>Contact me</h3>
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input className="form-send" type="submit" value="SEND" />
          </form>
        </div>
        <div className="footer-sns">
          <div className="design-by">
            Tambien pudes contactarme en mis redes
          </div>
          <div className="sns-links">
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin linkedin"></i>
            </a>
            <a href="https://www.instagram.com/tade_mocoroa/" 
               target="_blank"
               rel="noreferrer"
               >
              <i className="fab fa-instagram instagram"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=543816243016&text=Hola%20Tadeo,%20me%20interesa%20trabajar%20contigo"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp whatsapp"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
