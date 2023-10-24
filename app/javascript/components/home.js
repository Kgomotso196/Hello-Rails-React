import React from 'react'
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <NavLink to='greetings' activeClassName="active">Show greetings</NavLink>
  )
}

export default Home
