import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useChangeTab } from './hooks/pageVisibility';
import { useIntrusiveTabClose } from './hooks/intrusivePageVisibility';

function App() {

  const [isChangedPage, setIsChangedPage] = useState(false);

  useChangeTab(() => {  
    console.log("tab changed!");    
    setIsChangedPage(true);   
    // other actions
  });
  
  useIntrusiveTabClose((e: any) => {
    var confirmationMessage = "Are you sure you want to leave this page?";
    e.returnValue = confirmationMessage;
      return confirmationMessage;
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color: "red"}}>{isChangedPage && "YOU HAVE CHANGED PAGE"}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
      </header>
    </div>
  );
}

export default App;
