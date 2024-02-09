import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Stack,
  ButtonGroup,
  FormLabel,
  Text,
  Spacer,
  InputGroup,
  Box,
  IconButton,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import qs from 'qs'
import { clearFilter, setFilter } from '../../Redux/Features/Filter/FilterSlice'
import { useSearchParams } from 'react-router-dom'
import shopApi from '../../services/api'
import { SmallCloseIcon } from '@chakra-ui/icons'

const schema = object({
  search: string(),
  selectCat: string(),
})
const Filter = ({ setPage }) => {
  const [searchParams, setSearchParams] = useSearchParams({})
  const [selectCategories, setSelectCategories] = useState()
  const [priceStart, setPriceStart] = useState(0)
  const [priceEnd, setPriceEnd] = useState(200)
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filter)
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  })

  const handleSearch = (data) => {
    const queryFilter = qs.stringify(
      {
        filters: {
          title: {
            $contains: data.search,
          },
          price: {
            $between: [priceStart, priceEnd],
          },
          categories: {
            name: {
              $contains: data.selectCat,
            },
          },
        },
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    )
    dispatch(setFilter(queryFilter))
    setPage(1)
  }
  useEffect(() => {
    const getCategories = () => {
      shopApi
        .get('categories')
        .then((res) => setSelectCategories(res.data.data))
    }
    getCategories()
  }, [])
  useEffect(() => {
    setSearchParams(filter)
  }, [filter])
  return (
    <Stack
      as="form"
      direction={['column', null, null, 'row']}
      gap="4"
      justify="center"
      alignItems="center"
      w="70%"
      mx="auto"
      my="10"
      p="5"
      bg="blackAlpha.300"
      borderRadius="md"
      onSubmit={handleSubmit(handleSearch)}
    >
      <Stack gap="3" w="80%" direction="column" justify="space-between">
        <Stack direction="row">
          <FormControl>
            <InputGroup borderColor="teal.500">
              <Input
                focusBorderColor="pink.400"
                _placeholder={{ color: 'inherit' }}
                id="search"
                type="search"
                placeholder="Search"
                {...register('search')}
              />
            </InputGroup>
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl>
            <Select
              borderColor="teal.500"
              focusBorderColor="pink.400"
              id="selectCat"
              placeholder="Category"
              {...register('selectCat')}
            >
              {selectCategories?.map((item) => (
                <option key={item.id} value={item.attributes.Name}>
                  {item.attributes.Name}
                </option>
              ))}
            </Select>
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
        </Stack>
        <Box w="50%" mx="auto">
          <FormControl p="2">
            <FormLabel flexDirection="row" display="flex">
              <Text>Price: ${priceStart}</Text>
              <Spacer />
              <Text>${priceEnd}</Text>
            </FormLabel>
            <RangeSlider
              max={500}
              step={10}
              colorScheme="pink"
              defaultValue={[priceStart, priceEnd]}
              onChange={(val) => {
                setPriceStart(val[0])
                setPriceEnd(val[1])
              }}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>

              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </FormControl>
        </Box>
      </Stack>
      <ButtonGroup size="sm">
        <Button
          border="1px"
          borderColor="teal.500"
          type="submit"
          colorScheme="teal"
          variant="outline"
        >
          Search
        </Button>
        <IconButton
          icon={<SmallCloseIcon />}
          colorScheme="red"
          onClick={() => {
            dispatch(clearFilter())
            reset()
          }}
        />
      </ButtonGroup>
    </Stack>
  )
}

export { Filter }
