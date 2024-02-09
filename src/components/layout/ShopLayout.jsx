import { Box, useColorModeValue } from '@chakra-ui/react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
const ShopLayout = ({ children }) => {
  const color = useColorModeValue('blackAlpha.700', 'cyan.200')
  return (
    <Box minH="100vh" maxW="100vw" bg="#ffffff" color={color}>
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}

export { ShopLayout }
