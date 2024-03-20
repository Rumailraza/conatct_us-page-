import { useState } from 'react'
import Navigation from './component/navigation'

import './App.css'
import ContactHeader from './component/ContactHeader/ContactHeader'
import ContactFrom from './component/ContactFrom/ContactFrom'

function App() {
 

  return (
    <>
      <Navigation />
      <main className='main_container'>
      <ContactHeader/>
      <ContactFrom />
      </main>
        
    </>
  )
}

export default App
