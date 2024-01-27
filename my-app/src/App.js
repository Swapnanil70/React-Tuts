import './App.css';

let name = 'Neel';

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {user}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      {getGreeting(name)} <br /> {getGreeting()}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nam fuga illo veritatis? Aperiam fugit suscipit asperiores sequi consequuntur eius officiis est voluptates ex, 
        quia necessitatibus ipsam. Facilis asperiores sit nisi labore sint error!
      </p>
    </div>
    </>
  );
}

export default App;
