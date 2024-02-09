import { DeleteIcon } from '@chakra-ui/icons'
import { Tr, Td, Avatar, Tag, IconButton } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { removeOne } from '../../Redux/Features/Cart/CartSlice'

const CartItem = ({ element }) => {
  const dispatch = useDispatch()
  const {
    item: {
      attributes: { image, price, title },
    },
    quantity,
  } = element
  return (
    <Tr>
      <Td>
        <Avatar size="sm" src={image.data.attributes.url} />
        <Tag size="sm" colorScheme="pink">
          {quantity}
        </Tag>
      </Td>
      <Td whiteSpace="normal">{title}</Td>
      <Td>
        <IconButton
          onClick={() => dispatch(removeOne(element))}
          icon={<DeleteIcon />}
          size="xs"
          colorScheme="red"
          variant="ghost"
        />
      </Td>
      <Td isNumeric fontSize="sm" fontStyle="oblique">
        {price * quantity}
      </Td>
    </Tr>
  )
}

export { CartItem }
