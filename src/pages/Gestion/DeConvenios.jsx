import { Box, Heading } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { clearFilter } from '../../Redux/Features/Filter/FilterSlice'

const DeConvenios = () => {
  const dispatch = useDispatch()
  dispatch(clearFilter())
  return (
    <Box my="10" textAlign="center">
      <Heading m="2">Gestión de Convenios</Heading>
    </Box>
  )
}

export { DeConvenios }
