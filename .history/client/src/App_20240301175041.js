import React, {useEffect, useState} from 'react';

function App() {

  const [backEndData, setBackEndData] = useState([{}])

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setBackEndData(data))
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {backEndData.users && backEndData.users.map((user, index) => {
        return (
          <div key={index}>
            <h3>{user}</h3>
          </div>
        )
      })}
    </div>
  );
}

export default App;