import React from 'react';
import RoomDetails from './RoomDetails';
import { faSearch,faCommentAlt,faUser } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class NewRoomForm extends React.Component {

    constructor() {
      super()
      this.state = {
          display: '',
          hide:'display',
          input: '',
          showComponent: false

      }
      this.handleChange = this.handleChange.bind(this);

  }




handleChange(e) {
    this.setState({
        input: e.target.value
    })
}
  handleSubmit(e){
   e.preventDefault();
  }
  handleClick(){
       console.log(this.refs.inputText.getDOMNode().value)
  }


  search(e){
     e.preventDefault();
     this.setState({ display:'display',hide:'hide',showComponent:true});
}

  cancel(e,listOfContacts){
     e.preventDefault();
     this.setState({ display:'hide',hide:'display'});
     listOfContacts();

  }


//   <div className="new-room-form">
// <div className={this.state.display}>
//       <form>
//         <button  className="background-gray ">
//         <FontAwesomeIcon icon={faCommentAlt}/>
//
//         </button>
//         <button className="background-gray">
//         <FontAwesomeIcon icon={faUser}/>
//          </button>
//         <button className="background-gray " onClick={(e) => this.search(e)}>
//            <FontAwesomeIcon icon={faSearch}/>
// </button>
//       </form>
//  </div>
//  <div className={this.state.hide}>
//  <div className="new-room-form">
//   <div>
//     <form>
//      <div className="send-message input-text">
//        <input className="text-name"
//        onChange={this.handleChange}
//        value={this.state.input}
//          placeholder="name"
//          type="text"
//          />
//      </div>
//
//        <div className="send">
//          <button className="send-box" onClick={(e) => this.props.searchContact(this.state.input,e)}> Search </button>
//        </div>
//        <div className="send">
//          <button className="send-box" onClick={(e) => this.cancel(e,this.props.listOfContacts)}> Cancel </button>
//        </div>
//      </form>
//      </div>
//    </div>
//    </div>
//   </div>

    render () {
        return (
          <div className="windows-editor">
          <div className="page ">
          <button class="closse"> </button>

          <button class="minimize"></button>

          <button class="zoom"></button>

      </div>
      </div>

        )
    }
}

export default NewRoomForm
