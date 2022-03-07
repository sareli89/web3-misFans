import './App.css';
import { UserCard } from './components/UserCard'
import { getUser } from './utils/fetching';
import { useEffect } from 'react';
import './index.css';
import React from 'react';

function App() {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const usersResponse = await getUser();
      const usersData = usersResponse.data;
      setUsers(usersData);
    }
    fetchUsers();
  }, []);
  return (
    <div className="container">
      <div className="grid gap-4 grid-cols-2 grid-rows-5">
        <div className="contents">
        {users && users.map(({title, firstName, lastName, picture}, userIndex) => (
          <UserCard key={`user-${userIndex}`} title={title} firstName={firstName} lastName={lastName} picture={picture} />
        ))}
        </div>
      </div>
          
    </div>
  );
}

export default App;
