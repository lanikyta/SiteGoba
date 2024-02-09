import { useState } from 'react'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useToast,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'
import shopApi from '../../services/api'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/Features/Auth/AuthSlice'

const schema = object({
  username: string().min(4, 'Al menos 4 caracteres'),
  email: string().email('Debe ser un email válido').required('Campo requerido'),
  password: string()
    .required('Campo requerido')
    .min(8, 'Al menos 8 caracteres'),
})

const Login = ({ onClose, createAcc }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })
  const [showPassword, setShowPassword] = useState(false)
  const idR = 'R'
  const dispatch = useDispatch()
  const toast = useToast()
  const onSubmit = (data) => {
    console.log(data)
    // shopApi
    //   .post(
    //     `/auth/local${createAcc ? '/register' : ''}`,
    //     createAcc
    //       ? {
    //           username: data.username,
    //           email: data.email,
    //           password: data.password,
    //         }
    //       : {
    //           identifier: data.email,
    //           password: data.password,
    //         }
    //   )
    //   .then((res) => {
    //     dispatch(login(res.data))
    //     onClose()
    //     toast({
    //       title: `Bienvenido ${res.data.user.username}`,
    //       description: 'Has iniciado sesión con éxito',
    //       status: 'success',
    //       duration: 3000,
    //       isClosable: true,
    //     })
    //   })
    dispatch(login({ user: data.username }))
    onClose()
    toast({
      title: `Bienvenido ${data.username}`,
      description: 'Has iniciado sesión con éxito',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Stack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      alignItems="center"
      gap="2"
    >
      {createAcc && (
        <>
          <FormControl isInvalid={errors.username}>
            <FormLabel htmlFor={'usernameR'}>Username</FormLabel>
            <Input id={'usernameR'} {...register('username')} />
            <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
          </FormControl>
        </>
      )}
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor={`email${createAcc ? idR : ''}`}>Email</FormLabel>
        <Input
          id={`email${createAcc ? idR : ''}`}
          autoComplete="true"
          {...register('email')}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.password}>
        <FormLabel htmlFor={`password${createAcc ? idR : ''}`}>
          Contraseña
        </FormLabel>
        <InputGroup>
          <Input
            id={`password${createAcc ? idR : ''}`}
            autoComplete="true"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
          />
          <InputRightElement>
            <Button
              variant="ghost"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>
      <Button colorScheme="teal" w="80%" type="submit">
        Ingresar
      </Button>
    </Stack>
  )
}

export { Login }
