// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');


//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };
 
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Username: ${username} Password: ${password}`);
//   };

//   return (

//     <div className="App">
      
//       <form onSubmit={handleSubmit} className="LoginForm">
//       <div className="img"></div>
//         <input
//           type="text"
//           name="username"
//           placeholder="Логин"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Пароль"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//           <button type="submit" style={{ backgroundColor: 'green', color: 'white' }}>
//             Отправить
//           </button>
//       </form>
//     </div>
  
//   );
// }
// export default App;  
import React, { Component } from 'react';
import Login from './Components/Login'; //импортируйте компонент Login
import './App.css';
import './Menu.css'
import './Home.css'
import './Nav.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;