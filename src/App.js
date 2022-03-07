import './App.css';
import { UserCard } from './components/UserCard'
import { getUser } from './utils/fetching';
import { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="container">
      <div className="grid gap-4 grid-cols-2 grid-rows-5">
      
        <div className="contents">
        <UserCard 
          title='Mr ' 
          firstName="Luis " 
          lastName="Lopez"
          picture="https://randomuser.me/api/portraits/men/30.jpg"
          />
          <UserCard 
          title='Mr ' 
          firstName="Luis " 
          lastName="Lopez"
          picture="https://randomuser.me/api/portraits/men/30.jpg"
          />
          <UserCard 
          title='Mr ' 
          firstName="Luis " 
          lastName="Lopez"
          picture="https://randomuser.me/api/portraits/men/30.jpg"
          />
        </div>
      </div>
          
    </div>
  );
}

export default App;
