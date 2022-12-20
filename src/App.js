import Navbar from './components/Navbar'
import Card from './components/Card'
import './App.css'
import data from './data'

function App() {
  return (
    <div className='container'>
      <Navbar />
      {data.map(item => {
        return (
          <Card 
            key={item.id}
            item={item}
          />
        )
      })}
    </div>
  );
}

export default App;
