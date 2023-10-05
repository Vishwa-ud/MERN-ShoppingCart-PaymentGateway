import React, { useState } from 'react';
import './Payment.css';
import InputMask from 'react-input-mask';

const Payment = () => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear the error message when the user starts typing again
  };

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validateCardHolderName = (name) => {
    // Regular expression to allow only letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const validateExpiryDate = (expiryDate) => {
    // Check if the entered expiry date is a valid future date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() is 0-based
    const enteredDateParts = expiryDate.split('/');
    if (enteredDateParts.length === 2) {
      const enteredMonth = parseInt(enteredDateParts[0], 10);
      const enteredYear = parseInt(enteredDateParts[1], 10) + 2000; // Assuming 20xx format for the year
      if (
        !isNaN(enteredMonth) &&
        !isNaN(enteredYear) &&
        enteredMonth >= 1 &&
        enteredMonth <= 12 &&
        (enteredYear > currentYear || (enteredYear === currentYear && enteredMonth > currentMonth))
      ) {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Validate email
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    // Validate phone number
    if (!formData.phoneNumber) {
      validationErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = 'Phone number must contain only digits';
    }

    // Validate card holder name
    if (!formData.cardHolderName) {
        validationErrors.cardHolderName = 'Card holder name is required';
      } else if (!validateCardHolderName(formData.cardHolderName)) {
        validationErrors.cardHolderName = 'Invalid characters in the name';
      }

    // Validate card number
if (!formData.cardNumber) {
    validationErrors.cardNumber = 'Card number is required';
  } else {
    const cleanedCardNumber = formData.cardNumber.replace(/\s/g, ''); // Remove spaces
    if (!/^\d{16}$/.test(cleanedCardNumber)) {
      validationErrors.cardNumber = 'Card number must be 16 digits long';
    }
  }

    // Validate expiry date
    if (!formData.expiryDate) {
        validationErrors.expiryDate = 'Expiry date is required';
      } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
        validationErrors.expiryDate = 'Expiry date must be in the format MM/YY';
      } else if (!validateExpiryDate(formData.expiryDate)) {
        validationErrors.expiryDate = 'Expiry date must be a future date';
      }

    // Validate CVV
    if (!formData.cvv) {
      validationErrors.cvv = 'CVV is required';
    } else if (!/^\d{3}$/.test(formData.cvv)) {
      validationErrors.cvv = 'CVV must be a 3-digit number';
    }

    if (Object.keys(validationErrors).length === 0) {
      // If there are no errors, you can proceed with form submission
      // Here, you can add your code to handle the form submission, e.g., sending data to the server
      console.log('Form data:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="paybody">
      <div className="pmodal">
        <form className="pform" onSubmit={handleSubmit}>
          <div className="pseparator">
            <hr className="pline" />
            <p>GALAXY CINEMA PAYMENTS</p>
            <hr className="pline" />
          </div>
          <div className="credit-card-info--form">
            <div className="input_container">
              <label htmlFor="email_field" className="input_label">
                Email
              </label>
              <input
                id="email_field"
                className="input_field"
                type="text"
                name="email"
                title="Input title"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="error">{errors.email}</span>
            </div>
            <div className="input_container">
              <label htmlFor="phone_field" className="input_label">
                Phone Number
              </label>
              <input
                id="phone_field"
                className="input_field"
                type="number"
                name="phoneNumber"
                title="Input title"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <span className="error">{errors.phoneNumber}</span>
            </div>
            <div className="input_container">
              <label htmlFor="name_field" className="input_label">
                Card holder name
              </label>
              <input
                id="name_field"
                className="input_field"
                type="text"
                name="cardHolderName"
                title="Input title"
                placeholder="Enter your full name"
                value={formData.cardHolderName}
                onChange={handleChange}
              />
              <span className="error">{errors.cardHolderName}</span>
            </div>
            <div className="input_container">
              <label htmlFor="card_number_field" className="input_label">
                Card Number
              </label>
              <InputMask
              mask="9999 9999 9999 9999"
              maskChar=""
              id="card_number_field"
              className="input_field"
              type="text"
              name="cardNumber"
              title="Input title"
              placeholder="0000 0000 0000 0000"
              value={formData.cardNumber}
              onChange={handleChange}
            />
              <span className="error">{errors.cardNumber}</span>
            </div>

            <div className="input_container">
              <label htmlFor="expiry_cvv_field" className="input_label">
                Expiry Date / CVV
              </label>
              <div className="split">
                <input
                  id="expiry_field"
                  className="input_field"
                  type="text"
                  name="expiryDate"
                  title="Expiry Date"
                  placeholder="01/23"
                  value={formData.expiryDate}
                  onChange={handleChange}
                />
                <input
                  id="cvv_field"
                  className="input_field"
                  type="number"
                  name="cvv"
                  title="CVV"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                />
              </div>
              <span className="error">{errors.expiryDate}</span>
              <span className="error">{errors.cvv}</span>
            </div>
          </div>
          <button className="purchase--btn" type="submit">
            Purchace
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
