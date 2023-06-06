import React from 'react'
import axios from 'axios'
import BoxFilme from '../BoxFilme/BoxFilme'
import { Button, Modal, Text, ModalCloseButton, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react"
import BoxModal from '../BoxModal/BoxModal'

interface FilmeProps {
  title: string,
  poster_path: string,
  vote_average: number,
  overview: string,
  release_date: string
}

const Main = () => {
  const [lista, setLista] = React.useState<FilmeProps[]>([])
  const [filme, setFilme] = React.useState<FilmeProps | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const buscaFilmes = async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmY5MDc1NTM0Yzc0Y2VlYTdiYjljNzA0ZjQ2OGY2OSIsInN1YiI6IjY0N2UwZjU5MGUyOWEyMmJlMzI3ZmIyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2OthKyiB1TzqDtHO0Kyntq3OLQY8O_GFvyoE3jmXImg'
        }
      };
      const response = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&primary_release_year=2015&sort_by=popularity.desc', options)
      setLista(response.data.results)
    }

    catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    buscaFilmes()
  }, [])

  if (lista.length === 0) return <p>carregando</p>

  return (
    <>
      {lista.map((filme, index) => (
        <BoxFilme
          key={index}
          index={index}
          lista={lista}
          setFilme={setFilme}
          onClick={onOpen}
          title={filme.title}
          poster_path={filme.poster_path}
        />
      ))}

      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          {filme && <BoxModal filme={filme} />}
        </Modal>
      </>

    </>

  )
}

export default Main


/*
URL IMAGEM =>   
BoxFilme title={title} poster_path={poster_path} />


          {lista.length > 0 && <BoxModal
           filme={filme} 
           
           
           />}



{lista.map(({ title, poster_path, overview, vote_average, vote_count, }, index) => (
        <Box onClick={() => handleCard(index)} maxW={300} p={4} key={title} >
          <img style={{ borderRadius: "10px" }} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
          <Text fontSize='3xl'>{title}</Text>
          <Text fontSize='2x1'>{overview}</Text>
        </Box>
      ))}

*/