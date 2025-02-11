import React, { Profiler } from 'react'
import {Link} from 'react-router-dom'
import "./HomePage.css"
import { Button,Typography } from '@mui/material'
import { Menu as MenuIcon, Search, Home, PlusOne ,Person, Settings } from '@mui/icons-material'

function HomePage() {
    return (
        <div id='homePage'>
            <NavBar />
        </div>
    )
}

function NavBar() {

    const StyledInputBase = (() => ({
        color: "inherit",
        width: "100%",
        paddingLeft: "10%"
    }));

    return (
        <div className='homePageNavBar'>
            <div className='homePagenavBarAppInfo'>
                <div id='homePageLogoIcon'></div>
                <Typography variant='h6' style={{ fontWeight: 'bolder' }}>Git Grove</Typography>
            </div>
            <div className='homePageNavItems'>
                <Link style={{width:'100%'}}><Button style={{width:'100%',color:'white'}} variant="text" startIcon={<Home/>}>Home</Button></Link>
                <Link style={{width:'100%'}}><Button style={{width:'100%',color:'white'}} variant="text" startIcon={<PlusOne/>} >Create</Button></Link>
                <Link style={{width:'100%'}}><Button style={{width:'100%',color:'white'}} variant="text" startIcon={<Person/>}>Profile</Button></Link>
                <Link style={{width:'100%'}}><Button style={{width:'100%',color:'white'}} variant="text" startIcon={<Search/>}>Search</Button></Link>
                <Link style={{width:'100%'}}><Button style={{width:'100%',color:'white'}} variant="text" startIcon={<Settings/>}>Settings</Button></Link>
            </div>
        </div>
    )
}


export default HomePage;
