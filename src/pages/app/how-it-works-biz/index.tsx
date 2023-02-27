import { useRouter } from 'next/router';
import React from 'react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react"



import FAQComp from '../../../components/copy/FAQComp';
import AppLayout from "../../../components/AppLayout";
import HowBiz from '../../../components/copy/HowBiz';


export const HowitworksBiz = () => {
  const router = useRouter()

    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);


  return (
        <>
        <AppLayout>

        <HowBiz />
        </AppLayout>
    </>
  )
}

export default HowitworksBiz