import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    {/* This is a prop or passing a prop */}
    <Navbar title="TextUtils" aboutText="About TextUtils"/>
    {/* <Navbar/> */}
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" />
    </div>
    </>
  );
}

export default App;
