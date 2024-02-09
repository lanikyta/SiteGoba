import { useDispatch, useSelector } from 'react-redux'
import { Button, Heading, Image, VStack } from '@chakra-ui/react'
import profile from '../../assets/profile.png'
import { logout } from '../../Redux/Features/Auth/AuthSlice'

const Profile = () => {
  const { user } = useSelector((state) => state.auth)
  console.log(user)
  // const { data, isLoading, error } = useGet(`/users/${user.id}`, 'orders')
  const dispatch = useDispatch()
  return (
    <VStack
      direction={['column', 'row', 'row', 'row', 'row']}
      w="70%"
      my="10"
      mx="auto"
      justify="space-around"
    >
      <Heading>Profile</Heading>

      <VStack align="center">
        <Image w="100px" src={profile} />
        <Heading>Welcome {user}</Heading>
        <Button onClick={() => dispatch(logout())} colorScheme="red">
          Cerrar Sesión
        </Button>
      </VStack>
    </VStack>
  )
}

export { Profile }
