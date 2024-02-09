import { Box, Heading } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { ProductGrid } from '../../components/Product/ProductGrid'
import { clearFilter } from '../../Redux/Features/Filter/FilterSlice'

const Store = () => {
  const dispatch = useDispatch()
  dispatch(clearFilter())
  return (
    <Box my="10" textAlign="center">
      <Heading m="2">Our Products</Heading>
      <ProductGrid />
    </Box>
  )
}

export { Store }
