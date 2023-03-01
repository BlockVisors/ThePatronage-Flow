import { Box } from "@chakra-ui/react"
import React from "react"
import { useQuery } from "urql"

import { NftModelsDocument, NftModelsQuery } from "../../../../generated/graphql"
import AppLayout from "../../../components/AppLayout"
import { NFTModelsGrid } from "../../../components/drops/NFTModelsGrid"
import { SectionHeader } from "../../../ui/SectionHeader"

export const Rentals = () => {
  const [result] = useQuery<NftModelsQuery>({
    query: NftModelsDocument,
    variables: { appId: process.env.NEXT_PUBLIC_CLIENT_ID },
  })

  const nftModels = result?.data?.nftModels?.items

  return (
    <>
    <AppLayout>
      <Box maxW="7xl" mx="auto">
        <SectionHeader text="Get A Drop" />
        {nftModels && <NFTModelsGrid nftModels={nftModels} />}
      </Box>
    </AppLayout>
    </>
  )
}

export default Rentals


// import { Box } from "@chakra-ui/react"
// import React from "react"
// import { useQuery } from "urql"

// import { NftModelsDocument, NftModelsQuery } from "../../../../generated/graphql"
// import AppLayout from "../../../components/AppLayout"
// import { NFTModelsGrid } from "../../../components/drops/NFTModelsGrid"
// import { SectionHeader } from "../../../ui/SectionHeader"
// import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';


// export const RampPage = () => {
//   const [result] = useQuery<NftModelsQuery>({
//     query: NftModelsDocument,
//     variables: { appId: process.env.NEXT_PUBLIC_CLIENT_ID },
//   })

//   const nftModels = result?.data?.nftModels?.items

//   new RampInstantSDK({
//   hostAppName: 'Your App',
//   hostLogoUrl: 'https://rampnetwork.github.io/assets/misc/test-logo.png',
//   hostApiKey: 'your_host_api_key',
// }).show();

//   return (
//     <AppLayout>
//       <Box maxW="7xl" mx="auto">
//         <SectionHeader text="Get Crypto or Fiat" />
//         {nftModels && <NFTModelsGrid nftModels={nftModels} />}
//       </Box>
//     </AppLayout>
//   )
// }

// export default RampPage
