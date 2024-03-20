import { MdMessage } from 'react-icons/md';
import Button from '../Button/Button';
import styles from './ContactFrom.module.css';
import {FaPhoneAlt} from 'react-icons/fa';
import {HiMailOpen } from 'react-icons/hi'
import { useState } from 'react';

const ContactFrom = () => {

   const [Name,SetName] = useState('rumail');
   const [Email,SetEmail] = useState('rumailraza@gmail.com');
   const [Text,SetText] = useState('helo how are you');
  const OnSubmit =(event)=>{

    event.preventDefault();
    SetName(event.target[0].value)
    SetEmail(event.target[1].value)
    SetText(event.target[2].value)


  }






  return (
    <section 
    className={`${styles.container}`}>
        <div className={styles.contact_from}>
          <div className={styles.top_btn}>

          <Button  text="VIA SUPPORT CHAT" icon= {<MdMessage fontSize="24px" />}  />
          <Button  text="VIA CALL" icon= {<FaPhoneAlt fontSize="24px" />}/>
          </div>
          <Button 
          isOutline={true}
          text="VIA MAIL FROM" icon= {<HiMailOpen fontSize="27px" />}/>
          
          <form onSubmit={OnSubmit}>

            <div className={styles.from_control}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" id="" />
            </div>

            <div className={styles.from_control}>
            <label htmlFor="">Email</label>
            <input type="text" name="Email" id="" />
            </div>

            <div className={styles.from_control}>
            <label htmlFor="">Text</label>
            <textarea  name="Text" rows="8" />
            </div>

           <div style={{
            display:'flex',
            justifyContent : 'end',
            
            }}>
           <Button   text="SUBMIT" />
           </div>

           <div>{Name+"  "+Email+"  "+Text}</div>

          </form>
        </div>
        <div className={styles.contact_Image}>
          <img src="/images/contact.svg" alt="contactimage" />
        </div>
   </section>
  )
}

export default ContactFrom;