import React, { useRef, useState } from "react";
import "../assets/css/Modal.css";

function CustomModal({ selectedDish, handlePayment, onClose }) {
  const modalRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [customers, setcustomers] = useState(1);
  const [visitDate, setvisitDate] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [visitDateError, setvisitDateError] = useState("");

  const dishPrice = selectedDish ? parseFloat(selectedDish.price.replace("$", "")) : 0;

  const calculateTotal = () => {
    const subtotal = dishPrice * customers;
    const tax = subtotal * 0.1;
    return { subtotal, tax, total: subtotal + tax };
  };

  const { subtotal, tax, total } = calculateTotal();

  const validateForm = () => {
    let isValid = true;
    if (!name.trim()) {
      setNameError("Please enter your full name.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email.includes("@") || !email.trim()) {
      setEmailError("Please enter a valid email address including @.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!visitDate.trim()) {
      setvisitDateError("Please select a visit date.");
      isValid = false;
    } else {
      setvisitDateError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handlePayment(total);
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <dialog className="custom-modal" ref={modalRef} open>
        <h1 className="book-title">Book Dish</h1>
        <span>* Indicates a required area.</span>

        <form className="formbox" onSubmit={handleSubmit}>
          <div className="details">
            <label className="modal-name" htmlFor="user-name">Name: *</label>
            <input
              onChange={(e) => setName(e.target.value)}
              id="user-name"
              className="inputname"
              name="username"
              value={name}
              type="text"
            />
            {nameError && <p className="error-message">{nameError}</p>}

            <label htmlFor="user-email" className="modal-email">Email: *</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="inputemail"
              name="useremail"
              value={email}
              id="user-email"
              type="text"
            />
            {emailError && <p className="error-message">{emailError}</p>}

            <label htmlFor="no-customers" className="modal-customers">Number of People:</label>
            <input
              onChange={(e) => setcustomers(Math.max(1, parseInt(e.target.value, 10)))}
              className="inputcustomers"
              name="unocustomers"
              value={customers}
              id="no-customers"
              type="number"
              min="1"
            />

            <label htmlFor="user-visitdate" className="modal-visitDate">Date: *</label>
            <input
              onChange={(e) => setvisitDate(e.target.value)}
              className="inputvisitDate"
              name="uservisitdate"
              value={visitDate}
              id="user-visitdate"
              type="date"
            />
            {visitDateError && <p className="error-message">{visitDateError}</p>}

            <div className="reservation-card">
              <div className="cost">
                <span>
                  ${dishPrice.toFixed(2)} x {customers} {customers === 1 ? "guest" : "guests"}
                </span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="cost">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <hr className="solid" />
              <div className="total-cost">
                <h2 className="calculate-total">Total</h2>
                <h3 className="calculate-result">${total.toFixed(2)}</h3>
              </div>
            </div>
          </div>

          <div className="modal-buttons">
            <button type="submit" className="confirm" aria-label="confirm information">
              Confirm
            </button>
            <button
              type="button"
              onClick={onClose}
              className="cancel"
              aria-label="cancel information submitting"
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default CustomModal;
