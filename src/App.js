import React from 'react'

import Message from './components/Message'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import RoomDetails from './components/RoomDetails'
import NameBar from './components/NameBar'
import NewRoomForm from './components/NewRoomForm'
import { tokenUrl, instanceLocator } from './config'
import Notification from './components/Notification'
import scrollToComponent from 'react-scroll-to-component';



class App extends React.Component {

  constructor() {
     super();
     this.getId =this.getId.bind(this);
     this.id = 57;

     this.state = {
       showComponent: false,
       showSentMessage: false,
       name: 'Yousra',
       showContact: false,
       contactName: '',

     };
   }

   co

fillMessages(messages){
  this.setState({

    messages:messages
  });
}
getId(){
    return this.id++;
}
   send(value,e){
     e.preventDefault();
     this.setState({
       showSentMessage: true,
     });
if (value.trim() !== '')
     this.state.messages.push({id:this.getId(),name:this.state.name,text:value,position:'box-sent sent',date:'12:37 PM',type:'text'})


   }

  subscribeToRoom(name) {
    this.setState({
      showComponent: true,
      name: name,

    });
  }

  searchContact(value,e){
     e.preventDefault();
    this.setState({
      showContact: true,
      contactName: value
    });
  }

  listOfContacts(){
    this.setState({
      showContact: false

    });
  }


    render() {
        return (
            <div className="app">
              {this.state.showContact ?
                <RoomDetails subscribeToRoom={this.subscribeToRoom.bind(this)} name={this.state.contactName}/>:
                <RoomDetails subscribeToRoom={this.subscribeToRoom.bind(this)}/>

                }
                {this.state.showComponent || this.state.showSentMessage ?
                  <Message fillMessages={this.fillMessages.bind(this)} name={this.state.name} /> :
                <Message fillMessages={this.fillMessages.bind(this)} name='Yousra' />
                }
                <SendMessageForm send={this.send.bind(this)} />
                <NewRoomForm searchContact={this.searchContact.bind(this)} listOfContacts={this.listOfContacts.bind(this)}/>
                <NameBar name={this.state.name} />
            </div>
        );
    }
}

export default App
