import {
  Box,
  Heading,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

const data = [
    {
      title: 'When is the official launch?',
      content: 'At the beginning of the lunar new year of the Tiger, the Zodiacs descend. In the first month following lunar new year, we want to give everyone a fair chance of getting a unique artifact.'
    },
    {
      title: 'How many Zodiacs will descend?',
      content: '12,012 and all of them totally unique. ',
    },
    {
      title: 'What’s the mint price?',
      content: 'We want to provide our community with the best quality artifacts at an affordable price. That’s why the mint price is set at 0.2 ETH (+ gas fees).  ',
    },
    {
      title: 'What is a blind-box NFT drop?',
      content:
        'When eligible, mint your NFT and receive it in your digital wallet. You will notice that the Zodiac is still hidden in the darkness of THEXII-verse. But fret not, you will be notified when your Zodiac has decided to come out of hiding. Then, you will see your priced possession in its full glory.',
    },
    {
      title: 'Can I get a sneak peek at the Zodiacs?',
      content:
        'Yes! Join our Discord community and check out our #sneak peek channel, where some of the Zodiacs decided to hang out.',
    },
    {
      title: 'What blockchain is the project hosted on?',
      content:
        'THEXII is minted on the Ethereum blockchain.',
    },
    {
      title: 'What are the utilities of THEXII artefacts?',
      content:
        'First and foremost, the artifacts are thrilling, incredibly detailed, and a feast for the eyes. But there is more! Each Zodiac unlocks varying levels of access and perks for its owner, such as exclusive NFT drops, real-life events, limited edition products and one-of-a-kind filters and AR lenses in Straight Fire’s NFT Social dApp.'
    },
    {
      title: 'I really can’t wait to get myself a THEXII artefacts!',
      content:
        'Don’t wait and jump into THEXII-verse. First stop: our Discord community.',
    },
  ];

const config = {
  animate: true,
};

export default function FAQ() {
  const styles = {
    bgColor: '#400069',
    rowTitleColor: '#fff',
    rowContentColor: '#fff',
    rowTitleTextSize: 'large',
  };
  return (
    <div style={{marginBottom:"100px",marginTop:"100px"}}>
      <Flex
        minH="100vh"
        py="20"
        bg="bg"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        id="faq"
      >
        <Box maxW="1300px" w="95%" px="20px">
          <Heading className='faq_head' color="white" mb="20px" fontSize={{ base: '4xl', md: '60px' }}>
            FAQ
          </Heading>
          {/* <Faq data={data} styles={styles} config={config} /> */}
          <Accordion className='myAcc' allowMultiple allowToggle>
            {data.map((faq, index) => (
              <AccordionItem borderTopWidth="0px" mb="20px" key={index}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton px="0">
                        <Box
                          flex="1"
                          textAlign="left"
                          color="white"
                          fontSize={{ base: '24px', md: '34px' }}
                          fontWeight="normal"
                          py="10px"
                          className='question'
                        >
                          {faq.title}
                        </Box>
                        {isExpanded ? (
                          <AiOutlineClose color="white" size="28" />
                        ) : (
                          <AiOutlinePlus size="28" color="white" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} color="white" px="0">
                    {faq.content}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Flex>
    </div>
  );
}
