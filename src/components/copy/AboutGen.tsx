import { useRouter } from 'next/router';
import React from 'react';

import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from '@chakra-ui/react';
// import {} from '@chakra-ui/react';

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
    
  );
};

export default function AboutGen() {
  return (
    <Box as={Container} maxW="6xl" mt={14} p={46}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}>
        <GridItem colSpan={2}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h1 fontSize="5xl" fontWeight="700">
              About
            </chakra.h1>
            {/* <Button colorScheme="green" size="md">
              Get Started
            </Button> */}
          </VStack>
        </GridItem>
        
        <GridItem paddingTop={16} colSpan={2}>
          {/* <chakra.h3 fontSize="xl" fontWeight={400}> */}
          <Flex>
            <chakra.p fontSize="2xl">
              The Patronage is a premier Cryptocurrencies-based marketplace where users can buy and sell real life experiences in the form of NFTs (Non-Fungible Tokens). Patronage was created to offer users a platform where a real world utility could be traded easily . Our Platform allows users to buy and sell real life experiences, much similar to how items are bought or sold on EBay or Amazon. 
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>

     <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}>
        <GridItem colSpan={2} paddingTop={12}>
          <VStack alignItems="flex-start" spacing="20px">
            <GridItem>
          <Flex>
             <chakra.p fontSize={["2xl", "2xl", "2xl", "2xl"]}>
              One major difference is that the experience is now encoded as an NFT into a Blockchain, which is immutable, secure and more importantly allows for creation of easier secondary market.
            </chakra.p>
          </Flex>
        </GridItem>
          </VStack>
        </GridItem>
        
         
      </Grid>


     
      <Divider mt={12} mb={12} opacity={1} />
      <Grid/>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}>
        <Feature
          heading={'Better Transparency'}
          text={'To improve transparency, organizations have tried to implement more rules and regulations. But there is one thing that doesn’t make any system 100% transparency, i.e., — centralization.'}
        />
        <Feature
          heading={'Reduced Costs'}
          text={'Businesses spend a lot of money to improve to manage their current system. Using Blockchain to reduce cost and divert the money into building something new or improving current processes makes sense'}
        />
        <Feature
          heading={'Enhanced Security'}
          text={'Blockchain technology utilizes advanced security compared to other platforms or record-keeping systems. Transactions need to be agreed upon according to the consensus method. Also, each transaction is encrypted and has a proper link to the old transaction using a hashing method.'}
        />
         <Feature
          heading={'True Traceablity'}
          text={'With Blockchain, companies can focus on creating a supply chain that works with both vendors and suppliers. In the traditional supply chain, it is hard to trace items that can lead to multiple problems, including theft, counterfeit, and loss of goods.'}
        />
        {/* <Feature
          heading={'Fourth Feature'}
          text={'Short text describing one of you features/service'}
        /> */}
      </Grid>
    </Box>
  );
}