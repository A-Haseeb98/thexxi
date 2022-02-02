import { Box, Flex, Image, Heading, Link, Text } from '@chakra-ui/react';

import { FiTwitter } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <Flex
        py="30px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <video style={{opacity : 0.7, background: 'black'}} className="videoTag" autoPlay loop muted>
          <source src={`${process.env.PUBLIC_URL}/footer_banner.mp4`} type="video/mp4" />
        </video>
        <Flex
          minH={{ base: '100%', md: '100vh' }}
          maxW="1300px"
          w="100%"
          flexDirection={{ base: 'column', md: 'row' }}
          position="relative"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* <Heading color="white" fontSize={{ base: '24px', md: '50px' }}>
            THEXII
          </Heading> */}
          <Image src={`${process.env.PUBLIC_URL}/logo.png`} maxW={{ base: '90px', md: '120px' }}  className='logofooter1'/>
          <Flex
            justifyContent="center"
            alignItems="center"
            w={{ base: '150px', md: '200px' }}
            h={{ base: '50px', md: '60px' }}
            borderRadius="10px"
            my={{ base: '30px', md: 0 }}
            bg="blue"
          >
            <Link isExternal href="https://discord.gg/PNm9eUUvag">
              <Image
                w={{ base: '100px', md: '150px' }}
                src={`${process.env.PUBLIC_URL}/discord.png`}
              />
            </Link>
          </Flex>
          <Flex className='icon_container' justifyContent="space-around" alignItems="center" w="200px" h="60px">
            <Link isExternal href="https://www.instagram.com/thexiinft/">
              <Image
                maxW={{ base: '50px', md: '70px' }}
                src={`${process.env.PUBLIC_URL}/instagram.png`}
                className='icon_image_'
              />
            </Link>
            <Link isExternal href="https://twitter.com/thexiinft">
              <Image
                className='icon_image_'
                maxW={{ base: '50px', md: '70px' }}
                src={`${process.env.PUBLIC_URL}/twitter.png`}
              />
            </Link>
          </Flex>
          <Image src={`${process.env.PUBLIC_URL}/logo.png`} maxW={{ base: '90px', md: '120px' }}  className='logofooter'/>
        </Flex>

        <Text className='copy_right' color="bgLight" mt={{ base: '15px', md: 0 }}>
          &copy;COPYRIGHT-{new Date().getFullYear()} THEXII. ALL RIGHTS RESERVED.
        </Text>
      </Flex>
    </>
  );
}
