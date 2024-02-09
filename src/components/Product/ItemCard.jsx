import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react'

const ItemCard = ({ item, vis }) => {
  const { title, icon, linkTo, color } = item

  return (
    <VStack
      as={RouterLink}
      to={`/` + linkTo}
      bg="whiteAlpha.800"
      boxShadow="lg"
      p="3"
      my="2"
      borderRadius="xl"
      w="20em"
      justify="space-between"
      className={`transit ${vis}`}
      color={color}
      bgImg={icon}
      bgPosition="top"
      bgSize="50%"
      bgRepeat="no-repeat"
      justifyContent="end"
    >
      {/* <Image src={icon} h="200px" color="red" /> */}
      <Heading className="card-title">{title}</Heading>
      <Box className="card-content" p="3">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem minus
          modi, eligendi nihil
        </Text>
        <Button colorScheme="cyan">Ver</Button>
      </Box>
    </VStack>
  )
}

export { ItemCard }
