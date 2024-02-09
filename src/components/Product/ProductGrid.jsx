import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Spinner,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useGet } from '../../Hooks/useGet'
import { Card } from './Card'
import qs from 'qs'
import { Filter } from '../Filter/Filter'
const ProductGrid = () => {
  const [page, setPage] = useState(1)
  const queryPage = qs.stringify(
    {
      pagination: {
        page,
        pageSize: 6,
      },
    },
    {
      encodeValuesOnly: true,
    }
  )
  const { data, isLoading } = useGet(`/products`, 'image', queryPage)
  const handlePage = (op) => {
    if (op === '+') {
      setPage(page + 1)
      window.scrollTo({ top: 0 })
    } else {
      setPage(page - 1)
      window.scrollTo({ top: 0 })
    }
  }

  if (isLoading) {
    return <Spinner color="red.500" size="xl" />
  }
  return (
    <Box>
      <Filter setPage={setPage} />
      <Flex
        my="10"
        gap="6"
        w="80%"
        justify="space-around"
        wrap="wrap"
        mx="auto"
      >
        {data?.data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Flex>
      <ButtonGroup alignItems="center">
        <IconButton
          icon={<ArrowLeftIcon />}
          colorScheme="cyan"
          variant="outline"
          isDisabled={page === 1}
          onClick={() => handlePage('-')}
        />
        <Text>{page}</Text>
        <IconButton
          icon={<ArrowRightIcon />}
          colorScheme="cyan"
          variant="outline"
          isDisabled={page === data?.meta.pagination.pageCount}
          onClick={() => handlePage('+')}
        />
      </ButtonGroup>
    </Box>
  )
}

export { ProductGrid }
