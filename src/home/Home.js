import './Home.css'
import { useState } from 'react';
import { TodoGroup } from '../components/TodoGroup';
import { TodoItem } from '../components/TodoItem';
import { TodoModal } from '../components/TodoModal/TodoModal';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={isModalOpen ? 'overlay' : ''} onClick={() => setIsModalOpen(false)}></div>
      <TodoGroup>
        <TodoItem setIsModalOpen={setIsModalOpen}/>
      </TodoGroup>
      {isModalOpen && <TodoModal isVisible={isModalOpen} setIsModalOpen={setIsModalOpen} />}  
    </>
  );
}

export { Home };
