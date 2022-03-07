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
    <div>
          <h1 className="text-5xl font-bold underline">
      tailwind test!
    </h1>

      <header>
        <UserCard 
        title='Mr' 
        firstName="Luis" 
        lastName="Lopez"
        picture="https://randomuser.me/api/portraits/men/30.jpg"
        />
        <UserCard
        title='Mr' 
        firstName="Luis" 
        lastName="Lopez"
        picture="https://randomuser.me/api/portraits/men/30.jpg"
        />
        <UserCard
        title='Mr' 
        firstName="Luis" 
        lastName="Lopez"
        picture="https://randomuser.me/api/portraits/men/30.jpg"
        />
      </header>
    </div>
  );
}

export default App;
