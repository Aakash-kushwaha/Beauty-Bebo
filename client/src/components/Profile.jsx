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

const Profile = () => {
  return (
    <div>
    <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} >
        {/* {isOpen ? 'Close' : 'Open'} */}
        <FaUserAlt></FaUserAlt>
      </MenuButton>
      <MenuList zIndex={"100"}>
        <MenuItem>Download</MenuItem>
        <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
    </div>
  )
}

export default Profile



