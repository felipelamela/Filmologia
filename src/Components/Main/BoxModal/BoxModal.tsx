import React from 'react'
import { Text, ModalCloseButton, ModalOverlay, ModalContent, ModalHeader, ModalBody } from "@chakra-ui/react"
import styles from "./BoxModal.module.css"


interface Filme {
  title: string
  poster_path: string,
  vote_average: number,
  overview: string,
  release_date: string
}

interface BoxModalProps {
  filme: Filme,
}

const BoxModal: React.FC<BoxModalProps> = ({ filme }) => {

  console.log(filme)

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{filme.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <img className={styles.imgCard} src={`https://image.tmdb.org/t/p/w400/${filme.poster_path}`} alt="" />
          <Text className={styles.votoCard}>{filme.vote_average}</Text>
          <Text className={`${styles.votoCard} ${styles.dataCard}`}>{filme.release_date.split('-').reverse().join('/')}</Text>
          <Text p={2}>{filme.overview}</Text>
        </ModalBody>
      </ModalContent>
    </>
  )
}

export default BoxModal