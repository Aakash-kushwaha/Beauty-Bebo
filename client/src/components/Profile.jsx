import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {FaUserAlt} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
    <Menu width={"10px"}>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} >
        {/* {isOpen ? 'Close' : 'Open'} */}
        <FaUserAlt></FaUserAlt>
      </MenuButton>
      <MenuList zIndex={"100"}  marginLeft={"-1rem"} width="-9rem">
        <MenuItem><Link to="/login" >Log in</Link> </MenuItem>
        <MenuItem ><Link to="/signup" >Sign up</Link></MenuItem>
      </MenuList>
    </>
  )}
</Menu>
    </div>
  )
}

export default Profile



