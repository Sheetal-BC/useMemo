import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  // const [buttonText, setButtonText] = useState('Change to descending order');
  const [list, setList] = useState('');
  const [buttonText, setSetButtonText] = useState('Change to Descending order');



  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

 

  let listItems = useMemo(() => [1,3,5,9,10], []);
  
  // const changeButton =  useCallback(() => {
  //   setButtonText('Change to ascending order')
  //   }, []);
    
    
    const onclick = useCallback(() =>{
     setList(listItems.sort((a, b) => b-a));
     setSetButtonText('Change to Ascending Order')
    },[listItems])
    

return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} item={list}/>
      <Button onClick={changeTitleHandler} >Change List Title</Button>
      <Button onClick={onclick}>{buttonText}</Button>

    </div>
  );
}

export default App;