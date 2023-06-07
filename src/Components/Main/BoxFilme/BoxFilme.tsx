import React from 'react';
import { Box } from '@chakra-ui/react'
import styles from './BoxFilme.module.css'
import { DataBoxFilme } from '../../../interface';

const BoxFilme: React.FC<DataBoxFilme> = ({ poster_path, title, onClick, setFilme, index, lista }) => {
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