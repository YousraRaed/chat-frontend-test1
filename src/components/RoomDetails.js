import React, { Component } from 'react';
import RoomList from './RoomList';
import ContactList from './ContactList';

import { faSearch,faCommentAlt,faUser } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RoomDetails extends Component {
// constructor(){
//   super();
//   this.state={
//     search:'hello'
//   }
// }

  state ={
    albums: [],
    contact: [],
    search:'',
    display: '',
    hide:'display',
    searchDisplay:'',
    showComponent: false


   };

  componentWillMount() {

  this.setState({ contact:[{name:'Yousra',image:require('../images/images (2).jpeg'),date:'12:37 PM',message:'hiiiii',flag:'hidden',movement:'unmove'}
  ,{name:'Khety',image:require('../images/images (4).jpeg'),date:'12:37 PM',message:'hello',flag:'hidden',movement:'unmove'}
  ,{name:'Perto',image:require('../images/images (7).jpeg'),date:'12:37 PM',message:'welcome',flag:'hidden',movement:'unmove'}
  ,{name:'JANA',image:require('../images/images (8).jpeg'),date:'12:37 PM',message:'how r u ',flag:'hidden',movement:'unmove'}
  ,{name:'Fedrik',image:require('../images/images (5).jpeg'),date:'12:37 PM',message:'where u r',flag:'hidden',movement:'unmove'}
  ,{name:'Tonny',image:require('../images/images (3).jpeg'),date:'12:37 PM',message:'come early',flag:'hidden',movement:'unmove'}
  ,{name:'Dina',image:require('../images/images.jpeg'),date:'12:37 PM',message:'do not be late',flag:'hidden',movement:'unmove'}]});




  }

  componentDidMount() {

  this.interval = setInterval(() => this.setState({ albums:[{name:'Perto',image:require('../images/images (7).jpeg'),date:'12:37 PM',message:'welcome',flag:'appear',movement:'unmove'}
  ,{name:'Khety',image:require('../images/images (4).jpeg'),date:'12:37 PM',message:'hello',flag:'hidden',movement:'unmove'}
  ,{name:'Yousra',image:require('../images/images (2).jpeg'),date:'12:37 PM',message:'hiiiii',flag:'hidden',movement:'move'}
  ,{name:'JANA',image:require('../images/images (8).jpeg'),date:'12:37 PM',message:'how r u ',flag:'hidden',movement:'unmove'}
  ,{name:'Fedrik',image:require('../images/images (5).jpeg'),date:'12:37 PM',message:'where u r',flag:'hidden',movement:'unmove'}
  ,{name:'Tonny',image:require('../images/images (3).jpeg'),date:'12:37 PM',message:'come early',flag:'hidden',movement:'unmove'}
  ,{name:'Dina',image:require('../images/images.jpeg'),date:'12:37 PM',message:'do not be late',flag:'hidden',movement:'unmove'}]})
  , 6000);

    this.interval = setInterval(() => this.setState({ albums:[{name:'Yousra',image:require('../images/images (2).jpeg'),date:'12:37 PM',message:'hiiiii',flag:'appear',movement:'unmove'}
  ,{name:'Khety',image:require('../images/images (4).jpeg'),date:'12:37 PM',message:'hello',flag:'hidden',movement:'unmove'}
  ,{name:'Perto',image:require('../images/images (7).jpeg'),date:'12:37 PM',message:'welcome',flag:'hidden',movement:'move'}
  ,{name:'JANA',image:require('../images/images (8).jpeg'),date:'12:37 PM',message:'how r u ',flag:'hidden',movement:'unmove'}
  ,{name:'Fedrik',image:require('../images/images (5).jpeg'),date:'12:37 PM',message:'where u r',flag:'hidden',movement:'unmove'}
  ,{name:'Tonny',image:require('../images/images (3).jpeg'),date:'12:37 PM',message:'come early',flag:'hidden',movement:'unmove'}
  ,{name:'Dina',image:require('../images/images.jpeg'),date:'12:37 PM',message:'do not be late',flag:'hidden',movement:'unmove'}]})
  , 12000);

}
// onchange = e =>{
//   this.setState({ search : e.target.value});
// }

updateSearch(e) {
  this.setState({search:e.target.value});
}

message(e){
   e.preventDefault();
   this.setState({ display:'hide',hide:'display',searchDisplay:'display',showComponent:true});

}
search(e){
   e.preventDefault();
   this.setState({ display:'display',hide:'hide',searchDisplay:'hide',showComponent:true});

}

contact(e){
   e.preventDefault();
   this.setState({ display:'display',hide:'hide',searchDisplay:'display',showComponent:true});

}

renderContact()  {
  let  filteredContacts = this.state.contact.filter( (album) => {
    return album.name.toLocaleLowerCase().indexOf(this.state.search) !== -1;
  }
);
 return  filteredContacts.map((album) =>{
     return <ContactList key={album.name} album={album}  subscribeToRoom={this.props.subscribeToRoom}/>
   })



 // if(this.props.name === undefined){
 //  return  filteredContacts.map(album =>{
 //      return <ContactList key={album.name} album={album}  subscribeToRoom={this.props.subscribeToRoom}/>
 //    })
 //
 //  }
 //  else{
 //  return   filteredContacts.map(album => {if (this.props.name===album.name){
 //     return <ContactList key={album.name} album={album}  subscribeToRoom={this.props.subscribeToRoom}/>
 //   };
 // })
 //
 //  }
}
  renderAlbums() {
  let  filteredContacts = this.state.albums.filter( (album) => {
    return album.name.indexOf(this.state.search) !== -1;
  }
);

 if(this.props.name === undefined){
  return  filteredContacts.map(album =>{
      return <RoomList key={album.name} album={album}  subscribeToRoom={this.props.subscribeToRoom}/>
    })

  }
  else{
  return   filteredContacts.map(album => {if (this.props.name===album.name){
     return <RoomList key={album.name} album={album}  subscribeToRoom={this.props.subscribeToRoom}/>
   };
 })

  }
}

 render() {
 //   let  filteredContacts = this.state.albums.filter( (album) => {
 //     return album.name.indexOf(this.state.search) !== -1;
 //   }
 // );


  return (

    <ul  className="scroll rooms-list">
    <div className="new-room-form">
          <form >
            <button  className="background-gray " onClick={(e) => this.message(e)}>
            <FontAwesomeIcon className="logo-size" icon={faCommentAlt}/>

            </button>
            <button className="background-gray" onClick={(e) => this.contact(e)}>
            <FontAwesomeIcon className="logo-size" icon={faUser}/>
             </button>
            <button className="background-gray " onClick={(e) => this.search(e)}>
               <FontAwesomeIcon className="logo-size" icon={faSearch}/>
</button>
          </form>
     </div>
     <div className={this.state.hide} >
     <div className={this.state.searchDisplay}>
     <input className="search"
         placeholder="Search..."
         type="text"
         value={this.state.search}
         onChange={this.updateSearch.bind(this)}

         />
         </div>
      <div >
     {this.renderContact()}
     </div>
     </div>

     <div className={this.state.display}>
     {this.renderAlbums()}
     </div>
    </ul>

  );
 }
}

export default RoomDetails;
