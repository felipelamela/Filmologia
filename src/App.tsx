import * as React from "react"
import { ChakraProvider, Button, Flex, Grid, theme } from "@chakra-ui/react"
import Main from "./Components/Main/Main"
import Nav from "./Components/Nav/Nav"
import Header from "./Components/Header/Header"
import FormSearch from "./Components/FormSearch/FormSearch"
import { FilmeApp, EventosApp } from "./interface"


const App = () => {
  const [dataFilmes, setDataFilmes] = React.useState<number | null>(null)
  const [pagina, setPagina] = React.useState<number>(1)
  const [lista, setLista] = React.useState<FilmeApp[]>([])
  const [input, setInput] = React.useState<string>('')
  document.title = 'Filmologia'


  const handleClick = (event: EventosApp) => {
    const valor: string = event.target.innerText
    if (valor === 'Proximo') {
      return setPagina(pagina + 1)
    } else {
      if (pagina > 1) {
        return setPagina(pagina - 1)
      }
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Grid gap='1'>

        <Header />

        <Nav setInput={setInput} setDataFilmes={setDataFilmes} setPagina={setPagina} />

        <FormSearch input={input} setInput={setInput} setLista={setLista} />

        <Flex flexWrap={'wrap'} justifyContent={'space-evenly'} >
          <Main setInput={setInput} lista={lista} setLista={setLista} dataFilmes={dataFilmes} pagina={pagina} setPagina={setPagina} />
        </Flex>

        {input.length === 0 && <Flex justifyContent={'center'}>
          {pagina > 1 && <Button m={4} onClick={handleClick} colorScheme='teal'>Anterior</Button>}
          <Button m={4} colorScheme='teal' onClick={handleClick}>Proximo</Button>
        </Flex>}
      </Grid>


    </ChakraProvider>
  )
}


export default App
