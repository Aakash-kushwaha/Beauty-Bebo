import React from 'react'
import styles from "./login.module.css"
import {Button, Flex, Input} from "@chakra-ui/react"

const Login = () => {
  return (
    <div>
       <Flex justifyContent={"space-around"} mt="10rem">
        <div className={styles.container}>
          <h1 className = {styles.heading}>REGISTER CUSTOMER</h1>
          <p className={styles.suggestion}>If you have an account sign in with your gmail address</p>
          <div className={styles.utilites}>
            <span>EMAIL</span>
            <Input></Input>
          </div>
          <div className={styles.utilites}>
            <span>PASSWORD</span>
            <Input></Input>
          </div>
          <Button bg={"#444444"}  _hover={{ bg: '#dd0285' }}>SIGN IN</Button>
        </div>
        <div className={styles.container}>
        <h1 className = {styles.heading}>REGISTER CUSTOMER</h1>
        <p className={styles.suggestion}>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
        <Button  bg={"#444444"}  _hover={{ bg: '#dd0285' }}>CREATE ACCOUNT</Button>
        </div>
       </Flex>
    </div>
  )
}

export default Login