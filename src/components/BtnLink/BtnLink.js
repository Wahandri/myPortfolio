import React from 'react';
import "./BtnLink.css";

export default function BtnLink({ to, children, ...props }) {
  return (
    <a className='BtnLink' href={to} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
