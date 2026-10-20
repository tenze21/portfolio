import { HiOutlineMail } from "react-icons/hi";
import { LiaTelegram } from "react-icons/lia";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsSubstack } from "react-icons/bs";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="header">
        <h2>Contact Me</h2>
        <p className="sub-header">We can discuss tech, philosophy and books.</p>
      </div>
      <div className="grid-container">
        <aside className="contact__sidebar">
          <div className="card">
            <h3>Get in Touch</h3>
            <ul className="info-list">
              <li className="info-item">
                <HiOutlineMail color="white" className="icon" />
                <div>
                  <p>Email</p>
                  <a href="mailto:tenzinchoda365@gmail.com">
                    tenzinchoda365@gmail.com
                  </a>
                </div>
              </li>
              <li className="info-item">
                <LiaTelegram color="white" className="icon" />
                <div>
                  <p>Telegram</p>
                  <a href="https://t.me/tenze_21">Chat on Telegram</a>
                </div>
              </li>
              <li className="info-item">
                <MdOutlineLocationOn color="white" className="icon" />
                <div>
                  <p>Location</p>
                  <p className="text-gray">Thimphu, Bhutan</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>Connect With Me</h3>
            <div className="socials">
              <a href="https://www.github.com/tenze21" target="_blank">
                <FiGithub color="white" size="1.2rem" />
              </a>
              <a
                href="https://www.linkedin.com/in/tenzin-choda"
                target="_blank"
              >
                <FaLinkedinIn color="white" size="1.2rem" />
              </a>
              <a href="https://substack.com/@tenze21" target="_blank">
                <BsSubstack color="white" size="1.2rem" />
              </a>
            </div>
          </div>
        </aside>
        <form className="card form-container">
          <h3 className="card__title span-all">Send Me a Message</h3>
          <div className="form-field">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required placeholder="John Doe"/>
          </div>
          <div className="form-field">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required placeholder="john@example.com"/>
          </div>
          <div className="form-field span-all">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required placeholder="hello world"/>
          </div>
          <div className="form-field span-all">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              required
              maxLength={500}
              minLength={10}
              rows={6}
              placeholder="Your mesage here..."
            ></textarea>
          </div>
          <button className="btn span-all" type="submit" disabled>
            Send Message <LuSend color="white" />
          </button>
        </form>
      </div>
    </section>
  );
}
