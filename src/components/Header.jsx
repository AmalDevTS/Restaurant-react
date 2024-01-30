import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurantSlice';
import {  useDispatch } from 'react-redux';


function Header() {
  const dispath = useDispatch()
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Link to={'/'} style={{textDecoration:"none", color:"white"}}> <span  className='text-warning'>FOOD CIRCLE</span></Link></Navbar.Brand>
          <input type="text" className='form-control w-25'
placeholder='Search by neighbourhood'
        onChange={(e)=>dispath(search(e.target.value))}
/>
          <i class="fa-solid fa-magnifying-glass " style={{color:"white",marginLeft: "-326px"}}></i>
          <img height="50px" width="100px" src="https://logos-world.net/wp-content/uploads/2021/08/Grubhub-Symbol.png" alt="" />

        </Container>
      </Navbar>

    </>
  )
}

export default Header