import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LoginForm from './Components/Forms/LoginForm';

//import helloWorld from './Components/helloWorld';

function App() {
  return (
    <div className="App">
      <header className="p-3 bg-dark text-white">
        <Header />
      </header>
      <section className="App-main">
        <LoginForm />
      </section>
      <footer className="p-3 bg-dark text-white">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
