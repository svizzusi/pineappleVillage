import style from './ContactSection.module.css'

const Map = () => {
  

  return ( 
      <div className={style.mapContainer}>
        <iframe src="https://www.google.com/maps/place/Pineapple+Village/@37.0143715,-121.5947399,15z/data=!3m1!4b1!4m6!3m5!1s0x8091e3ccdede4863:0x28dbef3863509773!8m2!3d37.0143719!4d-121.5844402!16s%2Fg%2F1q629rgnj?entry=ttu" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
  )
};

export default Map;
