import React from 'react'
import { Input, Button } from '@chakra-ui/react'
import axios from 'axios';
import styles from './FormSearch.module.css'
import { DataSearch, FormEventoSearch } from '../../interface';


const FormSearch: React.FC<DataSearch> = ({ setLista, input, setInput }) => {

  const query = () => {

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

  const handleSubmit = (event: FormEventoSearch) => {
    event.preventDefault()
    if (input.length > 1) query()

  }

  return (
    <form className={styles.formSearch} onSubmit={handleSubmit}>
      <Input
        type='text'
        borderRightRadius={0}
        value={input}
        onChange={(event) => setInput(event.target.value)}
        m={0}
        placeholder='Homem Aranha'
      />
      <Button
        mt={4}
        colorScheme='teal'
        type='submit'
        display='block'
        marginTop={0}
        borderLeftRadius={0}
        paddingLeft={2}
        paddingRight={7}
        m={0}
      >
        Buscar
      </Button>
    </form>
  )
}

export default FormSearch
