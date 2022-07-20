import { Button, Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Signup.module.css"

const Signup = () => {
  return (
    <div  className={styles.main}>Signup
      <div className={styles.container} >
     <h1 className={styles.heading}>PERSONAL INFORMATION</h1>
           <Flex mb={"2rem"} gap="1rem">
          <div>
            <span>First Name</span>
            <Input></Input>
          </div>
          <div>
          <span>Last Name</span>
            <Input></Input>
          </div>
           </Flex>
           <div className={styles.inputdiv}>
            <span>Email</span>
            <Input></Input>
          </div>
          <div className={styles.inputdiv}>
          <span>Phone</span>
            <Input></Input>
          </div>
          <div className={styles.inputdiv}>
            <span>Password</span>
            <Input></Input>
          </div>
          <div className={styles.inputdiv}>
          <span>Confirm Password</span>
            <Input></Input>
          </div>
         <Link to={"/login"}> <Button color={"white"}  bg={"#444444"}  _hover={{ bg: '#dd0285' }}>Create Account</Button></Link>
      </div>
    </div>
  )
}

export default Signup