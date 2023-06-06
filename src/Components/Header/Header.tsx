import { Text } from '@chakra-ui/react'
import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <h1 className={styles.titleHeader} >Filmologia</h1 >
    </header>
  )
}

export default Header