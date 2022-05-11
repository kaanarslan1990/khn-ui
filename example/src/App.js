import React from 'react'

import { Paragraph, Button } from 'khn-ui'
import 'khn-ui/dist/index.css'

const App = () => {
  return (
    <>
     <Paragraph text ="Hello" />
     <Button text ="Click" onClick={() => alert('kaan')} />
  </>

)}

export default App
