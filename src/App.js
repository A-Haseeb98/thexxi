import React, { useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  extendTheme,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Fonts from './Fonts';
import { Home, Gallery, Roadmap,FAQ, About,Artist, Team } from './pages';
import { Header, Footer } from './components';
import { fetchData } from './redux/data/dataActions';
import { connect } from './redux/blockchain/blockchainActions';

const extendedTheme = extendTheme({
  ...theme,
  fonts: {
    heading: 'Impact',
    body: 'Impact',
  },
  colors: {
    ...theme.colors,
    bg: '#400069',
    bgLight: '#efeee8',
    bgDark: '#e8e7df',
    lightBlack: '#181817',
    lightOrange: '#feb64d',
    pink:'#9D00FF',
    blue:'#4287f5',
    twitter:'#1DA1F2',
    discord:'#7289DA'
    
  },
});

const {REACT_APP_CONTRACT_ADDRESS} = process.env

function App() {
   const blockchain = useSelector(state => state.blockchain);
   const data = useSelector(state => state.data);
  const dispatch = useDispatch();
  
  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const handleConnect = () => {
    dispatch(connect());
    getData();
  };

  useEffect(() => {
    if (!blockchain.account && !blockchain.smartContract) {
      handleConnect();
    } else {
      getData();
    }
  }, [blockchain.account]);

  // useEffect(() => {
  //   if (blockchain.errorMsg) {
  //     toast.error(blockchain.errorMsg);
  //   }
  //   if (data.errorMsg) {
  //     toast.error(data.errorMsg);
  //   }
  // }, [blockchain.errorMsg, data.errorMsg]);

  const claimNFTs = (count) => {
    if (count <= 0) {
      return;
    }

    toast.info('Preparing your NFT...');
    const value = blockchain.web3.utils.toWei((data.cost * count).toString(), 'ether');
    blockchain.smartContract.methods
      .mint(count)
      .send({
        gasLimit: '4712388',
        to: REACT_APP_CONTRACT_ADDRESS,
        from: blockchain.account,
        value,
      })
      .once('error', (err) => {
        console.log(err);
        toast.error('It seems the transaction was cancelled.');
      })
      .then((receipt) => {
        toast.success(
          'Woohoo! NFT minted successfully!'
        );
        dispatch(fetchData(blockchain.account));
      });
  };

  return (
    <ChakraProvider theme={extendedTheme}>
      <Fonts />
      <Box
       minH="100vh"
       bg="black"
      >
        <Box>
          <Home
            onConnect={handleConnect}
            address={blockchain.account}
            data={data}
            onMint={claimNFTs}
            loading={blockchain.loading}
          />
          <About />
          <Artist/>
          <Roadmap />
          <FAQ />
          {/* <Gallery />s
          <Team /> */}
          
        </Box>
        <Footer />
        <ToastContainer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
