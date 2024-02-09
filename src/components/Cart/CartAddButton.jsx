import { useDispatch } from 'react-redux'
import {
  useToast,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
} from '@chakra-ui/react'
import { FaCartPlus } from 'react-icons/fa'
import { addToCart } from '../../Redux/Features/Cart/CartSlice'
import { useState } from 'react'
const CartAddButton = ({ item }) => {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const toast = useToast()
  const handleClickAdd = () => {
    dispatch(
      addToCart({
        item,
        quantity,
      })
    )
    toast({
      title: 'Item added',
      description: "We've added correctly the item to your cart.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }
  return (
    <HStack>
      <Button onClick={handleClickAdd}>
        <FaCartPlus />
      </Button>
      <NumberInput
        size="xs"
        maxW={16}
        defaultValue={1}
        min={1}
        value={quantity}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper onClick={() => setQuantity(quantity + 1)} />
          <NumberDecrementStepper
            onClick={() => quantity !== 1 && setQuantity(quantity - 1)}
          />
        </NumberInputStepper>
      </NumberInput>
    </HStack>
  )
}

export { CartAddButton }
