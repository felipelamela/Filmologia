import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import styles from './Nav.module.css'

interface Anos {
  ano: number
}
interface Eventos extends React.MouseEvent<HTMLButtonElement> {
  target: HTMLElement
}

interface Data {
  setDataFilmes: Function
}


const Nav: React.FC<Data> = ({ setDataFilmes }) => {
  const anoAtual: number = new Date().getFullYear()
  const anoLimite: number = 1950
  const [listaDeAnos, setListaDeAnos] = React.useState<Anos[]>([])


  React.useEffect(() => {
    const anos: Anos[] = []
    for (let ano = anoAtual; ano >= anoLimite; ano--) {
      anos.push({ ano })
    }
    setListaDeAnos(anos)

  }, [])

  const handleClick = (event: Eventos) => {
    setDataFilmes(event.target.innerText)
    console.log(event.target.innerText)
  }



  if (listaDeAnos.length === 0) return <p>Carregando</p>
  return (
    <Flex
      justifySelf={'center'}
      direction="row"
      overflowX="hidden"
      flexWrap="nowrap"
      gap={2}
      maxW={800}
      w='100vw'
      height="65px"
      sx={{
        '&:hover': {
          overflowX: 'scroll'
        },
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '4px',
          background: '#ffffff',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#bdbdbd',
          width: '4px',
          borderRadius: '24px',
        },
      }
      }>


      {listaDeAnos.map(({ ano }) => (

        <Button
          className={styles.botaoAno}
          onClick={handleClick}
          w='150px'
          width='100px'
          key={ano}
          colorScheme='teal'
          variant='outline'
          padding='1rem 2rem'
        >
          {ano}
        </Button>
      ))}




    </Flex >
  )
}

export default Nav



/*

      {
        listaDeAnos.map((ano) => (
          <Button colorScheme='teal' variant='outline'>

          </Button>
        ))
      }


*/