import React, { useState } from "react";
import emailjs from "emailjs-com";
import Reveal from "./Reveal";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) {
      alert("Please wait 5 seconds before submitting again.");
      return;
    }

    setIsSubmitting(true);

    // Send email to the owner
    emailjs
      .sendForm(
        "service_309mpcg", // Replace with your EmailJS Service ID
        "template_lf4dhcb", // Your template for admin notifications
        e.target,
        "3jrZq8G3Wb4m0F94c" // Your public API key
      )
      .then(
        () => {
          console.log("Message sent to owner!");
        },
        (error) => {
          console.error("Failed to send message to owner:", error);
        }
      );

    // Send confirmation email to the visitor
    emailjs
      .sendForm(
        "service_309mpcg", // Same service ID
        "template_hid1y4r", // Your template for visitor confirmation
        e.target,
        "3jrZq8G3Wb4m0F94c" // Your public API key
      )
      .then(
        () => {
          alert(
            "Thank you for reaching out! A confirmation email has been sent to your email address."
          );
        },
        (error) => {
          console.error("Failed to send confirmation email:", error);
          alert("Failed to send confirmation email. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        e.target.reset(); // Reset the form after submission
      });
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-4xl font-semibold mb-5 text-gray-300">
              About <span className="text-purple-500">Me</span>
            </h3>
            <p className="text-justify leading-7 text-gray-300 w-11/12 mx-auto">
              I am Sudhanshu, a full-stack developer passionate about creating
              impactful web applications. With a strong focus on problem-solving
              and continuous learning, I aim to deliver efficient and scalable
              solutions that meet client requirements.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">Let’s connect!</p>
            <input
              type="text"
              name="from_name" // Matches the placeholder in EmailJS templates
              placeholder="Your Name ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <input
              type="email"
              name="from_email" // Matches the placeholder in EmailJS templates
              placeholder="Your Email ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <textarea
              name="message" // Matches the placeholder in EmailJS templates
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-md text-gray-100 font-semibold text-xl ${
                isSubmitting ? "bg-gray-500" : "bg-purple-600"
              }`}
            >
              {isSubmitting ? "Please wait..." : "Send Message"}
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
