import { Button, Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./Signup.module.css"

const Signup = () => {
  const navigate= useNavigate()
  const createAccount=()=>{
   
    alert("Account has been created Succussfully!");
    navigate("/login")
           
  }
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
         <Link to={"/login"}> <Button color={"white"}  bg={"#444444"}  _hover={{ bg: '#dd0285' }}
          onClick={()=>createAccount()}>Create Account</Button></Link>
      </div>
    </div>
  )
}

export default Signup