import React from 'react';
import webDesignImage from '../assets/web-design.jpg';
import seoImage from '../assets/seo.jpg';
import brandingImage from '../assets/branding.jpg';
import updatesImage from '../assets/updates.jpg';

function Services() {
  return (
    <div className="services-container">
      <section className="services-list">
        <div className="service-item service-item-web service-item-left">
          <img src={webDesignImage} alt="Web Design" className="service-image" />
          <div className="service-content">
            <h2>Web Design & Development</h2>
            <p>We specialize in creating custom, hand-coded websites without the use of page builders or frameworks, ensuring optimal performance and a unique design tailored to your brand.</p>
          </div>
        </div>
        <div className="service-item service-item-seo service-item-right">
          <img src={seoImage} alt="SEO" className="service-image" />
          <div className="service-content">
            <h2>Search Engine Optimization (SEO)</h2>
            <p>Our SEO services focus on the latest techniques, including keyword-centered content, mobile-first optimization, and clean code structure, to enhance your website's visibility and ranking.</p>
          </div>
        </div>
        <div className="service-item service-item-branding service-item-left">
          <img src={brandingImage} alt="Branding" className="service-image" />
          <div className="service-content">
            <h2>Logos, Graphic Design, & Branding</h2>
            <p>We offer in-house graphic design services, including custom logo creation and social media graphics, to help establish and elevate your brand's presence.</p>
          </div>
        </div>
      </section>
      <section className="service-item-updates standalone-point">
        <div className="standalone-content">
          <h2>Lifetime Updates</h2>
          <p>We provide lifetime updates to ensure your website stays current with the latest design trends, accessibility standards, and search engine guidelines.</p>
          <img src={updatesImage} alt="Lifetime Updates" className="standalone-image" />
        </div>
      </section>
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
                <button className="contact-button">CONTACT US</button>
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
                <button className="contact-button">CONTACT US</button>
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
                <button className="contact-button">CONTACT US</button>
                </div>
            </div>
            </section>
        </div>
    </div>
    
  );
}

export default Services;
