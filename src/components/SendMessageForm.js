import React from 'react';

class SendMessageForm extends React.Component {


  constructor() {
    super()
    this.state = {
        message: ''
    }
    this.handleChange = this.handleChange.bind(this);

}

handleChange(e) {
    this.setState({
        message: e.target.value,
    })
}

    render() {

        return (

            <form className="send-message-form">
            <button  className="no-border fa fa-paperclip">  </button>
            <div className="send-message">
            <input

                id="mainInput"
                onChange={this.handleChange}
                value={this.state.message}
                placeholder='Type your message'

                type="text" />
                    </div>
                    <div className="send">
                    <button className="send-box" onClick={(e) => {this.props.send(this.state.message,e); this.state.message=''}}> Send </button>
                    </div>
            </form>
        )
    }
}

export default SendMessageForm
