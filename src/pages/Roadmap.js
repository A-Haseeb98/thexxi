import React, {useState} from 'react';
import {
  Box,
  Text,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';

export default function Roadmap() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleRoadmapChange = index => {
    setActiveIndex(index);
  };
  return (
    <div className='road_main_container' style={{marginTop:"100px", marginBottom:"100px"}}>
    <Box position="relative">
      <Flex
        minH="100vh"
        backgroundImage={`${process.env.PUBLIC_URL}/roadmap3.jpg`}
        backgroundPosition="center"
        backgroundSize="cover"
        py="30px"
        id="roadmap"
        w="100%"
        mx="auto"
        px="10px"
        position="relative"
        flexDirection="column"
        display={activeIndex === 1 ? 'flex' : 'none'}
        className='roadmap_image'
      >
        <Box position="relative" className='roadmap_image' minH="100vh" maxW="1300px" mx="auto" w="100%">
          <Heading className='r_heading' color="white" fontSize={{ base: '4xl', md: '7xl' }} mt="20px"  style={{ fontSize:"60px",fontWeight:"bolder", color:"white", marginTop:"20px"}}>
            ROADMAP
          </Heading>

          <Flex position="absolute" className='roadmap_container' bottom="10%" mb="20px" flexDirection="column" color="white">
            <Text mb="10px" maxW="800px" fontSize={{ base: '24px', md: '45px' }} className='roadmapTitle'>
              01. SHAPING THEXII-VERSE
            </Text>
            <Text maxW="500px" fontSize={{ base: '16px', md: '20px' }} className='roadmapText'
            >
              Steeped in ancient cultures, future fantasies, and a rhapsody of human emotions,
              explore THEXII-verse and uncover the artefacts it holds.
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Flex
        py="30px"
        minH="100vh"
        backgroundImage={`${process.env.PUBLIC_URL}/roadmap2.jpg`}
        backgroundPosition="center"
        backgroundSize="cover"
        // py="30px"
        id="roadmap"
        w="100%"
        px="10px"
        position="relative"
        flexDirection="column"
        display={activeIndex === 2 ? 'flex' : 'none'}
        className='roadmap_image'
      >
        <Box position="relative" className='roadmap_image'  minH="100vh" maxW="1300px" mx="auto" w="100%">
          <Heading color="white" className='r_heading' fontSize={{ base: '4xl', md: '7xl' }} mt="20px" style={{ fontSize:"60px",fontWeight:"bolder", color:"white", marginTop:"20px"}}>
            ROADMAP
          </Heading>

          <Flex position="absolute" className='roadmap_container'  bottom="10%" mb="20px" flexDirection="column" color="white">
            <Text mb="10px" maxW="800px" fontSize={{ base: '24px', md: '45px' }} lineHeight={'75px'} className='roadmapTitle'>
              02. DESCENT OF THE ZODIACS
            </Text>
            <Text maxW="500px" fontSize={{ base: '16px', md: '20px' }} className='roadmapText'>
              Join our blind-box NFT drop.
              <br /> Each Zodiac is unique and unlocks varying levels of access and perks for its
              owner.
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Flex
        minH="100vh"
        py="30px"
        backgroundImage={`${process.env.PUBLIC_URL}/roadmap1.jpg`}
        backgroundPosition="center"
        backgroundSize="cover"
        // py="30px"
        id="roadmap"
        w="100%"
        px="10px"
        position="relative"
        flexDirection="column"
        display={activeIndex === 3 ? 'flex' : 'none'}
        className='roadmap_image'
      >
        <Box position="relative" className='roadmap_image' minH="100vh" maxW="1300px" mx="auto" w="100%">
          <Heading color="white" className='r_heading' fontSize={{ base: '4xl', md: '7xl' }} mt="20px" style={{ fontSize:"60px",fontWeight:"bolder", color:"white", marginTop:"20px"}}>
            ROADMAP
          </Heading>

          <Flex position="absolute" className='roadmap_container'  bottom="10%" mb="20px" flexDirection="column" color="white">
            <Text mb="10px" maxW="800px" fontSize={{ base: '24px', md: '45px' }} lineHeight={'75px'}  className='roadmapTitle'>
              03. THE COMMUNITY ALWAYS PREVAILS
            </Text>
            <Text maxW="500px" fontSize={{ base: '16px', md: '20px' }} className='roadmapText'>
              We have started it. Now you are in control. Let’s build THEXII-verse together.
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Flex
        justifyContent="flex-end"
        pr="80px"
        alignItems="flex-end"
        position="absolute"
        right="80px"
        bottom="10%"
        display={{ base: 'none', md: 'flex' }}
      >
        <Flex
          as="button"
          w="50px"
          h={activeIndex === 1 ? '50px' : '15px'}
          bg="pink"
          justifyContent="center"
          alignItems="center"
          mr="20px"
          onClick={() => handleRoadmapChange(1)}
        >
          <Text
            fontFamily="heading"
            color="white"
            fontWeight="bold"
            fontSize="24px"
            display={activeIndex === 1 ? 'block' : 'none'}
          >
            01
          </Text>
        </Flex>
        <Flex
          as="button"
          w="50px"
          h={activeIndex === 2 ? '50px' : '15px'}
          bg="pink"
          justifyContent="center"
          alignItems="center"
          mr="20px"
          onClick={() => handleRoadmapChange(2)}
        >
          <Text
            fontFamily="heading"
            color="white"
            fontWeight="bold"
            fontSize="24px"
            display={activeIndex === 2 ? 'block' : 'none'}
          >
            02
          </Text>
        </Flex>
        <Flex
          as="button"
          w="50px"
          h={activeIndex === 3 ? '50px' : '15px'}
          bg="pink"
          justifyContent="center"
          alignItems="center"
          onClick={() => handleRoadmapChange(3)}
        >
          <Text
            fontFamily="heading"
            color="white"
            fontWeight="bold"
            fontSize="24px"
            display={activeIndex === 3 ? 'block' : 'none'}
          >
            03
          </Text>
        </Flex>
      </Flex>

      <Flex
        justifyContent="flex-end"
        alignItems="flex-end"
        position="absolute"
        right="20px"
        bottom="2%"
        display={{ base: 'flex', md: 'none' }}
      >
        <Box
          as="button"
          mr="30px"
          disabled={activeIndex === 1}
          opacity={activeIndex === 1 ? 0.3 : 0.8}
          onClick={() => {
            if (activeIndex > 1) {
              setActiveIndex(activeIndex - 1);
            }
          }}
        >
          <IoIosArrowDropleft color="white" size="50px" />
        </Box>
        <Box
          as="button"
          disabled={activeIndex === 3}
          opacity={activeIndex === 3 ? 0.3 : 0.8}
          onClick={() => {
            if (activeIndex < 3) {
              setActiveIndex(activeIndex + 1);
            }
          }}
        >
          <IoIosArrowDropright color="white" size="50px" />
        </Box>
      </Flex>
    </Box>
    </div>
  );
}
