import style from './ContactSection.module.css'

const Map = () => {
  

  return ( 
      <div className={style.mapContainer}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3185.8081961878065!2d-121.5844402!3d37.0143719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8091e3ccdede4863%3A0x28dbef3863509773!2sPineapple%20Village!5e0!3m2!1sen!2sus!4v1707424391393!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
  )
};

export default Map;
