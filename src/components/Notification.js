import React, { Component } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  class Notification extends Component {
    notifyYousra = () => toast('Yousra:Hiiii', {
position: "top-right",
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
});

notifyPerto = () => toast('Perto:welcome', {
position: "top-right",
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,


});

componentDidMount(){
  setInterval(this.notifyYousra, 8000);
  setInterval(this.notifyPerto, 12000);

}
// <ToastContainer   autoClose={2000}/>


    render(){
      return (
        <div>


        </div>
      );
    }
  }

  export default Notification
