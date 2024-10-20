import "./LocationMap.css";

function LocationMap() {
  return (
    <div className="container location-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5586494314375!2d85.3091085753815!3d27.700032725814214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19584647f09b%3A0xa7b9a6d8bb4a86ad!2sRoad%20Sewa!5e0!3m2!1sen!2snp!4v1727156066834!5m2!1sen!2snp"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default LocationMap;
