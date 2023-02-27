import { useRouter } from 'next/router';
import React from 'react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react"



import FAQComp from '../../../components/copy/FAQComp';
import AppLayout from "../../../components/AppLayout";
import HowPatron from '../../../components/copy/HowPatron';


export const HowitworksPatron = () => {
  const router = useRouter()

    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);


  return (
        <>
        <AppLayout>

        <HowPatron />
        </AppLayout>
    </>
  )
}

export default HowitworksPatron