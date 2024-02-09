import { Link as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  useToast,
  Text,
  Icon,
  Box,
  HStack,
  Flex,
  VStack,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { FaComputer } from 'react-icons/fa6'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { FaUserGraduate } from 'react-icons/fa'

const CartDrawer = ({ onOpenModal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const toast = useToast()
  const cart = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.auth)

  let count = 0
  const calculateTotal = () => {
    cart.forEach((element) => {
      count = count += element.item.attributes.price * element.quantity
    })
  }
  calculateTotal()
  const handleCheckout = () => {
    onClose()
    if (!user) {
      toast({
        title: 'Error',
        description:
          'Tienes que estar loggeado para acceder a este sitio. Por favor inicia sesión',
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
      setTimeout(() => {
        onOpenModal()
      }, 500)
    }
  }
  return (
    <>
      <Button colorScheme="teal" fontSize="sm" variant="ghost" onClick={onOpen}>
        Mas
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#00b0c3a3">
          <DrawerCloseButton />
          <DrawerHeader backgroundColor="#00b0c3e9">
            Información importante
          </DrawerHeader>

          <DrawerBody>
            <Flex direction="column" gap="5">
              <Flex boxShadow="lg" className="cardDrawerBox">
                <HStack gap="2" p="2">
                  <Icon as={FaComputer} boxSize="3em" />
                  <Text>¿Qué es oficina virtual?</Text>
                </HStack>
              </Flex>
              <Flex boxShadow="lg" className="cardDrawerBox">
                <HStack gap="2" p="2">
                  <Icon as={FaUserGraduate} boxSize="3em" />
                  <Text>Capacitaciones</Text>
                </HStack>
              </Flex>
              <Flex boxShadow="lg" className="cardDrawerBox">
                <HStack gap="2" p="2">
                  <Icon as={MdOutlineLibraryBooks} boxSize="3em" />
                  <Text>Tutoriales</Text>
                </HStack>
              </Flex>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              A
            </Button>
            <Button
              as={RouterLink}
              to="/checkout"
              colorScheme="teal"
              onClick={handleCheckout}
            >
              C
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export { CartDrawer }
