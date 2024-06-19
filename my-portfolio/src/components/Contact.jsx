import { useState } from "react";
import emailjs from "@emailjs/browser";
import FormImage from "../assets/images/undraw_Happy_news_re_tsbd.png";
import Modal from "./Modal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ogpgh5t",
        "template_7t6ykpr",
        formData,
        "BbRQkhQgxUfW6NZt5"
      )
      .then(
        (result) => {
          setModalContent({
            title: "Message Sent!",
            message:
              "Thank you for contacting me. I'll get back to you as soon as possible.",
          });
          setModalIsOpen(true);
        },
        (error) => {
          setModalContent({
            title: "Error",
            message: "Something went wrong. Please try again later.",
          });
          setModal(true);
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-drop-line flex flex-row justify-center items-center"
    >
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        title={modalContent.title}
        message={modalContent.message}
      />
      <div>
        <img src={FormImage} alt="Contact Image" />
      </div>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              rows="3"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-bg-color text-white px-4 py-2 rounded-lg hover:bg-text-color"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
