import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Carrousel } from '../../components/Carrousel/Carrousel'
import { useDispatch } from 'react-redux'
import { clearFilter } from '../../Redux/Features/Filter/FilterSlice'
import { secciones } from '../../assets/datos'
import { ItemCard } from '../../components/Product/ItemCard'
import logoDerecho from '../../assets/PBA_derechoAlFuturo.png'
import { DatosImportantes } from '../../components/DatosImportantesSection/DatosImportantes'
import { useEffect, useState } from 'react'

const Home = () => {
  const dispatch = useDispatch()
  dispatch(clearFilter())
  const [activateTransition, setActivateTransition] = useState(false)
  const [showCards, setShowCards] = useState(
    Array(secciones.length).fill(false)
  ) // Inicialmente, ninguna carta se muestra
  const [containerInView, setContainerInView] = useState(false) // Estado para verificar si el contenedor está en el viewport
  useEffect(() => {
    // Activar la transición después de que la página se haya cargado
    setActivateTransition(true)
    // Activar animacion con scroll
    const handleScroll = () => {
      const containerTop = document
        .querySelector('.containerAnimated')
        .getBoundingClientRect().top
      const windowHeight = window.innerHeight

      // Verificar si el contenedor está en el viewport
      if (containerTop < windowHeight && containerTop > -windowHeight) {
        setContainerInView(true)
        secciones.forEach((_, index) => {
          setTimeout(() => {
            setShowCards((prevState) => {
              const newState = [...prevState]
              newState[index] = true // Muestra la carta actual
              return newState
            })
          }, index * 500) // Aparece cada carta con un retardo de 500ms
        })
      } else {
        setContainerInView(false) // Indica que el contenedor no está en el viewport
        setShowCards(Array(secciones.length).fill(false)) // Oculta todas las cartas
      }
    }

    // Agregar el event listener para el scroll
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll) // Eliminar el event listener cuando el componente se desmonta
    }
  }, [secciones])
  return (
    <Box textAlign="center" pb="30em">
      <Carrousel />
      <Stack
        w="70%"
        mx="auto"
        borderLeft="2px"
        borderRight="2px"
        borderColor="whiteAlpha.800"
        p="5"
        justify="space-around"
        mb="20"
        direction={['column', null, null, 'row']}
        align="center"
        className="boxHomeCarrousel"
      >
        {/* <Image src={logoGOBA} w="200px" filter="invert(100%)" /> */}
        <VStack
          w="80%"
          mx="auto"
          p="4"
          className={`containerHeading ${activateTransition ? 'active' : ''}`}
        >
          <Heading m="2" size="2xl">
            Gestión de Obras Buenos Aires
          </Heading>
          <Text className="text" fontSize="lg">
            En esta plataforma podrás gestionar la obra pública desde su etapa
            de planificación hasta su finalización. De esta forma, podrás
            controlar todo su ciclo de vida y contar con información necesaria
            para la toma de decisiones. En esta plataforma podrás gestionar la
            obra pública desde su etapa de planificación hasta su finalización.
            De esta forma, podrás controlar todo su ciclo de vida y contar con
            información necesaria para la toma de decisiones. En esta plataforma
            podrás gestionar la obra pública desde su etapa de planificación
            hasta su finalización. De esta forma, podrás controlar todo su ciclo
            de vida y contar con información necesaria para la toma de
            decisiones.
          </Text>
        </VStack>
      </Stack>

      {/* <Image w="7em" src={miArg} mx="auto" /> */}
      <Box pt="1em">
        <Heading>Navega por nuestros gestores</Heading>
        <Flex
          w="70%"
          gap="4"
          wrap="wrap"
          justify="space-around"
          mx="auto"
          my="20"
          pb="40"
          className="containerAnimated"
        >
          {secciones.map((item, index) => (
            <ItemCard
              key={index}
              item={item}
              vis={`card ${showCards[index] ? 'appear' : ''}`}
            />
          ))}
        </Flex>
      </Box>
      <Box p="4em" bg="#00aec3" my="2em">
        <Box
          // as={Link}
          // href="https://www.instagram.com/provinciaba/"
          // isExternal
          w="70%"
          mx="auto"
          id="divContainerAnimated"
          p="3em"
          className="containerBanner"
        >
          <Image src={logoDerecho} my="3em" />
          <Text w="60%" mx="auto" color="whiteAlpha.900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            harum repellat corporis adipisci laudantium? Non aperiam odit vero
            necessitatibus eaque minus saepe recusandae commodi magni excepturi,
            repudiandae dolorum, unde corrupti.
          </Text>
        </Box>
      </Box>
      <DatosImportantes />
    </Box>
  )
}

export { Home }
