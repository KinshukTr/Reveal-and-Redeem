import React from 'react';
import second from '/second.jpeg'
import h2 from '/h2.jpeg';
import first from '/first.jpeg'

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
  <div className="carousel-item active">
    <img src={first} className="d-block w-95" alt="Image 1" />
    <div className="carousel-caption d-none d-md-block">
      {/* Added text-start class to align text left */}
      {/* <h1>Welcome to Reveal & Redeem</h1>
      <p>"Every scratch holds a chance. Are you ready to uncover yours?".</p> */}
    </div>
  </div>
  <div className="carousel-item">
    <img src={second} className="d-block w-100" alt="Image 2" />
  </div>
</div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

// import React from 'react';
// import h1 from '/h1.jpeg'; // Ensure the images are in the public folder
// import h2 from '/h2.jpeg';


// const Carousel = () => {
//   return (

//   <div class="container"> 
//     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
//           aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
//           aria-label="Slide 2"></button>
//         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
//           aria-label="Slide 3"></button>
//       </div>
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <img src={h1} className="d-block w-95" alt="Image 1" />
//           <div className="carousel-caption d-none d-md-block">
//             <h1>Welcome to Reveal & Redeem</h1>
//             <p>"Every scratch holds a chance. Are you ready to uncover yours?".</p>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <img src={h2} className="d-block w-100" alt="Image 2" />
//         </div>

//       </div>
//       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   </div>
  
//   );
// };

// export default Carousel;
