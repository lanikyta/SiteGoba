import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../Redux/Features/Auth/AuthSlice'
import { clearCart } from '../Redux/Features/Cart/CartSlice'
import shopApi from '../services/api'

const usePost = () => {
  const [error, setError] = useState()
  const [response, setResponse] = useState()
  const dispatch = useDispatch()
  const toast = useToast()

  const postUser = (data, createAcc) => {
    shopApi
      .post(
        `/auth/local${createAcc ? '/register' : ''}`,
        createAcc
          ? {
              username: data.username,
              email: data.email,
              password: data.password,
            }
          : {
              identifier: data.email,
              password: data.password,
            }
      )
      .then((res) => {
        setResponse(res.data)
        dispatch(login(res.data))
      })
      .catch((err) => {
        setError(err)
      })
  }
  const { jwt, user } = useSelector((state) => state.auth)
  const postOrder = (cart) => {
    shopApi
      .post(
        `/orders`,
        {
          data: {
            Item: cart,
            user: user.id,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then((res) => {
        setResponse(res.data)
        toast({
          title: 'Your order was cherged!',
          description: `You have made a purchase! Order number: ${res.data.data.id}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        })

        dispatch(clearCart())
      })
      .catch((err) => {
        setError(err)
        toast({
          title: `Error `,
          description: 'An error has ocurred, plis try again',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      })
  }

  return { response, error, postUser, postOrder }
}

export { usePost }
