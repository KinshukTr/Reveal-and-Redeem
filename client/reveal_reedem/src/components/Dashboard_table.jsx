//  //components/Dashboard_table.jsx
// import React, { useState, useEffect } from 'react';
// import axiosInstance from './axiosInstance'; // Adjust the path based on your file structure
// import Form from './Form';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend as BarLegend } from 'recharts';

// const Dashboard = () => {
//   const [userData, setUserData] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [vouchers, setVouchers] = useState([]);

//   const fetchUserData = async () => {
//     try {
//       const response = await axiosInstance.get('/user');
//       setUserData(response.data); // Set user data state
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const fetchVouchers = async () => {
//     try {
//       const response = await axiosInstance.get('/voucher');
//       setVouchers(response.data); // Set vouchers state
//     } catch (error) {
//       console.error('Error fetching vouchers:', error);
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//     fetchVouchers();

//     const intervalId = setInterval(() => {
//       fetchVouchers(); // Fetch vouchers periodically
//     }, 3000); // Adjust the interval time as needed (e.g., 30000 ms = 30 seconds)

//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, []);

//   const handleAddButtonClick = () => {
//     setShowForm(true);
//   };

//   const handleFormSubmit = () => {
//     setShowForm(false);
//     fetchVouchers(); // Fetch vouchers again to update the list after form submission
//   };

//   const handleDelete = async (voucherId) => {
//     try {
//       const response = await axiosInstance.delete(`/voucher/${voucherId}`);

//       if (response.status === 200) {
//         alert('Voucher deleted successfully!');
//         fetchVouchers(); // Fetch vouchers again to update the list after deletion
//       } else {
//         alert('Failed to delete voucher');
//         console.error('Failed to delete voucher');
//       }
//     } catch (error) {
//       console.error('Error deleting voucher:', error);
//       alert('Failed to delete voucher');
//     }
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//   };

//   const getCategoryData = () => {
//     const categoryCount = {};

//     vouchers.forEach((voucher) => {
//       if (categoryCount[voucher.category]) {
//         categoryCount[voucher.category]++;
//       } else {
//         categoryCount[voucher.category] = 1;
//       }
//     });

//     return Object.keys(categoryCount).map((category) => ({
//       name: category,
//       value: categoryCount[category],
//     }));
//   };

//   const getPlatformData = () => {
//     const platformCount = {};

//     vouchers.forEach((voucher) => {
//       if (platformCount[voucher.platform]) {
//         platformCount[voucher.platform]++;
//       } else {
//         platformCount[voucher.platform] = 1;
//       }
//     });

//     return Object.keys(platformCount).map((platform) => ({
//       name: platform,
//       value: platformCount[platform],
//     }));
//   };

 

//   const categoryColors = ['#3498db', '#2ecc71', '#f1c40f', '#e74c3c', '#9b59b6', '#34495e'];
//   const platformColors = ['#3498db', '#2ecc71', '#f1c40f', '#e74c3c', '#9b59b6', '#34495e'];

//   return (
//     <div className="dashboard">
//       <div className="welcome">
//         <h2>WELCOME {userData && userData.fname}</h2>
//       </div>

//       {/* Pie charts */}
//       <div className="pie-charts">
//         <div className="pie-chart-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <div style={{ width: '45%' }}>
//             <h3 style={{ whiteSpace: 'nowrap' }}>Category-wise Scratch Card Distribution</h3>
//             <ResponsiveContainer width="100%" height={400}>
//               <PieChart>
//                 <Pie
//                   data={getCategoryData()}
//                   dataKey="value"
//                   nameKey="name"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={120}
//                   fill="#8884d8"
//                   label
//                 >
//                   {getCategoryData().map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={categoryColors[index % categoryColors.length]} />
//                   ))}
//                 </Pie>
//                 <Legend layout="horizontal" verticalAlign="bottom" align="center" iconType="circle" />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//           <div style={{ width: '45%' }}>
//             <h3 style={{ whiteSpace: 'nowrap' }}>Platform-wise Scratch Card Distribution</h3>
//             <ResponsiveContainer width="100%" height={400}>
//               <PieChart>
//                 <Pie
//                   data={getPlatformData()}
//                   dataKey="value"
//                   nameKey="name"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={120}
//                   fill="#82ca9d"
//                   label
//                 >
//                   {getPlatformData().map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={platformColors[index % platformColors.length]} />
//                   ))}
//                 </Pie>
//                 <Legend layout="horizontal" verticalAlign="bottom" align="center" iconType="circle" />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* Latest Expiry Chart */}
     
//       <div className="add-scratch-card">
//         <p>Do you want to add a scratch card?</p>
//         <button className="button-form-dash" onClick={handleAddButtonClick}>
//           ADD
//         </button>
//       </div>

//       {/* Display vouchers as cards */}
//       <div className="voucher-cards">
//         {vouchers.map((voucher) => (
//           <div key={voucher._id} className="card">
//             <div className="card-body">
//               <h5 className="card-title">{voucher.brandName}</h5>
//               <p className="card-text">Platform: {voucher.platform}</p>
//               <p className="card-text">Product Name/Link: {voucher.productNameOrLink}</p>
//               <p className="card-text">Voucher Code: {voucher.voucherCode}</p>
//               <p className="card-text">Date of Receiving: {new Date(voucher.dateOfReceiving).toLocaleDateString()}</p>
//               <p className="card-text">Date of Expiry: {new Date(voucher.dateOfExpiry).toLocaleDateString()}</p>
//               <p className="card-text">Category: {voucher.category}</p>
//               <button className="btn btn-danger" onClick={() => handleDelete(voucher._id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {showForm && (
//         <div className="form-overlay">
//           <Form onClose={handleFormSubmit} />
//         </div>
//       )}
//       {showForm && (
//         <div className="form-overlay">
//           <Form onClose={handleCloseForm} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosInstance'; // Adjust the path based on your file structure
import Form from './Form';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend as BarLegend } from 'recharts';
import {Card,Row,Col} from 'react-bootstrap';


const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [vouchers, setVouchers] = useState([]);

  const fetchUserData = async () => {
    try {
      const response = await axiosInstance.get('/user');
      setUserData(response.data); // Set user data state
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchVouchers = async () => {
    try {
      const response = await axiosInstance.get('/voucher');
      setVouchers(response.data); // Set vouchers state
    } catch (error) {
      console.error('Error fetching vouchers:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchVouchers();

    const intervalId = setInterval(() => {
      fetchVouchers(); // Fetch vouchers periodically
    }, 3000); // Adjust the interval time as needed (e.g., 30000 ms = 30 seconds)

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  const handleAddButtonClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = () => {
    setShowForm(false);
    fetchVouchers(); // Fetch vouchers again to update the list after form submission
  };

  const handleDelete = async (voucherId) => {
    try {
      const response = await axiosInstance.delete(`/voucher/${voucherId}`);

      if (response.status === 200) {
        alert('Voucher deleted successfully!');
        fetchVouchers(); // Fetch vouchers again to update the list after deletion
      } else {
        alert('Failed to delete voucher');
        console.error('Failed to delete voucher');
      }
    } catch (error) {
      console.error('Error deleting voucher:', error);
      alert('Failed to delete voucher');
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const getCategoryData = () => {
    const categoryCount = {};

    vouchers.forEach((voucher) => {
      if (categoryCount[voucher.category]) {
        categoryCount[voucher.category]++;
      } else {
        categoryCount[voucher.category] = 1;
      }
    });

    return Object.keys(categoryCount).map((category) => ({
      name: category,
      value: categoryCount[category],
    }));
  };

  const getPlatformData = () => {
    const platformCount = {};

    vouchers.forEach((voucher) => {
      if (platformCount[voucher.platform]) {
        platformCount[voucher.platform]++;
      } else {
        platformCount[voucher.platform] = 1;
      }
    });

    return Object.keys(platformCount).map((platform) => ({
      name: platform,
      value: platformCount[platform],
    }));
  };


  const totalCards = vouchers.length;

  // Filter expired cards
  const currentDate = new Date();
  const expiredCards = vouchers.filter(voucher => new Date(voucher.dateOfExpiry) < currentDate);
  const expiredCardCount = expiredCards.length;

  // Find most recently expiring card
  const mostRecentExpiry = vouchers.length > 0
    ? vouchers.reduce((prev, current) => (new Date(current.dateOfExpiry) > new Date(prev.dateOfExpiry) ? current : prev))
    : null;

  const categoryColors = ['#3498db', '#2ecc71', '#f1c40f', '#e74c3c', '#9b59b6', '#34495e'];
  const platformColors = ['#3498db', '#2ecc71', '#f1c40f', '#e74c3c', '#9b59b6', '#34495e'];

  return (
    <div className="dashboard">
      <div className="welcome">
        <h2>WELCOME {userData && userData.fname}</h2>
      </div>
     
      <Row>
        {/* Total number of cards */}
        <Col md={4}>
          <Card bg="light">
            <Card.Body>
              <Card.Title>Total number of cards</Card.Title>
              <Card.Text>
                <h4>{totalCards}</h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Number of expired cards */}
        <Col md={4}>
          <Card bg="light">
            <Card.Body>
              <Card.Title>Number of expired cards</Card.Title>
              <Card.Text>
                <h4>{expiredCardCount}</h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Most recent expiry */}
        <Col md={4}>
          {mostRecentExpiry && (
            <Card bg="light">
              <Card.Body>
                <Card.Title>Details of most recently expiring card</Card.Title>
                <Card.Text>
                  <h5>Brand Name: {mostRecentExpiry.brandName}</h5>
                  <h5>Date of Expiry: {new Date(mostRecentExpiry.dateOfExpiry).toLocaleDateString()}</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
      
      {/* Pie charts */}
      <div className="pie-charts">
        <div className="pie-chart-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '45%' }}>
            <h3 style={{ whiteSpace: 'nowrap' }}>Category-wise Scratch Card Distribution</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={getCategoryData()}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  label
                >
                  {getCategoryData().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={categoryColors[index % categoryColors.length]} />
                  ))}
                </Pie>
                <Legend layout="horizontal" verticalAlign="bottom" align="center" iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{ width: '45%' }}>
            <h3 style={{ whiteSpace: 'nowrap' }}>Platform-wise Scratch Card Distribution</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={getPlatformData()}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#82ca9d"
                  label
                >
                  {getPlatformData().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={platformColors[index % platformColors.length]} />
                  ))}
                </Pie>
                <Legend layout="horizontal" verticalAlign="bottom" align="center" iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Latest Expiry Chart */}
     
      <div className="add-scratch-card">
        <p>Do you want to add a scratch card?</p>
        <button className="button-form-dash" onClick={handleAddButtonClick}>
          ADD
        </button>
      </div>

      {/* Display vouchers as cards */}
      <div className="voucher-cards">
        {vouchers.map((voucher) => (
          <div key={voucher._id} className="card">
            <div className="card-body">
              <h5 className="card-title">{voucher.brandName}</h5>
              <p className="card-text">Platform: {voucher.platform}</p>
              <p className="card-text">Product Name/Link: {voucher.productNameOrLink}</p>
              <p className="card-text">Voucher Code: {voucher.voucherCode}</p>
              <p className="card-text">Date of Receiving: {new Date(voucher.dateOfReceiving).toLocaleDateString()}</p>
              <p className="card-text">Date of Expiry: {new Date(voucher.dateOfExpiry).toLocaleDateString()}</p>
              <p className="card-text">Category: {voucher.category}</p>
              <button className="btn btn-danger" onClick={() => handleDelete(voucher._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="form-overlay">
          <Form onClose={handleFormSubmit} />
        </div>
      )}
      {showForm && (
        <div className="form-overlay">
          <Form onClose={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;