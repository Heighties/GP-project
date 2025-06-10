import React, { useState } from "react";
import EndCard from "../../components/Card3D/EndCard";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mkgwwekq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message");
    }
  };

  // const handleFocus = (event) => {
  //   const element = event.target;
  //   const y = element.getBoundingClientRect().top + window.scrollY;
  //   window.scrollTo({ top: y - 50, behavior: 'smooth' });
  // };

  const handleFocus = (event) => {
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        const element = event.target;
        // const y = element.getBoundingClientRect().top + window.pageYOffset;
        const y = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y - 50, behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full mt-8 lg:mt-12 xl:mt-32 relative [perspective:1000px] contact-section mb-12">
      <div className="text-center mb-6">
        <h1 className="font-bold text-white text-2xl xl:text-4xl mb-3">
          Me contacter
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
      <div className="xl:p-8 mt-8 xl:mt-0 rounded-lg xl:w-[80%]">
        {/* Formulaire de contact */}
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center md:flex-row xl:flex-row w-full h-full md:gap-10 xl:gap-24">
            <div className="flex flex-col w-3/4 xl:w-1/2 gap-2">
              <div className="flex flex-row gap-4">
                <div className="w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block text-white text-sm font-semibold mb-1"
                  >
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full border border-gray-300 rounded-md xl:py-2 px-3"
                    onChange={handleChange}
                    onFocus={handleFocus}
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-white text-sm font-semibold mb-1"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full border border-gray-300 rounded-md xl:py-2 px-3"
                    onChange={handleChange}
                    onFocus={handleFocus}
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-semibold mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md xl:py-2 px-3"
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="subject"
                  className="block text-white text-sm font-semibold mb-1"
                >
                  Objet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full border border-gray-300 rounded-md xl:py-2 px-3"
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </div>
            </div>
            <div className="w-3/4 h-32 md:w-1/2 xl:w-1/2 xl:h-[198px]">
              <label
                htmlFor="message"
                className="block text-white text-sm font-semibold mb-1"
              >
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full h-full border border-gray-300 rounded-md resize-none"
                rows="10"
                onChange={handleChange}
                onFocus={handleFocus}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-slate-700 text-white border-2 border-slate-400 font-bold py-2 px-4 mt-10 xl:w-1/6 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Envoyer
          </button>
        </form>
      </div>
      <EndCard />
    </div>
  );
};

export default Contact;
