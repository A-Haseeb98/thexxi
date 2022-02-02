import React, { useState, useEffect, useRef } from "react"
import { Flex, Text, Link, Heading, Image, Box, AspectRatio } from '@chakra-ui/react';

export default function About() {
  const [selectedColor, setSelectedColor] = useState('white')
  const [notAvailableColor, setNotAvailableColor] = useState('20%')
  const [availableColor,setAvailableColor] = useState('100%')
  const [animal, setAnimal] = useState('rat')
  


  const video = useRef(null);

  useEffect(() => {
    
    video.current.play()

  }, [video, animal])

  console.log(video.current)
  const renderAnimal = () => {
    setAnimal(localStorage.getItem("animal"))
  
  }

  const renderVideo = () => {

    switch (animal) {
      case 'dog':
        
        return <video id='video-player' key={animal} autoplay muted loop maxW={{ base: '300px', md: '620px' }} width="550" height="550" ref={video}>
          <source src={`${process.env.PUBLIC_URL}/DOG_SHOWCASE.mp4`} type="video/mp4" />
        </video>
        break;
      case 'goat':
        
        return <video id='video-player' key={animal} autoplay muted loop maxW={{ base: '300px', md: '620px' }} width="550" height="550" ref={video}>
          <source src={`${process.env.PUBLIC_URL}/GOAT_SHOWCASE.mp4`} type="video/mp4" />
        </video>
        break;
      case 'monkey':
        
        return <video id='video-player' key={animal} autoplay muted loop maxW={{ base: '300px', md: '620px' }} width="550" height="550" ref={video}>
          <source src={`${process.env.PUBLIC_URL}/MONKEY_SHOWCASE.mp4`} type="video/mp4" />
        </video>
        break;
      case 'ox':
        
        return <video id='video-player' key={animal} autoplay muted loop maxW={{ base: '300px', md: '620px' }} width="550" height="550" ref={video}>
          <source src={`${process.env.PUBLIC_URL}/OX_SHOWCASE.mp4`} type="video/mp4" />
        </video>
        break;
      case 'rat':
        return <video id='video-player' key={animal} autoplay muted loop maxW={{ base: '300px', md: '620px' }} width="550" height="550" ref={video}>
          <source src={`${process.env.PUBLIC_URL}/RAT_SHOWCASE.mp4`} type="video/mp4" />
        </video>
        break;
      case 'rooster':
        
        return <video id='video-player' key={animal} autoplay muted loop maxW={{ base: '300px', md: '620px' }} width="550" height="550" ref={video}>
          <source src={`${process.env.PUBLIC_URL}/ROOSTER_SHOWCASE.mp4`} type="video/mp4" />
        </video>
        break;
      case 'tiger':
        
        return <video id='video-player' key={animal} autoplay muted loop maxW={{ base: '300px', md: '620px' }} width="550" height="550" ref={video}>
          <source src={`${process.env.PUBLIC_URL}/TIGER_SHOWCASE.mp4`} type="video/mp4" />
        </video>
        break;

        case 'rabbit':
        
          return <video id='video-player' key={animal} autoplay muted loop maxW={{ base: '300px', md: '620px' }} width="550" height="550" ref={video}>
            <source src={`${process.env.PUBLIC_URL}/RABBIT_SHOWCASE.mp4`} type="video/mp4" />
          </video>
          break;
          case 'dragon':
        
        return <video id='video-player' key={animal} autoplay muted loop maxW={{ base: '300px', md: '620px' }} width="550" height="550" ref={video}>
          <source src={`${process.env.PUBLIC_URL}/DRAGON_SHOWCASE.mp4`} type="video/mp4" />
        </video>
        break;
        case 'snake':
        
        return <video id='video-player' key={animal} autoplay muted loop maxW={{ base: '300px', md: '620px' }} width="550" height="550" ref={video}>
          <source src={`${process.env.PUBLIC_URL}/SNAKE_SHOWCASE.mp4`} type="video/mp4" />
        </video>
        break;
        case 'horse':
        
        return <video id='video-player' key={animal} autoplay muted loop maxW={{ base: '300px', md: '620px' }} width="550" height="550" ref={video}>
          <source src={`${process.env.PUBLIC_URL}/HORSE_SHOWCASE.mp4`} type="video/mp4" />
        </video>
        break;
        // ssdsdsds
      default:
        return <video id='video-player' key={animal} autoplay muted loop maxW={{ base: '300px', md: '620px' }} width="550" height="550" ref={video}>
          <source src={`${process.env.PUBLIC_URL}/STAYTUNED_SHOWCASE.mp4`} type="video/mp4" />
        </video>

    }


  }

  return (
    <div style={{ marginBottom: "100px", marginTop: "100px" }}>
      <Flex
        maxW="1300px"
        mx="auto"
        flexDirection="column"
        py="30px"
        id="about"
        px={{ base: '20px', md: 0 }}
      >
        <Heading
          color="white"
          fontSize={{ base: '4xl', md: '7xl' }}
          mt="300px"
          mb="20px"
          textAlign="left"
          className="unique_heading"
        >
          12,012 <span className="line_break"></span> UNIQUE ARTEFACTS
        </Heading>
        <Text mb="20px" className="about_para" color="white" maxW="1000px">
          Based on the lunar calendar an animal and its reputed attributes is assigned to each year
          in a repeating 12-year cycle. These animals are known across the world as the 12 Zodiacs.
          With the birth of THEXII-verse, they are about to descend on us. Are you ready for them?
        </Text>
        <Text mb="40px" color="white" className="about_para" maxW="1000px">
          You can now own these unique artefacts. Each Zodiac is one-of-a-kind and unlocks varying
          levels of access and perks for its owner. This is only the beginning. Be aware. Don’t say
          we didn’t warn you.
        </Text>

        <Flex
          w="100%"
          px="10px"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-around"
        >
          <div style={{height:"400px", background:"transparent"}}>
          {renderVideo()}
          </div>

          <Flex className="boxes_container" mr={{ base: 0, md: '40px' }}>
            <Flex
              flexDirection={{ base: 'row', md: 'column' }}
              mr={{ base: '0px', md: '20px' }}
              flexWrap="wrap"
              className="box_wrapper"
            >
              <Flex mb="20px" mr={{ base: '10px', md: 0 }} onClick={() => { localStorage.setItem("animal", "rat"); renderAnimal(); }} className="forPointer">
                <Text
                  opacity={animal === "rat"? availableColor : notAvailableColor}
                  color={animal === "rat"? "pink" : "white"}
                  fontSize="20px"
                  marginRight="15px"
                  display={{ base: 'none', md: 'block' }}
                >
                  01
                </Text>
                <Heading opacity={animal === "rat"? availableColor : notAvailableColor} color={animal === "rat"? "pink" : "white"} fontSize={{ base: '2xl', md: '6xl' }} >
                  RAT
                </Heading>
              </Flex>
              <Flex mb="20px" mr={{ base: '10px', md: 0 }} onClick={() => { localStorage.setItem("animal", "tiger"); renderAnimal(); }} className="forPointer">
                <Text
                  opacity={animal === "tiger"? availableColor : notAvailableColor}
                  color={animal === "tiger"? "pink" : "white"}
                  fontSize="20px"
                  marginRight="15px"
                  display={{ base: 'none', md: 'block' }}
                >
                  03
                </Text>
                <Heading opacity={animal === "tiger"? availableColor : notAvailableColor} color={animal === "tiger"? "pink" : "white"} fontSize={{ base: '2xl', md: '6xl' }}>
                  TIGER
                </Heading>
              </Flex>
              <Flex mb="20px" mr={{ base: '10px', md: 0 }} onClick={() => { localStorage.setItem("animal", "dragon"); renderAnimal(); }} className="forPointer">
                <Text
                  opacity={animal === "dragon"? availableColor : notAvailableColor}
                  color={animal === "dragon"? "pink" : "white"}
                  fontSize="20px"
                  marginRight="15px"
                  display={{ base: 'none', md: 'block' }}
                >
                  05
                </Text>
                <Heading opacity={animal === "dragon"? availableColor : notAvailableColor} color={animal === "dragon"? "pink" : "white"} fontSize={{ base: '2xl', md: '6xl' }}>
                  DRAGON
                </Heading>
              </Flex>
              <Flex mb="20px" mr={{ base: '10px', md: 0 }} onClick={() => { localStorage.setItem("animal", "horse"); renderAnimal(); }} className="forPointer">
                <Text
                  opacity={animal === "horse"? availableColor : notAvailableColor}
                  color={animal === "horse"? "pink" : "white"}
                  fontSize="20px"
                  marginRight="15px"
                  display={{ base: 'none', md: 'block' }}
                >
                  07
                </Text>
                <Heading opacity={animal === "horse"? availableColor : notAvailableColor} color={animal === "horse"? "pink" : "white"} fontSize={{ base: '2xl', md: '6xl' }}>
                  HORSE
                </Heading>
              </Flex>
              <Flex mb="20px" mr={{ base: '10px', md: 0 }} onClick={() => { localStorage.setItem("animal", "monkey"); renderAnimal(); }} className="forPointer">
                <Text color={animal === "monkey"? "pink" : "white"} opacity={animal === "monkey"? availableColor : notAvailableColor} fontSize="20px" display={{ base: 'none', md: 'block' }} marginRight="15px">
                  09
                </Text>
                <Heading color={animal === "monkey"? "pink" : "white"} fontSize={{ base: '2xl', md: '6xl' }} opacity={animal === "monkey"? availableColor : notAvailableColor}>
                  MONKEY
                </Heading>
              </Flex>
              <Flex mb="20px" mr={{ base: '10px', md: 0 }} onClick={() => { localStorage.setItem("animal", "dog"); renderAnimal(); }} className="forPointer">
                <Text color={animal === "dog"? "pink" : "white"} fontSize="20px" display={{ base: 'none', md: 'block' }} marginRight="15px" opacity={animal === "dog"? availableColor : notAvailableColor}>
                  11
                </Text>
                <Heading color={animal === "dog"? "pink" : "white"} fontSize={{ base: '2xl', md: '6xl' }} opacity={animal === "dog"? availableColor : notAvailableColor}>
                  DOG
                </Heading>
              </Flex>
            </Flex>

            <Flex
              flexDirection={{ base: 'row', md: 'column' }}
              flexWrap="wrap"
              className="box_wrapper"

            >
              <Flex mb="20px" mr={{ base: '10px', md: 0 }} onClick={() => { localStorage.setItem("animal", "ox"); renderAnimal(); }} className="forPointer">
                <Text color={animal === "ox"? "pink" : "white"} fontSize="20px" display={{ base: 'none', md: 'block' }} marginRight="15px" opacity={animal === "ox"? availableColor : notAvailableColor}>
                  02
                </Text>
                <Heading color={animal === "ox"? "pink" : "white"} fontSize={{ base: '2xl', md: '6xl' }} opacity={animal === "ox"? availableColor : notAvailableColor}>
                  OX
                </Heading>
              </Flex>
              <Flex opacity={animal === "rabbit"? availableColor : notAvailableColor} mb="20px" mr={{ base: '10px', md: 0 }} onClick={() => { localStorage.setItem("animal", "rabbit"); renderAnimal(); }} className="forPointer">
                <Text
                  opacity={notAvailableColor}
                  color={animal === "rabbit"? "pink" : "white"}
                  fontSize="20px"
                  display={{ base: 'none', md: 'block' }}
                  marginRight="15px"
                >
                  04
                </Text>
                <Heading opacity={animal === "rabbit"? availableColor : notAvailableColor} color={animal === "rabbit"? "pink" : "white"} fontSize={{ base: '2xl', md: '6xl' }}>
                  RABBIT
                </Heading>
              </Flex>
              <Flex mb="20px" opacity={animal === "snake"? availableColor : notAvailableColor} mr={{ base: '10px', md: 0 }} onClick={() => { localStorage.setItem("animal", "snake"); renderAnimal(); }} className="forPointer">
                <Text
                  opacity={notAvailableColor}
                  color={animal === "snake"? "pink" : "white"}
                  fontSize="20px"
                  display={{ base: 'none', md: 'block' }}
                  marginRight="15px"
                >
                  06
                </Text>
                <Heading opacity={animal === "snake"? availableColor : notAvailableColor} color={animal === "snake"? "pink" : "white"} fontSize={{ base: '2xl', md: '6xl' }}>
                  SNAKE
                </Heading>
              </Flex>
              <Flex mb="20px" mr={{ base: '10px', md: 0 }} onClick={() => { localStorage.setItem("animal", "goat"); renderAnimal(); }} className="forPointer">
                <Text
                  opacity={animal === "goat"? availableColor : notAvailableColor}
                  color={animal === "goat"? "pink" : "white"}
                  fontSize="20px"
                  display={{ base: 'none', md: 'block' }}
                  marginRight="15px"
                >
                  08
                </Text>
                <Heading opacity={animal === "goat"? availableColor : notAvailableColor} color={animal === "goat"? "pink" : "white"} fontSize={{ base: '2xl', md: '6xl' }}>
                  GOAT
                </Heading>
              </Flex>
              <Flex mb="20px" opacity={animal === "rooster"? availableColor : notAvailableColor} mr={{ base: '10px', md: 0 }} onClick={() => { localStorage.setItem("animal", "rooster"); renderAnimal(); }} className="forPointer">
                <Text
                  opacity={notAvailableColor}
                  color={animal === "rooster"? "pink" : "white"}
                  fontSize="20px"
                  display={{ base: 'none', md: 'block' }}
                  marginRight="15px"
                >
                  10
                </Text>
                <Heading opacity={animal === "rooster"? availableColor : notAvailableColor} color={animal === "rooster"? "pink" : "white"} fontSize={{ base: '2xl', md: '6xl' }}>
                  ROOSTER
                </Heading>
              </Flex>
              <Flex mb="20px" opacity={animal === "pig"? availableColor : notAvailableColor} mr={{ base: '10px', md: 0 }} onClick={() => { localStorage.setItem("animal", "pig"); renderAnimal(); }} className="forPointer">
                <Text
                  opacity={notAvailableColor}
                  color={animal === "pig"? "pink" : "white"}
                  fontSize="20px"
                  display={{ base: 'none', md: 'block' }}
                  marginRight="15px"
                >
                  12
                </Text>
                <Heading opacity={animal === "pig"? availableColor : notAvailableColor} color={animal === "pig"? "pink" : "white"} fontSize={{ base: '2xl', md: '6xl' }}>
                  PIG
                </Heading>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex className="opensea_w" mb="100px" py="10px" mt="30px" justifyContent="center">
          <Link
            backgroundImage={`${process.env.PUBLIC_URL}/box2.png`}
            backgroundPosition="center"
            backgroundSize="cover"
            alignItems="center"
            display="flex"
            w="250px"
            h="70px"
            color="white"
            pb="6px"
            mt="60px"
            fontSize="20px"
            fontWeight="bold"
            justifyContent="center"
            className="buy_openSea"
          >
            SOON ON OPENSEA
          </Link>
        </Flex>
      </Flex>

      <Box
        backgroundImage={`${process.env.PUBLIC_URL}/join.jpg`}
        backgroundPosition="center"
        backgroundSize="cover"
        className="join_cover"
      >
        <Flex
          minH="100vh"
          className="main_how_container"
          maxW="1300px"
          w="100%"
          mx="auto"
          px="10px"
          position="relative"
          flexDirection="column"
        >
          <Flex
            // left="10%"
            position="absolute"
            top="10%"
            flexDirection="column"
            color="white"
            mt="100px"
          >
            <Heading className="how_can_i_join" mb="10px" fontSize={{ base: '36px', md: '60px' }}>
              HOW CAN I JOIN?
            </Heading>
            <Text className="para_at_the_beg" mb="15px" maxW="500px" fontSize="15px" pr="10px">
              At the beginning of lunar new year, the Zodiacs descend. Each one is unique and
              unlocks varying levels of access and perks for its owner. Snatch one for yourself or
              gift it to a friend. Join our community and show your love.
            </Text>
            <Text className="sub_involved" maxW="660px" fontSize="20px">
              <strong>Be involved, get whitelisted!</strong>
            </Text>
            <Flex className="btn_container" mb="100px" py="10px" mt="60px">
              <Link
                isExternal
                href="https://discord.gg/PNm9eUUvag"
                backgroundImage={`${process.env.PUBLIC_URL}/box2.png`}
                backgroundPosition="center"
                backgroundSize="cover"
                alignItems="center"
                display="flex"
                w="250px"
                h="70px"
                color="white"
                pb="6px"
                fontSize="20px"
                fontWeight="bold"
                justifyContent="center"
                className="btn_join"
                _hover={{
                  backgroundImage:`${process.env.PUBLIC_URL}/BOTTON_HOVER.png`
      
                  
                }}
              >
                JOIN THE DISCORD
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
