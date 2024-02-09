import { Box, Heading } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { clearFilter } from '../../Redux/Features/Filter/FilterSlice'

const DeObras = () => {
  const dispatch = useDispatch()
  dispatch(clearFilter())
  return (
    <Box my="10" textAlign="center">
      <Heading m="2">Gestión de Obras</Heading>
    </Box>
  )
}

export { DeObras }
