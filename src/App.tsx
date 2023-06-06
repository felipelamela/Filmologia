import * as React from "react"
import {
  ChakraProvider,
  GridItem,
  Box,
  Text,
  Flex,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import BoxFilme from "./Components/BoxFilme/BoxFilme"
import BoxModal from "./Components/BoxModal/BoxModal"
import Main from "./Components/Main/Main"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={'100px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h='200px'
      gap='4'
      color='blackAlpha.700'
      fontWeight='bold'
    >

      <GridItem pl='4' bg='orange.300' area={'header'}>
        Header
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'nav'}>
        Nav
      </GridItem>
      <Flex flexWrap={'wrap'} justifyContent={'space-evenly'} pl='2' bg='green.300'>
        <Main />

      </Flex>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid>


  </ChakraProvider>
)
