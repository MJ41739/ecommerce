import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-gray-100 px-6 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 border rounded-lg"
        />
        <input
          type="number"
          placeholder="Your Phone Number"
          className="w-full mb-4 p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full mb-4 p-3 border rounded-lg"
        ></textarea>
        <button className="w-full bg-[#FFAD00] text-white py-2 rounded-lg hover:bg-[#CC5500]">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
