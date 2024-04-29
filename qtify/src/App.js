
  import React from 'react'
  import "./App.css";
  import NavBar from "./components/NavBar/NavBar";
  import Header from "./components/Header/Header";
  import Section from './components/Section/Section';
 


  function App() {
    return (
      <div className="App">
      <NavBar />
      <Header />
      <Section title="Top Albums" />
    </div>
    );
  }

  export default App;