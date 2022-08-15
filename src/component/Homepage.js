import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import Profile from './Profile'

const Homepage = () => {
  return (
    <Box>
        <Navbar/>
        <Profile/>
    </Box>
  )
}

export default Homepage