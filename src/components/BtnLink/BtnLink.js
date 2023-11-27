import React from 'react'
import "./BtnLink.css";
import { Link } from 'react-router-dom';

export default function BtnLink({ to, children, ...props }) {
  return (
    
    <Link className='BtnLink' to={to} {...props}>
        {children}
    </Link>
  )
}
