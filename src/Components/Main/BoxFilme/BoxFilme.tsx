import React from 'react';
import { Box } from '@chakra-ui/react'
import styles from './BoxFilme.module.css'


interface BoxFilmeProps {
  poster_path: string
  title: string
  lista: Array<Object>
  onClick: Function
  setFilme: Function
  index: number
}

const BoxFilme: React.FC<BoxFilmeProps> = ({ poster_path, title, onClick, setFilme, index, lista }) => {
  const handleClick = () => {
    setFilme(lista[index])
    onClick()
  }

  return (
    <>
      <Box maxW={300} p={4}>
        <img onClick={handleClick} className={styles.boxFilmeImagem} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      </Box>
    </>
  )
}

export default BoxFilme