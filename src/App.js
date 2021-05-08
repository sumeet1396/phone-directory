import './App.css';
import Header from './Component/Header';

function App() {
  return (
    <div className="App">
        <Header />
        <div>
          <button>Add</button>
          <div>
            <span>Name</span><br />
            <span>Phone</span>
          </div>
        </div>
    </div>
  );
}

export default App;
