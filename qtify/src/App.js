
  import React from 'react'
  import "./App.css";
  import NavBar from "./components/NavBar/NavBar";
  import Header from "./components/Header/Header";
  import GridSection from './components/GridSection/GridSection'; 
 


  function App() {
    return (
      <div className="App">
      <NavBar />
      <Header />
      <GridSection />
    </div>
    );
  }

  export default App;