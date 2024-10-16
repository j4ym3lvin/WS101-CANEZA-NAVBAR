import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React from "react"
import './App.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        JCreatives
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  )
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}