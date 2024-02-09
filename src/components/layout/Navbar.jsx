import { Link as RouterLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import logoBA from '../../assets/LOGO_GBA_HORIZONTAL_BLANCO.png'
import {
  IconButton,
  Spacer,
  Flex,
  Button,
  ButtonGroup,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import '../../App.css'
import { ModalAuth } from '../Auth/Modal'
import { CartDrawer } from '../Cart/CartDrawer'
import { FaRegUser } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import { logout } from '../../Redux/Features/Auth/AuthSlice'
import logoGOBA from '../../assets/logoGOBA.png'

const Navbar = () => {
  const [menu] = useMediaQuery('(min-width: 460px)')
  // const navColor = useColorModeValue(
  //   'linear(to-r, blue.400, blue.200)',
  //   'linear(to-r, blue.900, blue.600)'
  // )
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  return (
    <Flex
      direction="row"
      px="4"
      align="center"
      justify="space-between"
      bgColor="blackAlpha.300"
      className="navbar"
      pos="fixed"
      zIndex="10"
      w="100%"
    >
      {menu ? (
        <>
          <Image
            m="3"
            pr="4"
            src={logoGOBA}
            w="150px"
            filter="invert(100%)"
            borderRight="2px"
            borderColor="blackAlpha.600"
          />
          <Image ml="3" src={logoBA} w="120px" m="2" />

          <Spacer></Spacer>
          <Button
            as={RouterLink}
            to="/"
            fontSize="l"
            colorScheme="teal"
            variant="ghost"
          >
            Inicio
          </Button>
          <Flex fontSize="md" gap="3">
            <CartDrawer onOpenModal={onOpenModal} />
            {/* <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              colorScheme="teal"
              variant="ghost"
            /> */}
            {user ? (
              <ButtonGroup>
                <Button
                  as={RouterLink}
                  leftIcon={<FaRegUser />}
                  to="/profile"
                  colorScheme="teal"
                >
                  Profile
                </Button>
                <Button colorScheme="red" onClick={() => dispatch(logout())}>
                  Cerrar Sesión
                </Button>
              </ButtonGroup>
            ) : (
              <>
                <Button
                  onClick={onOpenModal}
                  colorScheme="teal"
                  variant="outline"
                >
                  Ingresar
                </Button>
                <ModalAuth
                  isOpenModal={isOpenModal}
                  onCloseModal={onCloseModal}
                />
              </>
            )}
          </Flex>
        </>
      ) : (
        <Flex m="1" direction="row" alignItems="center" w="100vw">
          <Menu>
            <MenuButton
              colorScheme="teal"
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              {user ? (
                <>
                  <MenuItem as={RouterLink} to="/profile">
                    Perfil
                  </MenuItem>
                  <MenuItem onClick={() => dispatch(logout())}>
                    Cerrar Sesión
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={onOpenModal}>Ingresar</MenuItem>
                  <ModalAuth
                    isOpenModal={isOpenModal}
                    onCloseModal={onCloseModal}
                  />
                </>
              )}
            </MenuList>
          </Menu>
          <Spacer></Spacer>
          <IconButton
            as={RouterLink}
            to="/"
            icon={<GoHome />}
            fontSize="2xl"
            colorScheme="teal"
            variant="ghost"
          />
          <IconButton
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            colorScheme="teal"
            variant="ghost"
          />
          <CartDrawer />
        </Flex>
      )}
    </Flex>
  )
}

export { Navbar }
