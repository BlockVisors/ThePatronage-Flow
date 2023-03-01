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

const Benefit = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600" color={'green.700'}>
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function Benefits() {
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
        <Benefit
          heading={'New Markets'}
          text={'Access to newer markets in newer geographies, potentially increased sales'}
        />
        <Benefit
          heading={'One-Off Services'}
          text={'Ability to offer specialized one-off services to your customers without affecting as-is processes'}
        />
        <Benefit
          heading={'Strong Community'}
          text={'Communities form which help you to produce better future offerings.'}
        />
        <Benefit
          heading={'Reduced Fraud'}
          text={'Ticketing fraud is greatly reduced by tracking redemption.'}
        />
        <Benefit
          heading={'Low-Cost Entry'}
          text={'Get involved in NFT economy without large investment, Experience, or technical know how.'}
        />
         <Benefit
          heading={'Secondary Market'}
          text={'Better identify market trends from targeted product releases'}
        />
        <Benefit
          heading={'Early-Mover Advantage'}
          text={'Early adopter advantage in Web3 space'}
        />
        <Benefit
          heading={'Special Offers'}
          text={'Segment and Price Premium Offerings'}
        />
      </Grid>
    </Box>
  );
}