import React from 'react'
import { Text, ModalCloseButton, ModalOverlay, ModalContent, ModalHeader, ModalBody } from "@chakra-ui/react"
import styles from "./BoxModal.module.css"
import { DataBoxModal } from '../../../interface'



const BoxModal: React.FC<DataBoxModal> = ({ filme }) => {

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