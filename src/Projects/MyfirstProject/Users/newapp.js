
import React, { useState } from "react";
import AddUser from './Projects/MyfirstProject/Users/AddUser';
import UsersList from './Projects/MyfirstProject/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge,uCollage_Name) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, collagename:uCollage_Name, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </>
  );
}

export default App;
