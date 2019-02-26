import React from 'react';
import CardSection from './CardSection';
import Message from './Message';

class Card extends React.Component {

 render() {
    return (
        <li className="containerStyle-card"  onClick={() => this.props.subscribeToRoom(this.props.name)}>

        {this.props.children }
      </li>
    );
 }

}


export default Card;
