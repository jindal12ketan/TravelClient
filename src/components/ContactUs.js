import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    address: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (isFormValid()) {
      try {
        const response = await fetch('http://localhost:7070/form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Form submitted successfully');
        } else {
          console.error('Error submitting form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  const isFormValid = () => {
    const { name, lastname, email, password, age, gender, address } = formData;
    return (
      name !== '' &&
      lastname !== '' &&
      email !== '' &&
      password !== '' &&
      age !== '' &&
      gender !== '' &&
      address !== ''
    );
  };

  const renderInputField = (label, type, name) => {
    const value = formData[label.toLowerCase()];
    return (
      <div className="col-md-6">
        <label htmlFor={label.toLowerCase()} className="form-label">
          {label}:
        </label>
        <input
          type={type}
          id={label.toLowerCase()}
          className="form-control"
          name={label.toLowerCase()}
          value={value}
          onChange={handleInputChange}
        />
        {formSubmitted && value === '' && (
          <div className="error">Please enter your {label.toLowerCase()}</div>
        )}
      </div>
    );
  };

  return (
    <div className="container-fluid contact-us">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <form onSubmit={handleSubmit} className="pt-4">
            <div className="row">
              {renderInputField('Name', 'text')}
              {renderInputField('LastName', 'text')}
            </div>
            <div className="row">
              {renderInputField('Email', 'email')}
              {renderInputField('Password', 'password')}
            </div>
            <div className="row">
              {renderInputField('Age', 'number')}
              <div className="col-md-6">
                <label htmlFor="gender" className="form-label">
                  Gender:
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="form-control"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {formSubmitted && formData.gender === '' && (
                  <div className="error">Please select your gender</div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label htmlFor="address" className="form-label">
                  Address:
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleInputChange}
                ></textarea>
                {formSubmitted && formData.address === '' && (
                  <div className="error">Please enter your address</div>
                )}
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

