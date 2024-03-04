import React, {useEffect, useState} from 'react';

function App() {

  const [backEndData, setBackEndData] = useState([{}])

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setBackEndData(data))
  }

  return (
    <div>
      <h1>React App</h1>
    </div>
  );
}

export default App;