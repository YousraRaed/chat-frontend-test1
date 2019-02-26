import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import 'react-chat-elements/dist/main.css';
import Messages from './Messages';
// MessageBox component

import { MessageBox } from 'react-chat-elements';

class Message extends Component {

  state ={ messages: [] };



  componentWillUpdate() {
         const node = ReactDOM.findDOMNode(this)
         this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
         console.log('hello');
     }

     componentDidUpdate() {
         if (this.shouldScrollToBottom) {
             const node = ReactDOM.findDOMNode(this)
             node.scrollTop = node.scrollHeight
         }
     }

  componentWillMount() {
  this.setState({ messages:[{id:'1',name:'Yousra',text:'Hi Jack. What are you doing?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'2',name:'Yousra',text:'Hi Yousra. I am filling out a job application.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,
{id:'10',name:'Khety',text:'Hi khety. I am filling out a job application.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'11',name:'Khety',text:'Are you finished with school already?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
,
{id:'17',name:'Perto',text:'Hello Jack.',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'18',name:'Perto',text:'Hi Perto. I am filling out a job application.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,
{id:'25',name:'JANA',text:' What are you doing?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'26',name:'JANA',text:'Hi JANA. I am filling out a job application.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,
{id:'33',name:'Fedrik',text:'Hello',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'34',name:'Fedrik',text:'Hi Fedrik. I am filling out a job application.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,
{id:'41',name:'Tonny',text:'Hi Jack.',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'42',name:'Tonny',text:'Hi Tonny. I am filling out a job application.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,
{id:'49',name:'Dina',text:'Hi ',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'50',name:'Dina',text:'Hi Dina. I am filling out a job application.',position:'box-sent sent',date:'12:37 PM',type:'text'}

]});
  }

  componentDidMount() {
     this.props.fillMessages(this.state.messages);
  }

  renderMessages() {


  return this.state.messages.map(message => {
    if((this.props.name===message.name) || (this.props.name===null && message.name ==='Yousra'))
   {

  return  <Messages key={message.id} message={message} />


 };
}
  )

  }

 render() {

  return (
    <div className="message-list">

     {this.renderMessages()}
    </div>

  );
 }
}



export default Message
