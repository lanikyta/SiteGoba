import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { random1, random2, random3 } from '../../assets'
import { FaPeopleGroup } from 'react-icons/fa6'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { GiStarSattelites } from 'react-icons/gi'
import { BsTable } from 'react-icons/bs'

const DatosImportantes = () => {
  const boxRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (boxRef.current) {
        const topPos = boxRef.current.getBoundingClientRect().top
        const bottomPos = boxRef.current.getBoundingClientRect().bottom

        const isVisible = topPos < window.innerHeight && bottomPos >= 0
        setIsVisible(isVisible)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check if box is visible initially

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box ref={boxRef}>
      <Flex
        justify="space-between"
        align="center"
        direction="column"
        gap="5"
        w="60%"
        mx="auto"
        color="blackAlpha.700"
      >
        <AnimatedCard isVisible={isVisible} direction="left">
          <CircularProgress
            value={40}
            color="#00aec3"
            size="200px"
            thickness="5px"
          >
            <CircularProgressLabel>3492</CircularProgressLabel>
          </CircularProgress>
          <VStack ml={4}>
            <HStack
              justify="center"
              borderBottom="1px"
              m="4"
              p="2"
              className="boxHeading"
            >
              <Icon as={FaPeopleGroup} boxSize="4em" />
              <Heading as="h3" size="md">
                Cantidad de Usuarios
              </Heading>
            </HStack>
            <Spacer />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et
              consequatur beatae dicta ipsam maxime ex minima tempora possimus
              libero
            </Text>
          </VStack>
        </AnimatedCard>
        <AnimatedCard isVisible={isVisible} direction="right">
          <VStack ml={4} p="2">
            <HStack
              justify="center"
              borderBottom="1px"
              m="4"
              p="2"
              className="boxHeading"
            >
              <Icon as={FaMapMarkedAlt} boxSize="4em" />
              <Heading as="h3" size="md">
                Mapa Inversiones
              </Heading>
            </HStack>

            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et
              consequatur beatae dicta ipsam maxime ex minima tempora possimus
              libero
            </Text>
          </VStack>
          <Image src={random2} alt="Imagen 2" w="400px" />
        </AnimatedCard>
        <AnimatedCard isVisible={isVisible} direction="left">
          <Image src={random3} alt="Imagen 3" w="400px" />
          <VStack ml={4} p="2">
            <HStack
              justify="center"
              borderBottom="1px"
              m="4"
              p="2"
              className="boxHeading"
            >
              <Icon as={GiStarSattelites} boxSize="4em" />
              <Heading as="h3" size="md">
                GEOMOP
              </Heading>
            </HStack>

            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et
              consequatur beatae dicta ipsam maxime ex minima tempora possimus
              libero
            </Text>
          </VStack>
        </AnimatedCard>
        <AnimatedCard isVisible={isVisible} direction="right">
          <VStack ml={4} p="2">
            <HStack
              justify="center"
              borderBottom="1px"
              m="4"
              p="2"
              className="boxHeading"
            >
              <Icon as={BsTable} boxSize="4em" />
              <Heading as="h3" size="md">
                Tableros
              </Heading>
            </HStack>

            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et
              consequatur beatae dicta ipsam maxime ex minima tempora possimus
              libero
            </Text>
          </VStack>
          <Image src={random1} alt="Imagen 4" w="400px" />
        </AnimatedCard>
      </Flex>
    </Box>
  )
}

const AnimatedCard = ({ isVisible, direction, children }) => {
  return (
    <Flex
      direction="row"
      align="center"
      p="2em"
      boxShadow="lg"
      className={
        isVisible
          ? `containerCardAnimated animate__slideIn${direction}`
          : 'containerCardAnimated'
      }
    >
      {children}
    </Flex>
  )
}

export { DatosImportantes }
