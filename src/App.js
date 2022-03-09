import './App.css';
import { UserCard } from './components/UserCard'
import {UserProfile} from './components/UserProfile'
import { getUser } from './utils/fetching';
import { useEffect } from 'react';
import './index.css';
import React from 'react';
import { Nav } from './components/Nav';

function App() {
  const [users, setUsers] = React.useState([]);
  const [selectedUserId, setSelectedUserId] = React.useState(0);
  const [isProfileMode, setIsProfileMode] = React.useState(false);
  useEffect(() => {
    async function fetchUsers() {
      const usersResponse = await getUser();
      const usersData = usersResponse.data;
      setUsers(usersData);
    }
    fetchUsers();
  }, []);
  return (
    
    <div >
      <Nav />
      <div className="grid  grid-cols-1 md:grid-cols-1 grid-rows-10 place-items-center h-screen">
        <div className="contents ">
        {!isProfileMode && users && users.map(({title, firstName, lastName, picture}, userIndex) => (
          <UserCard onClick={() => {setSelectedUserId(userIndex); setIsProfileMode(true)}} key={`user-${userIndex}`} title={title} firstName={firstName} lastName={lastName} picture={picture} />
        ))}
        {isProfileMode && users && <UserProfile user={users[selectedUserId]} />}
        </div>
      </div>
          
    </div>
  );
}

export default App;
