import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {

  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);

    emailjs.sendForm(
      "service_wapkvwr",
      "template_0kbh7sh",
      form.current,
      "i6EVm-oV7iivt2u_W"
    )
    .then(
      () => {
        toast.success("Message sent successfully!");
        form.current.reset();
        setSending(false);
      },
      () => {
        toast.error("Failed to send message");
        setSending(false);
      }
    );
  };

  return (
    <section className="contact-section py-5" data-aos="fade-left">
      <div className="container">

        <h2 className="text-center text-warning fw-bold mb-5">
          Contact Me
        </h2>

        <div className="row">

          <div className="col-md-5 mb-4">

            <p className="text-light">
              Feel free to reach out for collaboration or opportunities.
            </p>

            <div className="contact-item">
              <FaEnvelope className="me-2 text-warning" />
              surajpandey2007@gmail.com
            </div>

            <div className="contact-item">
              <FaPhone className="me-2 text-warning" />
              +91 9390787727
            </div>

            <div className="contact-item">
              <FaGithub className="me-2 text-warning" />
              github.com/qalock
            </div>

            <div className="contact-item">
              <FaLinkedin className="me-2 text-warning" />
              linkedin.com/in/pandeythetester/
            </div>

          </div>

          <div className="col-md-7">

            <form ref={form} onSubmit={sendEmail} className="contact-form">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-control mb-3"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-control mb-3"
                required
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="form-control mb-3"
                required
              ></textarea>

              <button
                type="submit"
                className="btn btn-warning btn-lg"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}