import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Table,
  Tbody,
  Td,
  TableContainer,
  Text,
  Tr,
  Image,
  Avatar,
  Tag,
} from '@chakra-ui/react'

const Pedido = ({ item }) => {
  const { id, createdAt, Item } = item
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Order n° {id}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text>Purchase date: {createdAt.slice(0, 10)}</Text>
          <TableContainer>
            <Table size="sm" variant="simple">
              <Tbody>
                {Item.map((element, index) => (
                  <Tr key={index}>
                    <Td>
                      <Avatar
                        src={element.item.attributes.image.data.attributes.url}
                      />
                      <Tag size="sm" colorScheme="pink">
                        {element.quantity}
                      </Tag>
                    </Td>
                    <Td>{element.item.attributes.title}</Td>
                    <Td isNumeric>
                      {element.item.attributes.price * element.quantity}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export { Pedido }
