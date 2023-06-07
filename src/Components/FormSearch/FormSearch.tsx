import React from 'react'
import { Input, Button } from '@chakra-ui/react'
import axios from 'axios';

interface Eventos extends React.FormEvent<HTMLFormElement> {
  target: HTMLElement
}
interface FilmeProps {
  title: string,
  poster_path: string,
  vote_average: number,
  overview: string,
  release_date: string
}

interface Data {
  setPagina: Function
  lista: FilmeProps[]
  setLista: Function
  input: string
  setInput: Function
}


const FormSearch: React.FC<Data> = ({ setLista, input, setInput }) => {

  const funy = () => {

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        query: input,
        include_adult: 'false',
        language: 'pt-BR',
        page: '1'
      },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmY5MDc1NTM0Yzc0Y2VlYTdiYjljNzA0ZjQ2OGY2OSIsInN1YiI6IjY0N2UwZjU5MGUyOWEyMmJlMzI3ZmIyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2OthKyiB1TzqDtHO0Kyntq3OLQY8O_GFvyoE3jmXImg'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setLista(response.data.results);
      })
      .catch(function (error) {
        setLista([])
      })

  }



  const handleSubmit = (event: Eventos) => {
    event.preventDefault()
    if (input.length > 1) {
      funy()
    }
  }



  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}


      />
      <Button
        mt={4}
        colorScheme='teal'
        type='submit'
      >
        Submit
      </Button>
    </form>
  )
}

export default FormSearch





//setLista(response.data.results)