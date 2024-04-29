
  import React from 'react'
  import "./App.css";
  import NavBar from "./components/NavBar/NavBar";
  import Header from "./components/Header/Header";
  import DummyCard from './components/Card/Card';


  function App() {
    return (
      <div className="App">
      <NavBar />
      <Header />
      <DummyCard />
     
    </div>
    );
  }

  export default App;