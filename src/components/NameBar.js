import React , { Component } from 'react';
import { faCog } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




class NameBar extends React.Component {
  constructor(props, context) {
             super(props, context);

             this.chooseImage= this.chooseImage.bind(this);


         }
chooseImage(name)
 {
   if (name==='Yousra' ){
     return <img className="imageStyle-room-details notification" src= {require('../images/images (2).jpeg')}  />

  }
    else if (name==='Khety' ) {
      return <img className="imageStyle-room-details notification" src= {require('../images/images (4).jpeg')}  />
    }
    else if (name==='Perto' ) {
      return <img className="imageStyle-room-details notification" src= {require('../images/images (7).jpeg')}  />
    }
    else if (name==='JANA' ) {
      return <img className="imageStyle-room-details notification" src= {require('../images/images (8).jpeg')}  />
    }
    else if (name==='Fedrik' ) {
      return <img className="imageStyle-room-details notification" src= {require('../images/images (5).jpeg')}  />
    }
    else if (name==='Tonny' ) {
      return <img className="imageStyle-room-details notification" src= {require('../images/images (3).jpeg')}  />
    }
    else if(name==='Dina' )
    return <img className="imageStyle-room-details notification" src= {require('../images/images.jpeg')}  />    }


    render() {
        return (
<div className='name-bar bar-name'>
{ this.chooseImage(this.props.name)}
<div className='name-direction'>
 Chat With {this.props.name}
 </div>
 <FontAwesomeIcon icon={faCog} className="setting-icon"/>
</div>

        )
    }
}

export default NameBar
