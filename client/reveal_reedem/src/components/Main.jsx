import React from 'react';
import Carousel from './Carousel';

const Main = () => {
  return (
    <main>
      <section id="home">
        <div className="container">
          <Carousel />
        </div>
      </section>
      <section id="about" style={{ backgroundColor: '#F0F0F0', padding: '4rem 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h2 className="mb-4">About Us</h2>
              <p className="lead">Welcome to RR (Reveal and Redeem), your premier platform for redeeming scratch cards
                from various apps and websites. We're dedicated to transforming your scratch card winnings into
                seamless rewards.</p>
              <div className="row mt-5">
                <div className="col-md-6">
                  <h3>What We Do</h3>
                  <p>At RR, we simplify the redemption process:</p>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check-circle text-primary"></i> Instantly redeem scratch cards by
                      uploading screenshots.</li>
                    <li><i className="fas fa-check-circle text-primary"></i> Track and manage all your rewards
                      effortlessly.</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h3>Our Values</h3>
                  <p>We're committed to:</p>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-star text-warning"></i> Transparency and trustworthiness in every
                      transaction.</li>
                    <li><i className="fas fa-star text-warning"></i> Enhancing your online experience with
                      convenience and reliability.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" style={{ backgroundColor: '#F0F0F0', padding: '3rem 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h2 className="mb-4">Contact Us</h2>
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <p>Have a question or need assistance? Reach out to us!</p>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-envelope"></i> Email: info@revealredeem.com</li>
                    <li><i className="fas fa-phone-alt"></i> Phone: +1 (123) 456-7890</li>
                  </ul>
                </div>
                <div className="col-md-5">
                  <form action="submit_form.php" method="POST">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input type="text" className="form-control" id="name" name="name" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Your Email</label>
                      <input type="email" className="form-control" id="email" name="email" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Your Message</label>
                      <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
