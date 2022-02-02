import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, Text, Heading, Input } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import Countdown from 'react-countdown';

import { CountCard } from '../components';
import { Header } from '../components';

export default function Home({data, onConnect, address, onMint}) {
  const [count, setCount] = useState(1);
  const { maxSupply, totalSupply, maxMintAmount, cost, loading } = data;

  return (
    <Box
      backgroundImage={ {base : 'black', md: `${process.env.PUBLIC_URL}/homebg.gif`}}
      backgroundPosition="center"
      backgroundSize="cover"
      // backgroundImage={{base:'black'}}
    >
      <Flex
        minH="100vh"
        maxW="1300px"
        w="100%"
        mx="auto"
        px="10px"
        position="relative"
        flexDirection="column"
      >
        {/* <div className='lines'>
          <span className='heroLine1'></span>
          <span className='heroLine2'></span>
          <span className='heroLine3'></span>
          <span className='heroLine4'></span>
        </div> */}
        <Header onConnect={onConnect} address={address} />
        <Flex
          position="absolute"
          bottom={{ base: '40%', md: '10%' }}
          flexDirection="column"
          color="white"
        >
          <Heading mb="10px" maxW="570px" fontSize="60px" className="fontAdd">
            THE 12 <span className='line_break'></span> ZODIACS
          </Heading>
          <Text maxW="450px" className='home_para' fontSize="26px">
            Inspired by the Asian zodiac, THEXII is a unique collection of 12,012 hand-drawn 3D
            artefacts, stored on the Ethereum network.
          </Text>
        </Flex>
      </Flex>
      <Image src={`${process.env.PUBLIC_URL}/homebg.gif`} className='homevideo'/>
    </Box>
  );

 
}
