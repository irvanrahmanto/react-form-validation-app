import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UserLists';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {id: Math.random().toString(), name: uName, age: uAge}];
    });
  };
  
  return (
    <div>
      <div>
        <AddUser onAddUser={addUserHandler} />
        <UsersList users={usersList} />
      </div>
    </div>
  );
}

export default App;
