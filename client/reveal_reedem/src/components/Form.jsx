//components/Form.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles.css';
import axiosInstance from './axiosInstance'; // Import your configured Axios instance

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({
    platform: '',
    brandName: '',
    productNameOrLink: '',
    category: '',
    voucherCode: '',
    dateOfReceiving: '',
    dateOfExpiry: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/voucher', formData);

      if (response.status === 201) {
        alert('Voucher created successfully!');
        console.log('Response Data: ', response.data);
        onClose(); // Close the form after successful submission
      } else {
        alert('Failed to create voucher');
        console.error('Failed to create voucher');
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with non-success status:', error.response.status);
        alert('Failed to create voucher');
      } else if (error.request) {
        console.error('No response received:', error.request);
        alert('Failed to create voucher');
      } else {
        console.error('Error setting up the request:', error.message);
        alert('Error occurred while creating voucher');
      }
    }
  };

  const handleClose = () => {
    onClose(); // Close the form when close button is clicked
  };

  return (
    <div className="container " >
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card wider-form p-4">
            <h2 className="mb-4">Voucher Form</h2>
            <button type="button" className="btn-close close-button" aria-label="Close" onClick={handleClose}></button>

            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label htmlFor="platform" className="form-label">Platform</label>
                  <input
                    type="text"
                    className="form-control"
                    id="platform"
                    name="platform"
                    value={formData.platform}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="brandName" className="form-label">Brand Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="brandName"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-12 mb-3">
                  <label htmlFor="productNameOrLink" className="form-label">Product Name/Link</label>
                  <input
                    type="text"
                    className="form-control"
                    id="productNameOrLink"
                    name="productNameOrLink"
                    value={formData.productNameOrLink}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label htmlFor="category" className="form-label">Category</label>
                  <div className="position-relative">
                    <select
                      className="form-control"
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="">Select Category</option>
                      <option value="Makeup Brand">Makeup Brand</option>
                      <option value="Earphones">Earphones</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Home Appliances">Home Appliances</option>
                    </select>
                    <div className="dropdown-arrow"></div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="voucherCode" className="form-label">Voucher Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="voucherCode"
                    name="voucherCode"
                    value={formData.voucherCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label htmlFor="dateOfReceiving" className="form-label">Date of Receiving</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateOfReceiving"
                    name="dateOfReceiving"
                    value={formData.dateOfReceiving}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="dateOfExpiry" className="form-label">Date of Expiry</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateOfExpiry"
                    name="dateOfExpiry"
                    value={formData.dateOfExpiry}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;


