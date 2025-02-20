import { useState } from 'react';
import { SideBar } from './components/SideBar/SideBar';
import { PAGES, HOME } from './utils/pageOptions';
import './App.css';

function App() {
  const [selectedPage, setSelectedPage] = useState(HOME);

  return (
    <div id='main-app'>
      <div id='main-app__left'>
        <SideBar pages={PAGES} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      </div>
      <div id='main-app__right'>
        {selectedPage.component}
      </div>
    </div>
  );
}

export default App;
