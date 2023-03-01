import { Box, Button, Heading, Stack, Text, Flex, Image } from '@chakra-ui/react';
import React from 'react';

interface IHeroWithBackgroundProps {
  heading?: React.ReactNode
  content?: React.ReactNode
  button?: React.ReactNode
  button2?: React.ReactNode
  imageUrl?: string
  imageUrl2?: string

}

export const Hero = ({ heading, button, content, imageUrl, button2, imageUrl2 }: IHeroWithBackgroundProps) => {
  const headingComponent = React.useMemo(() => {
    return typeof heading === "string" ? (
      <Heading
        as="h1"
        size="3xl"
        lineHeight="1"
        fontWeight="light"
        letterSpacing="tight"
        color="header.text"
      >
        {heading}
      </Heading>
    ) : (
      heading
    )
  }, [heading])

  const contentComponent = React.useMemo(() => {
    return typeof content === "string" ? (
      <Text mt={4} fontWeight="medium" color={"header.text"}>
        {content}
      </Text>
    ) : (
      content
    )
  }, [content])

  const buttonComponent = React.useMemo(() => {
    return typeof button === "string" ? (
      <Button minWidth="200" height="14" px="8" fontSize="md">
        {button}
      </Button>
    ) : (
      button
    )
  }, [button])
  const buttonComponent2 = React.useMemo(() => {
    return typeof button2 === "string" ? (
      <Button minWidth="200" height="14" px="8" fontSize="md" color="green">
        {button}
      </Button>
    ) : (
      button2
    )
  }, [button2])

  return (
    <Box width="100vw" minH={{ base: "90vh", sm: "100vh" }} position="relative" bgImage={imageUrl}>
      <Box
        zIndex={100}
        position="absolute"
        bottom="5%"
        maxW={{ base: "100%", lg: "50%" }}
        mx="auto"
        px={{ base: "10", lg: "20" }}
      >
        <Box
          maxW={{ lg: "md", xl: "xl" }}
          pt={{ base: "0", sm: "4", md: "8", lg: "16" }}
          pb={{ base: "4", sm: "8" }}
        >
          {headingComponent}
          {contentComponent}
          <Stack direction={{ base: "column", sm: "row" }} spacing="4" mt="8">
            {buttonComponent}
            {buttonComponent2}
          </Stack>  
        </Box>
        <Box maxW={{ lg: "md", xl: "xl" }} mx="auto" mt="8">
         <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={ imageUrl2 }
            objectFit={'cover'}
          />
        </Flex>
        </Box>
        
      </Box>
      <Box
        zIndex={1}
        background="rgba(0,0,0,0.5)"
        top="0"
        left="0"
        width="100%"
        height="100%"
      ></Box>
    </Box>
  )
}
