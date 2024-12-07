import React, { useState, useEffect } from "react";
import { H2 } from "./Text/Heading";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Paragraph from "./Text/Paragraph";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const form = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function GetInTouch() {
  const [isFormOk, setIsFormOk] = useState({
    status: true,
    error: "",
  });
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [formData, setFormData] = useState<FormData>(form);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // open gmail
  const handleEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    // window.location.href =
    //   'https://mail.google.com/mail/?view=cm&fs=1&to=recipient@example.com&cc=sender@example.com&subject=Your%20Subject&body=Your%20Message'

    e.preventDefault();
    setIsFormSubmitted(false);
    if (!isFormTouched) {
      // Only validate if the form has been touched
      return;
    }
    const requiredFields = ["fullName", "email", "subject", "message"];

    let formError = "Fill out all necessary fields please";

    const areRequiredFieldsPresent = requiredFields.every(
      (key) => formData[key as keyof FormData] !== ""
    );

    areRequiredFieldsPresent && (formError = "");

    const isPhoneValid = !formData.phone || /^[0-9]{10}$/.test(formData.phone);

    !isPhoneValid && (formError = "Please check your phone number");

    setIsFormOk({
      ...isFormOk,
      status: areRequiredFieldsPresent && isPhoneValid,
      error: formError,
    });

    if (formError) {
      return;
    }

    // submit the form (call api)
    try {
      const subject = `${formData.fullName} - ${formData.subject} - ${formData.phone}`;
      const message = `${formData.message}`;
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=staarcoding@gmail.com&su=${subject}&body=${message}`;
      window.open(mailtoLink, "_blank");

      // Handle success
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error
    } finally {
      setFormData(form);
    }
  };
  const formHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setIsFormTouched(true);
  };

  const requiredFields = ["fullName", "email", "subject", "message"];
  useEffect(() => {
    if (isFormSubmitted) {
      setTimeout(() => {
        setIsFormSubmitted(false);
      }, 10000);
    }
  }, [isFormSubmitted]);
  return (
    <section id="get-in-touch" className="my-16">
      <H2>Get in Touch</H2>
      <div className="flex flex-col md:flex-row max-w-[90%] md:max-w-[80%] mx-auto justify-between">
        <div className="flex flex-col">
          <div className="mb-4">
            <Image
              src="/customer-support.jpg" // Replace with the actual image path
              alt="Customer Support Technician"
              width={700}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center items-start space-y-4">
            <Paragraph>
              Have feedback or looking to design a similar app? Leave us a
              message, and we’ll get back to you promptly!
            </Paragraph>
            <div className="flex items-center space-x-4 text-white">
              <FaEnvelope className="text-2xl" />
              <span>
                Email:{" "}
                <a
                  href="mailto:staarcoding@gmail.com"
                  className="text-primary-clr"
                >
                  staarcoding@gmail.com
                </a>
              </span>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <FaPhoneAlt className="text-2xl" />
              <span>
                Phone:{" "}
                <a href="tel:+919XXXXXXXXX" className="text-primary-clr">
                  +1-(902)802-8894
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Right side: Form  */}

        <div className="flex w-full max-w-lg flex-col items-center justify-center">
          <div className="w-[100%] md:mt-0 mt-5 bg-white p-6 rounded-lg shadow-lg">
            {/* error and success messages */}
            <div>
              {!isFormOk.status && (
                <p className="text-center text-sm text-red-500">
                  {isFormOk.error}
                </p>
              )}

              {isFormSubmitted && (
                <p className="text-center text-sm text-green-500">
                  Got your message! We&lsquo;ll get back to you in 24 hours
                </p>
              )}
            </div>

            <form onSubmit={handleEmail}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Name
                </label>
                <input
                  onChange={formHandler}
                  value={formData.fullName}
                  name="fullName"
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-md outline-primary-clr"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email
                </label>

                <input
                  onChange={formHandler}
                  value={formData.email}
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-md outline-primary-clr"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Phone
                </label>

                <input
                  onChange={formHandler}
                  value={formData.phone}
                  type="text"
                  name="phone"
                  id="phone"
                  className="w-full p-2 border border-gray-300 rounded-md outline-primary-clr"
                  placeholder="Your Phone number"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Subject
                </label>

                <input
                  onChange={formHandler}
                  value={formData.subject}
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full p-2 border border-gray-300 rounded-md outline-primary-clr"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Message
                </label>

                <textarea
                  onChange={formHandler}
                  value={formData.message}
                  id="message"
                  name="message"
                  rows={8}
                  className="w-full p-2 border border-gray-300 rounded-md outline-primary-clr"
                  placeholder="Feel free to share your thoughts with us"
                />
              </div>
              <button className="w-full py-2 bg-primary-clr text-white rounded-md hover:bg-primary-clr-dark transition-colors">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
