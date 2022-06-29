import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';

import './App.css'

function App() {
  return (
    <div className='App'>
      <Status status='error' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo DiCaprio!</Heading>
      </Oscar>
      <Greet name='Canhoto' isLoggedIn={true} />
    </div>
  )
}

export default App;
