import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Link,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
  Heading,
} from '@chakra-ui/react';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';

import { shortenAddress } from '../candy-machine';

export default function Header({ address, onConnect }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = React.useState('right');

  return (
    <>
      <Flex
        py="20px"
        maxW="1300px"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        mx="auto"
      >
        {/* <Heading color="white">THEXII</Heading> */}
        <Image src={`${process.env.PUBLIC_URL}/logo.png`} maxW={{ base: '80px', md: '120px' }} />

        <Flex alignItems="center" display={{ base: 'none', lg: 'flex' }}>
          <Link href="#about" className="link" mr="25px" color="white">
            ABOUT
          </Link>
          <Link href="#gallery" className="link" mr="25px" color="white">
            ARTIST
          </Link>
          <Link href="#roadmap" className="link" mr="25px" color="white">
            ROADMAP
          </Link>

          <Link href="#faq" className="link" color="white" mr="25px">
            FAQ
          </Link>
          <Flex alignItems="center">
            <Link mr="25px" color="twitter" isExternal href="https://twitter.com/thexiinft">
              <AiOutlineTwitter size="30" />
            </Link>
            <Link color="discord" isExternal href="https://discord.gg/PNm9eUUvag">
              <FaDiscord size="30" />
            </Link>
          </Flex>
        </Flex>
        <Flex alignItems="center" display={{ base: 'flex', md: 'none' }}>
          <Link
            color="discord"
            isExternal
            href="https://discord.gg/PNm9eUUvag"
            display={{ base: 'block', lg: 'none' }}
            mr="10px"
          >
            <FaDiscord color='#0276FD' size="40" />
          </Link>
          <Box bg="#333333" as="button" p="1" onClick={onOpen} borderRadius="12px">
            <HiMenu color="white" size="30" />
          </Box>
        </Flex>
      </Flex>
      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        display={{ base: 'block', md: 'none' }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
          <Box position='absolute' top={"20px"} right={'20px'}  as="button" p="1" onClick={onClose} >
            <IoCloseSharp color="white" size="30" />
          </Box>
            <Link href="#about" className="link" mr="25px"  display="block" py="15px">
              ABOUT
            </Link>
            <Link
              href="#gallery"
              className="link"
              mr="25px"
              display="block"
              py="15px"
            >
              ARTIST
            </Link>
            <Link
              href="#roadmap"
              className="link"
              mr="25px"
              display="block"
              py="15px"
            >
              ROADMAP
            </Link>
            <Link href="#faq" className="link" mr="25px" display="block" py="15px">
              FAQ
            </Link>
            {/* <Flex alignItems="center" py="15px">
              <Link mr="25px" color="twitter" isExternal href="https://twitter.com/thexiinft">
                <AiOutlineTwitter size="30" />
              </Link>
              <Link color="discord" isExternal href="https://discord.gg/PNm9eUUvag">
                <FaDiscord size="30" />
              </Link>
            </Flex> */}
            <Flex
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
          <Image marginTop={'30px'} src={`${process.env.PUBLIC_URL}/logo.png`} w={{ base: '100px' }}  className='logofooter'/>
        </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
