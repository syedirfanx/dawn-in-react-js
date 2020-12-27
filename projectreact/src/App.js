import React, {useState} from 'react';
import Tweet from './Tweet';
import './App.css'

function App(){

  const [users, setUsers] = useState([
    {
      name: "Syed Irfan", text : "This is me, Irfan's frist post", likes : 5
    },
    {
      name: "Amir Khan", text : "This is me, khan's frist post", likes : 6
    },
    {
      name: "Mushtaq Kislu", text : "This is me, Mushtaq's frist post", likes : 8
    },
    {
      name: "Jakirul Hemel", text : "This is me, Jak's frist post", likes : 6
    }

  ]);
  

  return(
    
    <div className="app">
      {
        users.map(user=>(
          <Tweet name = {user.name} text = {user.text} likes = {user.likes}/>
          ))
      }
    </div>

    

    );
}

export default App;