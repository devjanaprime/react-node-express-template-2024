import { useEffect, useState } from 'react';
import axios from 'axios';

function App () {
  useEffect( ()=>{
    startUp();
  }, [] );
  
  const [ hook, setHook ] = useState( null );

  function startUp(){
    console.log( 'app loaded' );
  }

  return (
    <div>
      <h1>React Base</h1>
    </div>
  );

}

export default App
