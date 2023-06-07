import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import styles from './Nav.module.css'
import { AnosNav, DataNav, EventosNav } from '../../interface'


const Nav: React.FC<DataNav> = ({ setDataFilmes, setPagina, setInput }) => {
  const anoAtual: number = new Date().getFullYear()
  const anoLimite: number = 1950
  const [listaDeAnos, setListaDeAnos] = React.useState<AnosNav[]>([])


  React.useEffect(() => {
    const anos: AnosNav[] = []
    for (let ano = anoAtual; ano >= anoLimite; ano--) {
      anos.push({ ano })
    }
    setListaDeAnos(anos)

  }, [])



  const handleClick = (event: EventosNav) => {
    setInput('')
    setPagina(1)
    setDataFilmes(event.target.innerText)
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
      height="60px"
      m={0}
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


