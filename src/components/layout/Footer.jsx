import {
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import '../../App.css'
import {
  BsFacebook,
  BsTwitterX,
  BsInstagram,
  BsYoutube,
  BsTelegram,
  BsTiktok,
  BsTwitch,
} from 'react-icons/bs'
import { PhoneIcon } from '@chakra-ui/icons'
import { FaLocationDot } from 'react-icons/fa6'
import { MdBusinessCenter } from 'react-icons/md'
import logoGBA from '../../assets/provincia_icon_Footer.png'

const Footer = () => {
  const footColor = useColorModeValue(
    'linear(to-r, blue.200, blue.400)',
    'linear(to-r, blue.600, blue.900)'
  )
  return (
    <Stack
      w="100%"
      p="2"
      className="footer"
      bgGradient={footColor}
      alignItems="center"
      direction="row"
      justify="center"
      gap="5em"
    >
      <Image m="3" pr="4" src={logoGBA} w="150px" />
      <Flex direction="column">
        <HStack>
          <Icon as={MdBusinessCenter} />
          <Text color="whiteAlpha.900">
            Ministerio de Infraestructura de la prov de Buenos Aires
          </Text>
        </HStack>
        <HStack>
          <PhoneIcon />
          <Text color="whiteAlpha.900">Tel. +54 (011) 4349-7699</Text>
        </HStack>
        <HStack>
          <Icon as={FaLocationDot} />
          <Text color="whiteAlpha.900">
            Hipólito Yrigoyen 250, Piso 11, CABA
          </Text>
        </HStack>
        <ButtonGroup>
          <IconButton
            as={Link}
            href="https://www.facebook.com/BAProvincia/"
            icon={<BsFacebook />}
            aria-label="Ir al Facebook de GBA"
            fontSize="2xl"
            colorScheme="teal"
            variant="ghost"
            isExternal
          />
          <IconButton
            as={Link}
            href="https://twitter.com/baprovincia"
            icon={<BsTwitterX />}
            aria-label="Ir al Twitter de GBA"
            fontSize="2xl"
            colorScheme="teal"
            variant="ghost"
            isExternal
          />
          <IconButton
            as={Link}
            href="https://www.instagram.com/provinciaba/"
            icon={<BsInstagram />}
            aria-label="Ir al Instagram de GBA"
            fontSize="2xl"
            colorScheme="teal"
            variant="ghost"
            isExternal
          />
          <IconButton
            as={Link}
            href="https://www.youtube.com/channel/UCRuY8kHZHaiqAAdjcgobsNw"
            icon={<BsYoutube />}
            aria-label="Ir al canal de Youtube de GBA"
            fontSize="2xl"
            colorScheme="teal"
            variant="ghost"
            isExternal
          />
          <IconButton
            as={Link}
            href="https://gba.gob.ar/static/gba_general/iconos_compartidos/telegram-hover.png"
            icon={<BsTelegram />}
            aria-label="Ir al Telegram de GBA"
            fontSize="2xl"
            colorScheme="teal"
            variant="ghost"
            isExternal
          />
          <IconButton
            as={Link}
            href="https://gba.gob.ar/static/gba_general/iconos_compartidos/tiktok-hover.png"
            icon={<BsTiktok />}
            aria-label="Ir al canal de Twitch de GBA"
            fontSize="2xl"
            colorScheme="teal"
            variant="ghost"
            isExternal
          />
          <IconButton
            as={Link}
            href="https://gba.gob.ar/static/gba_general/iconos_compartidos/twich-hover.png"
            icon={<BsTwitch />}
            aria-label="Ir al Instagram de GBA"
            fontSize="2xl"
            colorScheme="teal"
            variant="ghost"
            isExternal
          />
        </ButtonGroup>
      </Flex>
    </Stack>
  )
}

export { Footer }
