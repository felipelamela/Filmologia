import React from 'react'
import { Button, Modal, Text, ModalCloseButton, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react"

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

  console.log(filme.overview)

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{filme.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <img src={`https://image.tmdb.org/t/p/w400/${filme.poster_path}`} alt="" />
          <Text>{filme.overview}</Text>
        </ModalBody>
      </ModalContent>
    </>
  )
}

export default BoxModal