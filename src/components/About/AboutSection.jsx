import style from './About.module.css'
import thaiDish1 from '../../assets/images/thaiDish1.jpeg'

const AboutSection = () => {
  return (
    <section className={style.aboutSectionContainer}>
        <section className={style.aboutSection}>
            <section className={style.aboutSectionHeadingContainer}>
                <h1 className={style.aboutSectionHeading}>ABOUT <span>US</span></h1>
            </section>
            <section className={style.aboutSectionSmallContainer}>
                <div className={style.aboutSectionTextContainer}>
                    <div className={style.aboutSectionText}>
                    <h1 className={style.aboutSectionHeading}>Our <span>Story</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, perferendis fuga. Non architecto itaque assumenda molestiae sit ad consequatur aliquid est. Excepturi veritatis laudantium consequuntur corrupti ex fuga fugiat voluptas quasi voluptates, modi ducimus accusamus labore ratione tempora similique saepe odio? Iste labore hic eos mollitia esse? Id officiis animi possimus provident in facere dolorem! 
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto provident praesentium cumque, earum incidunt nemo quia commodi vero! Expedita necessitatibus nulla veritatis eligendi laudantium fugit, voluptas molestias dignissimos quidem, illo deserunt voluptatibus error voluptate non! Quam, rem qui. Delectus alias.
                        </p>
                    </div>
                </div>
                <div className={style.aboutSectionImage}>
                    <img src={thaiDish1} alt='thaiDish1'/>
                </div>
            </section>
            <section className={style.aboutSectionSubHeading}>
                <p>A Modern Casual Thai Resturant</p>
                <span>769 1st St Gilroy, CA 95020</span>
            </section>
        </section>
    </section>
  )
};

export default AboutSection;