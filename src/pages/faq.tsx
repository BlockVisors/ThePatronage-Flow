//import { Box, Container, Flex, Grid, GridItem, Heading, Img } from '@chakra-ui/react';
// import { Col, Container, Grid, Text } from '@nextui-org/react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import FAQComp from '../components/copy/FAQComp';
import AppLayout from "../components/AppLayout";
import { useRouter } from 'next/router';


export const faq: NextPage = () => {
  // const router = useRouter()
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => setMounted(true), []);


  return (
    <>
        <AppLayout>
        <FAQComp />
        </AppLayout>
    </>
  )
}

export default faq