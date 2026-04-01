import React from 'react'

const Home = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-text">
          <h1>The Power of Healthy <br /> <span className="highlight">Food Breakfast</span></h1>
          <p>
            A restaurant is an establishment that prepares and serves food and drinks to customers,
            typically for consumption on the premises, but also offering take-out or delivery.
          </p>

          <div className="btn-group">
            <a href="#" className="btn btn-filled">Order Now</a>
            <a href="#" className="btn btn-outline">Sign In</a>
          </div>
        </div>

        <div className="hero-visual">




          <div className="hero-image-wrapper">




            <div className="badge fast-delivery">
              <i className="fas fa-truck"></i> Fast Delivery
            </div>

            <div className="badge nearest-place">
              <i className="fas fa-location-arrow"></i> Nearest Place
            </div>

            <div className="badge book-table">
              <i className="fas fa-utensils"></i> Book Your Table
            </div>

            <div className="badge  customer-review">
              <i className="fas fa-star"></i> Customer Review
            </div>
          </div>
        </div>
      </section>


      <section className="hot-offer-container">
        <div className="ticket-strip">
          <div className="ticket-content">
            <h2 className="ticket-text">Savor the Savings on Your Favorite Dishes!</h2>
            <h1 className="ticket-perc">15%</h1>
          </div>

          {/* The cutouts are handled via CSS masking on the ticket-strip */}

          <div className="ticket-image-wrap">
            <img src="src\assets\images\2148140194 2.png" alt="food" className="food-img" />
          </div>
        </div>

        <div className="pepper-decoration">
          <img src="src\assets\images\0c87f7620fea49336e5b75121d2f10b4d765379e (1).png" alt="pepper" />
        </div>
      </section>


    </>
  )
}

export default Home