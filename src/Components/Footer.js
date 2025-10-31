import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <>
    <hr />
    <p className='text-center footerline'><span>&copy; {new Date().getFullYear()}</span><span> Managed by </span><strong
            id='footer-link'>
            <Link to='Website' style={{cursor:'pointer', textDecoration:"none"}} id='footer-a' target="_blank" rel="noopener noreferrer">Hafiz
            Muhammad Abu Bakar</Link>
        </strong></p>
    </>
  );
}
