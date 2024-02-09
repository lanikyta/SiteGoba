import { useToast } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.auth)
  const toast = useToast()
  if (!user) {
    toast({
      title: 'Error',
      description:
        'Tienes que estar loggeado para acceder a este sitio. Por favor inicia sesión',
      status: 'error',
      duration: 4000,
      isClosable: true,
    })

    return <Navigate to="/" replace />
  }

  return <Outlet />
}
export { ProtectedRoute }
