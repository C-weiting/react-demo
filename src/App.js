import React from 'react'
import './App.css'
import { Button } from 'antd'
import CommentList from './components/CommentList'
import Hoc from './components/Hoc'
import ContextComp from './components/ContextComp'

function App() {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <CommentList />
      <Hoc stage="11" />
      <ContextComp />
    </div>
  )
}

export default App
