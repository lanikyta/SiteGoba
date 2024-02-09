import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import {
  aguacloaca,
  energia,
  hidraulica,
  infraestructura,
  vialidad,
} from '../../assets'

const Carrousel = () => {
  // const { data, isLoading } = useGet('/carousels', 'image')
  const data = [vialidad, hidraulica, aguacloaca, infraestructura, energia]
  const settings = {
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 10000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  // if (isLoading) {
  //   return <Spinner color="red.500" size="xl" />
  // }
  return (
    <Box w="100%" mx="auto" mb="10" className="boxSlider">
      <Slider {...settings}>
        {data.map((elem, index) => (
          <Image
            h="950px"
            src={elem}
            key={index}
            brightness="40%"
            filter="auto"
          />
        ))}
      </Slider>
    </Box>
  )
}
export { Carrousel }
