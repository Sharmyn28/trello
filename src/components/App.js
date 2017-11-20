import React from 'react';
import '../styles/style.css';
import SignIn from "./signIn";

const Header = () =>{
  return(
    <header >
      <div className='logo'></div>
    </header>
  )
}

const App = () => {
  return (
    <main id='main-container' role='main'>
      <div className='view-container sessions new'>
        <main>
          <Header />
          <SignIn />
        </main>
      </div>
    </main>
  );
}

export default App;
