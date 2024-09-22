import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import computerimg from '../assets/computer.jpg';
import browserimg from '../assets/browser.png';
import instant_messaging_img from '../assets/instant-messaging.png';
import smartphone_img from '../assets/smartphone.png';

function Home() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleContactClick = () => {
    navigate('/Contact'); // Navigate to the /Contact page
  };

  return (
    <div className="home-container">
      <main className="main-content">
        <section className="hero">
          <div className="hero-text">
            <h1>Small Business Web Design + Development</h1>
            <p>We specialize in creating stunning, responsive websites for small businesses.</p>
            <button className="get-in-touch-button" onClick={handleContactClick}>Get in Touch!</button>
          </div>
          <div className="hero-image">
            <img src={computerimg} alt="Web Design Illustration" />
          </div>
        </section>
        <div className="swoosh swoosh-bottom"></div>
        <section className="what-we-do">
          <h2>WHAT WE DO</h2>
          <p>We specialize in small business web design and development for clients anywhere in the US. Every line of code is written by hand to ensure the best performance, which helps bring in more customers to your site and bring more revenue to your business. <a href="/Services">LEARN MORE</a></p>
          <div className="services">
            <div className="service">
              <img src={smartphone_img} alt="Mobile-First Design" />
              <h3>Mobile-First Design</h3>
              <p>We start building your site for mobile devices first, then we add on to it to make tablet and desktop.</p>
            </div>
            <div className="service">
              <img src={browserimg} alt="Fully Responsive" />
              <h3>Fully Responsive</h3>
              <p>Your website will fit all mobile screen sizes, tablets, and desktop sizes so new clients can access your site from anywhere.</p>
            </div>
            <div className="service">
              <img src={instant_messaging_img} alt="Optimization" />
              <h3>Optimization</h3>
              <p>60% of all internet traffic is on mobile devices, so we optimize your mobile to perform their best in search engines.</p>
            </div>
          </div>
        </section>
        <div className="blemishes"></div>
        <div className='pricing_overall'>
            <section className="pricing">
            <h2>PRICING</h2>
            <p className="pricing-description">Affordable packages tailored to small businesses, ensuring the best online presence for your company.</p>
            <div className="pricing-container">
                <div className="pricing-card">
                <div className="pricing-card-header ecommerce">E-COMMERCE</div>
                <div className="price">$8K</div>
                <ul className="pricing-features">
                    <li>$8000 min. Up Front Cost</li>
                    <li>Custom Designed</li>
                    <li>Custom Coded Shopify Integration</li>
                    <li>Easy to edit</li>
                </ul>
                <button className="contact-button" onClick={handleContactClick}>CONTACT US</button>
                </div>
                <div className="pricing-card">
                <div className="pricing-card-header standard">STANDARD</div>
                <div className="price">$150/mo</div>
                <ul className="pricing-features">
                    <li>5 Pages</li>
                    <li>Unlimited Edits</li>
                    <li>Includes Hosting</li>
                    <li>24/7 Customer Service</li>
                    <li>Lifetime Updates</li>
                </ul>
                <button className="contact-button" onClick={handleContactClick}>CONTACT US</button>
                </div>
                <div className="pricing-card">
                <div className="pricing-card-header design">LOGOS & GRAPHIC DESIGN</div>
                <div className="price">$0</div>
                <ul className="pricing-features">
                    <li>2 Revisions</li>
                    <li>All File Formats</li>
                    <li>Ready to use</li>
                    <li>Free with Subscription</li>
                </ul>
                <button className="contact-button" onClick={handleContactClick}>CONTACT US</button>
                </div>
            </div>
            </section>
        </div>
      </main>
    </div>
  );
}

export default Home;
