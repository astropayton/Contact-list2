import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from "./components/SelectedContact"


function App() {
  const [count, setCount] = useState(0)

  const [SelectedContactid, setSelectedContactid] = useState(null) 
  //if the selectedContactId is null, render the ContactList component.
   if (SelectedContactid == null) {
     return (
      <ContactList setSelectedContact={setSelectedContactid}/>
     )}
  else {
    return (
    <SelectedContact/> )
  }
};



export default App
