import React, { useState } from 'react';
import "../assets/css/Membership.css";
import Header from './Header';
import Footer from './Footer';

const Membership = ({ onNav, theme, toggleTheme }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    feedback: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [feedbackError, setFeedbackError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'fullName' && value.trim()) {
      setNameError('');
    }

    if (name === 'email' && value.includes('@')) {
      setEmailError('');
    }

    if (name === 'feedback' && value.trim()) {
      setFeedbackError('');
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!formData.fullName.trim()) {
      setNameError('Please enter your full name.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!formData.email.includes('@') || !formData.email.trim()) {
      setEmailError('Please enter a valid email address including "@".');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!formData.feedback.trim()) {
      setFeedbackError('Please enter your feedback.');
      isValid = false;
    } else {
      setFeedbackError('');
    }

    if (isValid) {
      setSubmitted(true);
    }
  };

  return (
    <div className="page-wrapper">
      <Header onNav={onNav} theme={theme} toggleTheme={toggleTheme} />
      <div className="feedback-container">
        {!submitted ? (
          <>
            <h1 className="form-title">Join Us Now</h1>
            <div className="image-container">
              <img className="image" src="/images/membership.jpg" alt="This is a welcome picture for joining membership" />
            </div>
            <p>* Indicates a required area</p>
            <form className="form" onSubmit={handleSubmitForm}>
              <div className="form-row">
                <label className="name-label" htmlFor="fullName">Full Name: *</label>
                <div className="input-container">
                  <input
                    className="name-input"
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                  {nameError && <p className="error-message">{nameError}</p>}
                </div>
              </div>

              <div className="form-row">
                <label className="email-label" htmlFor="email">Email: *</label>
                <div className="input-container">
                  <input
                    className="email-input"
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {emailError && <p className="error-message">{emailError}</p>}
                </div>
              </div>

              <div className="form-row">
                <label className="phone-label" htmlFor="phone">Phone Number:</label>
                <div className="input-container">
                  <input
                    className="phone-input"
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <label className="feedback-label" htmlFor="feedback">Write a review: *</label>
                <div className="input-container">
                  <textarea
                    className="feedback-input"
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleInputChange}
                  ></textarea>
                  {feedbackError && <p className="error-message">{feedbackError}</p>}
                </div>
              </div>

              <div className="form-row">
                <button className="submit-button" type="submit" aria-label="submit information">Submit</button>
              </div>
            </form>
          </>
        ) : (
          <div className="thank-you-message">

            <img
              src="/images/thankyou.jpg"
              alt="A picture of thank you card"
              className="thankyou-image"
            />
            <h2>Thank You!</h2>
            <h3>Your feedback has been submitted successfully.</h3>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Membership;
