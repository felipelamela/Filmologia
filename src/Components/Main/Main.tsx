import React from 'react'
import axios from 'axios'
import BoxFilme from './BoxFilme/BoxFilme'
import { Modal, Spinner, useDisclosure } from "@chakra-ui/react"
import BoxModal from './BoxModal/BoxModal'
import { FilmePropsMain, DataMain } from '../../interface'

const Main: React.FC<DataMain> = ({ dataFilmes, pagina, lista, setLista, setInput }) => {
  const [filme, setFilme] = React.useState<FilmePropsMain | null>(null)
  const [anoFilme, setAnoFilme] = React.useState<number>(0)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const buscaFilmes = async () => {
    setInput('')
    setLista([])
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        include_adult: 'false',
        include_video: 'false',
        primary_release_year: dataFilmes,
        language: 'pt-BR',
        page: pagina,
        sort_by: 'popularity.desc'
      },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmY5MDc1NTM0Yzc0Y2VlYTdiYjljNzA0ZjQ2OGY2OSIsInN1YiI6IjY0N2UwZjU5MGUyOWEyMmJlMzI3ZmIyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2OthKyiB1TzqDtHO0Kyntq3OLQY8O_GFvyoE3jmXImg'
      }
    };

    axios
      .request(options)
      .then((response) => {
        setLista(response.data.results);
      })
      .catch((error) => {
        console.log(error)
      }
      )
  }


  React.useEffect(() => {
    let data: number = new Date().getFullYear()
    if (dataFilmes === null) {
      setAnoFilme(data)
    } else {
      setAnoFilme(dataFilmes)
    }
  }, [dataFilmes])



  React.useEffect(() => {
    buscaFilmes()
  }, [anoFilme, pagina])



  if (lista.length === 0) return <Spinner />
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


    </ >

  )
}

export default Main
