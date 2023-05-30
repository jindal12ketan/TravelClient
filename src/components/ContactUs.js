import React, { Component } from 'react';
class ContactUs extends Component {
    state = {
        name: '',
        lastName: '',
        email: '',
        password: '',
        age: '',
        gender: '',
        address: '',
        formSubmitted: false
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ formSubmitted: true });
        if (this.isFormValid()) {
            // Submit form data
            console.log('Form submitted:', this.state);
        }
    };

    isFormValid = () => {
        const { name, lastName, email, password, age, gender, address } = this.state;
        return name !== '' && lastName !== '' && email !== '' && password !== '' && age !== '' && gender !== '' && address !== '';
    };

    render() {
        const { name, lastName, email, password, age, gender, address, formSubmitted } = this.state;
        return (
            <div className='container-fluid contact-us'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6 col-md-8'>
                        <form onSubmit={this.handleSubmit} className='pt-4'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label htmlFor="name" className='form-label'>Name:</label>
                                    <input type="text" id="name" className="form-control" name="name" value={name} onChange={this.handleInputChange} />
                                    {formSubmitted && name === '' && <div className="error">Please enter your name</div>}
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor="lastName" className='form-label'>Last Name:</label>
                                    <input type="text" id="lastName" className="form-control" name="lastName" value={lastName} onChange={this.handleInputChange} />
                                    {formSubmitted && lastName === '' && <div className="error">Please enter your last name</div>}
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label htmlFor="email" className='form-label'>Email:</label>
                                    <input type="email" id="email" className="form-control" name="email" value={email} onChange={this.handleInputChange} />
                                    {formSubmitted && email === '' && <div className="error">Please enter your email</div>}
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor="password" className='form-label'>Password:</label>
                                    <input type="password" id="password" className="form-control" name="password" value={password} onChange={this.handleInputChange} />
                                    {formSubmitted && password === '' && <div className="error">Please enter your password</div>}
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label htmlFor="age" className='form-label'>Age:</label>
                                    <input type="number" id="age" name="age" className="form-control" value={age} onChange={this.handleInputChange} />
                                    {formSubmitted && age === '' && <div className="error">Please enter your age</div>}
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor="gender" className='form-label'>Gender:</label>
                                    <select id="gender" name="gender" className="form-control" value={gender} onChange={this.handleInputChange}>
                                        <option value="">Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {formSubmitted && gender === '' && <div className="error">Please select your gender</div>}
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <label htmlFor="address" className='form-label'>Address:</label>
                                    <textarea id="address" name="address" className="form-control" value={address} onChange={this.handleInputChange}></textarea>
                                    {formSubmitted && address === '' && <div className="error">Please enter your address</div>}
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;
