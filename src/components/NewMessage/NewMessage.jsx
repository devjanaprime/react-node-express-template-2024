import {useState} from 'react';
import axios from 'axios';

function NewMessage ( fetchMessages ) {

  const [ currentMessage, setCurrentMessage ] = useState( { name: '', text: '' } );

  function sendMessage(){
    axios.post( '/api/messages', currentMessage ).then( function( response ){
      console.log( 'back from POST:', response.data );
      fetchMessages.fetchMessages();
    }).catch( function ( err ){
      console.log( err );
      alert( 'error posting message' );
    })
  }

  return (
    <div>
      <h1>New Message</h1>
      <p>
        Name: <input type='text' placeholder='name' onChange={ (e)=>{ setCurrentMessage( {...currentMessage, name: e.target.value } ) } } /> 
        Message: <input type='text' placeholder='message' onChange={ (e)=>{ setCurrentMessage( {...currentMessage, text: e.target.value } ) } } /> 
        <button onClick={ sendMessage }>Send</button>
        {/* <button onClick={ fetchMessages }>Update</button> */}
      </p>
    </div>
  );

}

export default NewMessage
