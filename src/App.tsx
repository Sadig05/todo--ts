import {useState} from 'react'
import reactLogo from './assets/react.svg'
import ToDo from "./components/ToDo";
import './App.css'

function App() {
    const [user, setUser] = useState(0);

    return(
    <div>
        <ToDo/>
    </div>
    )
}

export default App
