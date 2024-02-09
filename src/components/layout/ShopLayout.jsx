import { Box, useColorModeValue } from '@chakra-ui/react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
const ShopLayout = ({ children }) => {
  const color = useColorModeValue('cyan.200', 'blackAlpha.700')
  return (
    <Box minH="100vh" maxW="100vw" bg="#ffffff" color={color}>
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}

export { ShopLayout }
