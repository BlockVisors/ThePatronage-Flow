import { Box, Container, Flex, Grid, GridItem, Heading, Img } from '@chakra-ui/react';
// import { Col, Container, Grid, Text } from '@nextui-org/react';
// import Spline from '@splinetool/react-spline';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
// import ThreeColumnFeature from '../components/ThreeColumnFeature';
// import CTAWithAnnotation from '../components/CTAWithAnnotation';
// import SampleExperiences from '../components/SampleExperiences';
// import Hero from '../components/Hero';
// import GettingStarted from '../components/GettingStarted';
import FeatureImage from '../../../components/copy/FeatureImage';
import AppLayout from "../../../components/AppLayout";
import Pricing from '../../../components/copy/Pricing';
import BusIntegrate from '../../../components/copy/BusIntegrate';
import AboutGen from '../../../components/copy/AboutGen';

export const About = () => {

 const [mounted, setMounted] = useState(false);

useEffect(() => setMounted(true), []);


  return (
  <>
    <AppLayout>
     <AboutGen />
   </AppLayout>
  </>
  )
}

export default About