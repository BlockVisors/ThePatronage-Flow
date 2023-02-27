import { Center, Heading, Tag } from "@chakra-ui/react"
import * as React from "react"

import { NavbarBase } from "./NavbarBase"

export const Navbar = () => {
  const menuItems = React.useMemo(() => {
    return [
      {
        title: "About",
        href: "/app/about",
      },
      {
        title: "Business",
        href: "/app/aboutbusiness",
      },
       {
        title: "Drops",
        href: "/app/drops",
      },
      {
        title: "My Collection",
        href: "/app/collection",
      },
      {
        title: "My Account",
        href: "/app/account",
      },
      {
        title: "Ramp",
        href: "https://buy.ramp.network?hostApiKey=your_host_apiKey&hostAppName=your_app_name&hostLogoUrl=https://example.com/logo.png",
      }
    
    ]
  }, [])

  return (
    <NavbarBase
      leftComponent={
        <>
          <Heading color="white" >The Patronage Market</Heading>
          <Center pt="1px">
            <Tag size="sm" variant="outline">
              BETA
            </Tag>
          </Center>
        
        </>
      }
      menu={menuItems}
    />
  )
}
