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
import {} from '@chakra-ui/react';

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

export default function gridListWithCTA() {
  return (
    <Box as={Container} maxW="6xl" mt={14} p={70}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}>
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="5xl" fontWeight="700">
              Platform Features
            </chakra.h2>
            <Button colorScheme="green" size="md">
              Get Started
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              Our platform has many great features. We bring you the best that blockchain and crypto have to offer without all of the technical hassles. 
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}>
        <Feature
          heading={'Variety of Experience Offerings'}
          text={'We will have access almost anything with a ticket or reservation. The possiblities are endless'}
        />
        <Feature
          heading={'Managed Wallet'}
          text={'No need to be crypto-savvy to benefit from NFT Technology'}
        />
        <Feature
          heading={'Pay with Credit or Crypto'}
          text={'Using the linked Dapper wallet you can choose to pay with a balance, cryptocurrency or credit card'}
        />
        <Feature
          heading={'Collect and Trade Real-life Utility'}
          text={'Collect and display your experiences.'}
        />
        <Feature
          heading={'Elimate Unncessary Customer Service'}
          text={'Collect and display your experiences.'}
        />
      </Grid>
    </Box>
  );
}