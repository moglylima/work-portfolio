import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (

        <header className="w-full h-20 items-baseline text-white bg-black flex justify-between px-8">

            <h1 className="text-3xl  font-bold">MoglyDev<span className='text-primary text-6xl animate-blink'>.</span></h1>


            <nav className="text-xl mb-0">
                <Link className='navbar-link' href="#home">Home</Link>
                <Link className='navbar-link' href="#services">Services</Link>
                <Link className='navbar-link' href="#work">Work</Link>
                <Link className='navbar-link' href="#about">About</Link>
                <Link className='navbar-link' href="#blog">Blog</Link>
                <Link className="navbar-link" href="#contact">Contact</Link>
            </nav >

        </header >


    );
};

export default Header;
