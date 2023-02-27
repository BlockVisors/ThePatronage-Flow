import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

import AppLayout from '../components/AppLayout';
 import { Gallery } from '../ui/Content/Gallery/Gallery';
import { Hero } from '../ui/Hero';
import Pricing from '../components/copy/Pricing';
import CallToActionWithIllustration from '../components/copy/CTAIllustration';
import Feature from '../components/copy/Feature';


const HomePage = () => {
  const router = useRouter()

  return (
    <AppLayout>
      <Hero
        heading="Buy, Sell and Trade
Experiences as NFTs."
        content={`Gain access to a better Consumer Experience. Join VIP Groups and get access to Exclusive Experiences. Monetize your product or service by rewarding your most loyal customers and reward loyalty points. Grant access to your pre-releases and sneak-peaks.

`}
        button={
          <Button p="8" borderRadius="0" onClick={() => router.push("/app/drops")}>
            Get Drops
          </Button>
          
        }
         button2={
          <Button p="8" borderRadius="0" onClick={() => router.push("/app/drops")}>
            Learn More
          </Button>
          
        }
        
      />
    <CallToActionWithIllustration />
    <Feature />  
    </AppLayout>
  )
}

export default HomePage
