import * as React from "react"
import { ChakraProvider, Button, Flex, Grid, theme } from "@chakra-ui/react"
import Main from "./Components/Main/Main"
import Nav from "./Components/Nav/Nav"
import Header from "./Components/Header/Header"
import FormSearch from "./Components/FormSearch/FormSearch"

interface FilmeProps {
  title: string,
  poster_path: string,
  vote_average: number,
  overview: string,
  release_date: string
}

interface Eventos extends React.MouseEvent<HTMLButtonElement> {
  target: HTMLElement
}

const App = () => {
  const [dataFilmes, setDataFilmes] = React.useState<number | null>(null)
  const [pagina, setPagina] = React.useState<number>(1)
  const [lista, setLista] = React.useState<FilmeProps[]>([])
  const [input, setInput] = React.useState<string>('')


  document.title = 'Filmologia'


  const handleClick = (event: Eventos) => {
    const valor: string = event.target.innerText
    if (valor === 'Proximo') {
      setPagina(pagina + 1)
    } else {
      if (pagina > 1) {
        setPagina(pagina - 1)
      }
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Grid gap='4'>

        <Header />

        <Nav setInput={setInput} setDataFilmes={setDataFilmes} setPagina={setPagina} />

        <FormSearch input={input} setInput={setInput} lista={lista} setLista={setLista} setPagina={setPagina} />

        <Flex flexWrap={'wrap'} justifyContent={'space-evenly'} >
          <Main setInput={setInput} lista={lista} setLista={setLista} dataFilmes={dataFilmes} pagina={pagina} setPagina={setPagina} />
        </Flex>

        {input.length === 0 &&<Flex justifyContent={'center'}>
           {pagina > 1 && <Button m={4} onClick={handleClick} colorScheme='teal'>Anterior</Button>}
          <Button m={4} colorScheme='teal' onClick={handleClick}>Proximo</Button>
        </Flex>}
      </Grid>


    </ChakraProvider>
  )
}


export default App
