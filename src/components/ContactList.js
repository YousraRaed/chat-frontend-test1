import React from 'react'
import Card from './Card';
import CardSection from './CardSection';


const ContactList = ({ album,subscribeToRoom }) => {
  const { name, image, date,message,flag, movement } = album;
        return (
          <div className="color-text ">
          <div  className={movement} >
          <Card  name={name} subscribeToRoom={subscribeToRoom}>
           <CardSection >
             <img className="imageStyle-room-details notification" src={image} />
                <div >
                <div className="color-text bold">
                 {name }
                 </div>

                 </div>

          </CardSection>
          </Card>
          </div>
          </div>

        )
    }
export default ContactList
