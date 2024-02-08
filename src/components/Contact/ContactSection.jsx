import style from "./ContactSection.module.css"
import Map from "./Map.jsx";
import { AiOutlinePhone } from 'react-icons/ai';


const ContactSection = () => {
  return (
    <section className={style.contactSection}>
      <div className={style.contactSectionHeader}>
        <h1>Location and Hours</h1>
        <p>769 1st St Gilroy, CA 95020</p>
        <p><AiOutlinePhone/> (408) 842-2888</p>
      </div>
      <section className={style.contactHoursMapSection}>
        <Map />
        <div className={style.contactHours}>
            <span>Sun - Thurs 11:00 AM - 9:30 PM</span>
            <span>Fri - Sat 11:00 AM - 10:00 PM</span>
        </div>
      </section>
    </section>
  )
};

export default ContactSection;
