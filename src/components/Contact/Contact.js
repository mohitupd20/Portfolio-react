import React, { useState } from "react";
import {
  ContactWrapper,
  FormWrapper,
  FormField,
  SubmitButton,
} from "./ContactElements";
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.contactNo && formData.email) {
      console.log("Form Data Submitted: ", formData);
      alert("Form Submitted Successfully!");

      setFormData({
        name: "",
        contactNo: "",
        email: "",
      });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            <FormWrapper onSubmit={handleSubmit}>
              <FormField>
                <label>
                  <strong>Name</strong>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </FormField>
              <FormField>
                <label>
                  <strong>Contact No.</strong>
                </label>
                <input
                  type="text"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleInputChange}
                  placeholder="Enter your contact number"
                  required
                />
              </FormField>
              <FormField>
                <label>
                  <strong>E-mail</strong>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </FormField>
              <SubmitButton type="submit">Submit</SubmitButton>
            </FormWrapper>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
