import React from "react";

const About = () => {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Welcome to <span className="font-semibold text-[#FFAD00]">FoodiesHub</span>! 
        We are passionate about bringing you the best organic and natural food products. 
        Our mission is to promote healthy living by offering products that are pure, 
        chemical-free, and sustainably sourced.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        From organic honey to nutritious dry fruits and refreshing teas, 
        we carefully select every product to ensure the highest quality. 
        Our team works closely with farmers and local producers to support 
        sustainable agriculture and deliver products you can trust.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Thank you for choosing FoodiesHub as your partner in healthy eating. 
        Together, let’s make a healthier tomorrow! 🌱
      </p>
    </section>
  );
};

export default About;
