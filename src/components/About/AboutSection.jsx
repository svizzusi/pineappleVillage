import style from './About.module.css'
import thaiDish1 from '../../assets/images/thaiDish1.jpeg'

const AboutSection = () => {
  return (
    <section className={style.aboutSection}>
      <h1 className={style.aboutSectionHeading}>About Us</h1>
      <div className={style.aboutSectionImage}>
        <img src={thaiDish1} alt='thaiDish1'/>
      </div>
      <div className={style.aboutSectionTextContainer}>
        <section className={style.aboutSectionText}>
          <p>Step into Victoria's Mexican Restaurant, an enduring Gilroy, California treasure that has thrived for more than four decades. Established in 1983, we have become an integral part of our community's culture, bridging generations with our culinary legacy.</p>
          <p>Our family-owned establishment bears the name of our beloved matriarch, Victoria, as a tribute from her daughter, Linda. Linda, alongside her cherished sisters, Carmen and Trish, has dedicated herself to nurturing the heart of this restaurant.</p>
          <p>We fondly remember Don, Linda's son, a magnetic Elvis Presley impersonator who enchanted our patrons. Don's presence illuminated our renowned Thursday karaoke nights, and his spirit lives on in the photographs adorning our walls.</p>
          {/* <p>Today, the legacy continues under the capable management of Linda's daughter, Vicki, named after her beloved grandmother. In addition to the restaurant, Vicki oversees a Pilates studio next door, embodying our commitment to both family and community.</p> */}
          <p>Since 1983, we've had the privilege of serving multiple generations of families, forging enduring bonds with our patrons. We extend an earnest invitation for you to become a cherished member of our extended family here at Victoria's. We look forward to welcoming you soon, promising a heartwarming and unforgettable dining experience that reflects the essence of our rich history and enduring tradition.</p>
        </section>
      </div>
    </section>
  )
};

export default AboutSection;