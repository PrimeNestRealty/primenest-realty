function PropertyDetails({ property, onBack }) {
  return (
    <div className="property-details">
      <button onClick={onBack}>← Back to Properties</button>

      <img
        src={property.image}
        alt={property.title}
        style={{ width: "100%", maxWidth: "700px" }}
      />

      <h1>{property.title}</h1>
      <p>{property.city}</p>
      <h2>${property.price.toLocaleString("en-US")}</h2>
      <p>{property.beds} Bedrooms</p>
      <p>{property.baths} Bathrooms</p>
    </div>
  );
}

export default PropertyDetails;