import style from './About.module.css'
import thaiDish1 from '../../assets/images/thaiDish1.jpeg'

const AboutSection = () => {
  return (
    <section className={style.aboutSectionContainer}>
        <section className={style.aboutSection}>
            <section>
                <h1 className={style.aboutSectionHeading}>ABOUT <span>US</span></h1>
            </section>
            <section>
                <div className={style.aboutSectionText}>
                    <hgroup>
                        <h2>Our Story</h2>
                    </hgroup>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, perferendis fuga. Non architecto itaque assumenda molestiae sit ad consequatur aliquid est. Excepturi veritatis laudantium consequuntur corrupti ex fuga fugiat voluptas quasi voluptates, modi ducimus accusamus labore ratione tempora similique saepe odio? Iste labore hic eos mollitia esse? Id officiis animi possimus provident in facere dolorem nemo voluptatibus dicta explicabo voluptatem repellat cum rem optio doloribus, nisi sequi. Inventore autem accusamus dolor repellendus quae totam voluptatem labore aperiam molestias culpa illo maiores nisi, aliquid eius doloremque, expedita excepturi porro, quibusdam magnam in quisquam animi perspiciatis soluta voluptate! Explicabo nesciunt quia deserunt! 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto provident praesentium cumque, earum incidunt nemo quia commodi vero! Expedita necessitatibus nulla veritatis eligendi laudantium fugit, voluptas molestias dignissimos quidem, illo deserunt voluptatibus error voluptate non! Quam, rem qui. Delectus alias, expedita ratione aperiam inventore temporibus rem sint incidunt accusamus unde.
                    </p>
                </div>
                <div className={style.aboutSectionImage}>
                    <img src={thaiDish1} alt='thaiDish1'/>
                </div>
            </section>
            <section>
                <p>A Modern Casual Thai Resturant</p>
                <span>Address</span>
            </section>
        </section>
    </section>
  )
};

export default AboutSection;