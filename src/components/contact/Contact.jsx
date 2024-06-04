import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { MdOutlineMail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import { useSpring, animated } from 'react-spring';

const Contact = () => {
  const animatedBackground = useSpring({
    from: { background: 'linear-gradient(to right, #2e3b48, #485864)' },
    to: { background: 'linear-gradient(to right, #1a232f, #2a3a4a)' },
    config: { duration: 5000 }, // Adjust animation duration
  });

  // Text color for dark theme
  const textColor = 'text-gray-300';

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x21gjlf",
        "template_8w28dxb",
        form.current,
        "GJr_G6h4by6JhP5u2"
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
  };

  return (
    <animated.div style={animatedBackground} id="contact" className="py-10">
      <div className="container mx-auto">
        <h5 className="text-center text-lg text-blue-600">Get In Touch</h5>
        <h2 className="text-blue-500 text-center p-2 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Contact Us
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <MdOutlineMail className="text-4xl text-blue-600 mb-2 mx-auto" />
            <h4 className="text-xl font-semibold">Email</h4>
            <h5 className="text-gray-600">edcell@vnrvjiet.in</h5>
            <a
              href="mailto:sohailsk1107@gmail.com"
              target="_blank"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Send a Message
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <FiInstagram className="text-4xl text-blue-600 mb-2 mx-auto" />
            <h4 className="text-xl font-semibold">Instagram</h4>
            <h5 className="text-gray-600">ed_cell_vnrvjiet</h5>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Send a Message
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <BsWhatsapp className="text-4xl text-blue-600 mb-2 mx-auto" />
            <h4 className="text-xl font-semibold">WhatsApp</h4>
            <h5 className="text-gray-600">+91 48374238472</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+916304778548"
              target="_blank"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Send a Message
            </a>
          </div>
        </div>

        <div className="mt-12">
          <form onSubmit={sendEmail} ref={form} className="max-w-md mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full px-4 py-2 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
            >
              <div className="flex items-center">
                <i>
                  <TbSend className="text-xl mr-2" />
                </i>
                <span>Send</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </animated.div>
  );
};

export default Contact;
