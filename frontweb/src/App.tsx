import './assets/styles/custom.scss';
import './App.css';
import Login from 'pages/Login';
import Navbar from 'components/NavBar';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Login />
    </>
  );
}

export default App;
