import { Flex, Text, Link, Heading, Image, Box } from '@chakra-ui/react';

export default function Artist() {
  return (
    <div className='artist_container_m' style={{marginBottom:"100px",marginTop:"100px",}}>
      <Flex
        flexDirection="column"
        maxW="1300px"
        w="100%"
        id="artist"
        mx="auto"
        mb={{ base: '20px', md: '100px' }}
      >
        <Flex
          maxW="1300px"
          w="100%"
          py="60px"
          id="gallery"
          mx="auto"
          px="10px"
          position="relative"
          flexDirection="column"
          alignItems="flex-end"
        >
          <Flex alignItems="flex-start" color="white" flexDirection={{ base: 'column', md: 'row' }}>
            <Box className='art-con_' mr={{ base: 0, md: '20px' }} mt={{ base: '-30px', md: '20px' }} maxW={{ base: '100%', md: '400px' }}>
              <Heading  className='artist_main_heading' style={{marginBottom:"10px", fontSize:"60px",marginTop:"50px", fontWeight:"bolder", color:"white"}}>
                ARTIST
              </Heading>
              <Text mb="15px" className='artist_para' fontSize="15px">
                THEXII is the brainchild of Xuyang Zhao and Jianmin Huang. Both born in China and
                living in the Netherlands, they are the living proof that shared experiences build a
                lifelong friendship.
              </Text>
              <Text className='artist_para' fontSize="15px">
                With THEXII, they embark on a new chapter in their brotherhood and bring the Asian
                Zodiac to the Metaverse, for all of us to enjoy. Steeped in ancient cultures, future
                fantasies, and a rhapsody of human emotions, they let you explore THEXII-verse and
                uncover the artefacts it holds.
              </Text>
            </Box>
            <Flex flexDirection="column" position="relative">
              <Flex
                backgroundImage={`${process.env.PUBLIC_URL}/box4.png`}
                backgroundPosition="center"
                backgroundSize="contain"
                backgroundRepeat="no-repeat"
                flexDirection="column"
                justifyContent="center"
                alignSelf="flex-end"
                alignItems="right"
                display="flex"
                px="10px"
                maxW="600px"
                w="100%"
                h={{ base: '70px', md: '70px' }}
                textAlign="right"
                color="white"
                className='a_back_image'
              >
                <h1 className='person_name' fontSize={{ base: '12px', md: '15px' }} style={{ fontSize:"15px", fontWeight:"bolder", color:"white"}}>
                  JIANMIN HUANG aka JIMMY ON THE RUN{' '}
                </h1>
                <Text className='person_post' fontSize={{ base: '10px', md: '13px' }}>
                  {' '}
                  Fashion and street photographer
                </Text>
              </Flex>
              <Box
                maxW={{ base: '100%', lg: '935px' }}
                px="4px"
                py="4px"
                borderColor="pink"
                borderWidth="1px"
              >
                <Image src={`${process.env.PUBLIC_URL}/artisr.jpg`} style={{width:"100%"}}/>
              </Box>
              <Flex
                backgroundImage={`${process.env.PUBLIC_URL}/box3.png`}
                backgroundPosition="center"
                backgroundSize="contain"
                backgroundRepeat="no-repeat"
                flexDirection="column"
                // position="absolute"
                // right="13.5%"
                // top="630"
                justifyContent="center"
                alignItems="left"
                display="flex"
                px="10px"
                maxW="600px"
                w="100%"
                h="70px"
                textAlign="left"
                className='a_back_image'
                color="white"
        
              >
                <h1 className='person_name' style={{ fontSize:"15px",fontWeight:"bolder", color:"white"}} fontSize={{ base: '12px', md: '15px' }}>XUYANG ZHAO </h1>
                <Text className='person_post' fontSize={{ base: '10px', md: '13px' }}>
                  3D artist, virtual exhibition designer and NFT entrepreneur
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
