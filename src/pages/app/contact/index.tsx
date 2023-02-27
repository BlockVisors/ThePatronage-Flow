import { useRouter } from 'next/router';
import React from 'react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react"



import ContactFormWithSocialButtons from '../../../components/copy/ContactSocial';
import AppLayout from "../../../components/AppLayout";


export const Contact = () => {
  const router = useRouter()

    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);


  return (
        <>
        <AppLayout>

        <ContactFormWithSocialButtons />
        </AppLayout>
    </>
  )
}

export default Contact