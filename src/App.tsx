import * as React from "react"
import { ChakraProvider, Flex, Grid, theme } from "@chakra-ui/react"
import Main from "./Components/Main/Main"
import Nav from "./Components/Nav/Nav"
import Header from "./Components/Header/Header"


const App = () => {
  const [dataFilmes, setDataFilmes] = React.useState<number | null>(null)
  document.title = 'Filmologia'

  return (
    <ChakraProvider theme={theme}>
      <Grid gap='4'>
        <Header />
        <Nav setDataFilmes={setDataFilmes} />
        <Flex flexWrap={'wrap'} justifyContent={'space-evenly'} >
          <Main dataFilmes={dataFilmes} />
        </Flex>

      </Grid>


    </ChakraProvider>
  )
}


export default App
