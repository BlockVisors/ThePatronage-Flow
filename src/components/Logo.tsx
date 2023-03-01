import React from "react"
import { Box, Text, Image, Img } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <>
    <Box {...props}>
       <Img src="images/plogo.png" alt="Patronage Logo" height={50} width={50} />
    </Box>

{/*     
    //   <Text fontSize="lg" fontWeight="bold">
    //     Logo
    //   </Text> */}

    </>
  )
}