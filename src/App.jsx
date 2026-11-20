import { useState } from 'react'
import PropertyDetails from "./PropertyDetails";
import './App.css'

const properties = [
  {
    name: 'Luxury Modern Mansion',
    city: 'Miami, FL',
    price: 1250000,
    beds: 5,
    baths: 4,
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900'
  },
  {
    name: 'Elegant Family Residence',
    city: 'Atlanta, GA',
    price: 650000,
    beds: 4,
    baths: 3,
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900'
  },
  {
    name: 'Beverly Hills Estate',
    city: 'Beverly Hills, CA',
    price: 2850000,
    beds: 6,
    baths: 5,
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900'
  },
  {
    name: 'Contemporary Townhouse',
    city: 'Dallas, TX',
    price: 450000,
    beds: 3,
    baths: 2,
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900'
  }
]

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [location, setLocation] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const filteredProperties = properties.filter(property => {
    const matchesLocation = property.city.toLowerCase().includes(location.toLowerCase())
    const matchesPrice = !maxPrice || property.price <= Number(maxPrice)
    return matchesLocation && matchesPrice
  })

  const money = amount =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount)

  if (selectedProperty) {
  return (
    <PropertyDetails
      property={selectedProperty}
      onBack={() => setSelectedProperty(null)}
    />
  );
}

return (
    <div className="website">
      <header>
        <nav>
          <h2>PRIMENEST <span>REALTY.</span></h2>
          <div>
            <a href="#home">Home</a>
            <a href="#properties">Buy</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" className="hero">
        <p className="gold-text">EXCLUSIVE AMERICAN REAL ESTATE</p>
        <h1>Find Your Dream Home.<br />Live Your Best Life.</h1>
        <p>Discover exceptional homes and luxury properties across the United States.</p>
        <a href="#properties">
          <button>EXPLORE PROPERTIES</button>
        </a>
      </section>

      <section className="search-section">
  <p className="gold-text">FIND YOUR PERFECT PROPERTY</p>
  <h2>Search Properties</h2>

  <div className="search-controls">
    <input
      type="text"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      placeholder="Enter city or state"
    />

    <select
      value={maxPrice}
      onChange={(e) => setMaxPrice(e.target.value)}
    >
      <option value="">Any maximum price</option>
      <option value="1000000">$1,000,000</option>
      <option value="2000000">$2,000,000</option>
    </select>
  </div>
</section>


      <section id="properties">
        <p className="gold-text">EXCLUSIVE COLLECTION</p>
        <h2>Featured American Properties</h2>
        <p>Explore exceptional homes in desirable locations.</p>

        <div className="property-grid">
          {filteredProperties.map((property, index) => (
            <article
  className="property-card"
  key={index}
  onClick={() => setSelectedProperty(property)}
>
              <img src={property.image} alt={property.name} />
              <div className="property-info">
                <p className="gold-text">{property.type}</p>
                <h3>{property.name}</h3>
                <p>{property.city}</p>
                <p>{property.beds} Bedrooms · {property.baths} Bathrooms</p>
                <p className="price">{money(property.price)}</p>
              </div>
            </article>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <p>No matching properties found. Try another location or price.</p>
        )}
        <p className="disclaimer">
          Demonstration listings for website development purposes only.
          Not actual properties available for sale.
        </p>
      </section>

      <section id="about">
        <p className="gold-text">ABOUT PRIMENEST</p>
        <h2>Real Estate. Elevated.</h2>
        <p>
          We believe finding a home should be an exceptional experience.
          PrimeNest Realty is building a better way to discover properties
          and connect with real estate professionals.
        </p>
      </section>
<section id="contact" className="contact-section">
  <p className="gold-text">WE ARE HERE TO HELP</p>
  <h2>Let's Find Your Dream Home</h2>
  <p>
    Interested in a property? Send us a message.
    Our team will get back to you.
  </p>

  <form
  className="contact-form"
  action="https://formsubmit.co/contact.primenest0@gmail.com"
  method="POST"
>
    <input
  type="text"
  name="name"
  placeholder="Your Full Name"
  required
/>

    <input
      type="email"
      name="email"
      placeholder="Your Email Address"
      required
    />

    <input
      type="text"
      name="property"
      placeholder="Property You Are Interested In"
    />

    <textarea
    name="message"
      placeholder="How can we help you?"
      rows="5"
      required
    />

    <button type="submit">Send Your Inquiry</button>
  </form>
</section>
      <footer id="contact">
        <h2>PRIMENEST REALTY</h2>
        <p>Your Home. Your Future. Our Expertise.</p>
        <p>Contact us to begin your property journey.</p>
        <p>© 2026 PrimeNest Realty. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App 