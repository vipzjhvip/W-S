import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const navStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderTop: '1px solid #ddd',
  }

  return (
    <div style={navStyle}>
      <NavLink to="/">首页</NavLink>
      <NavLink to="/task">任务</NavLink>
      <NavLink to="/flow">流水</NavLink>
    </div>
  )
}
