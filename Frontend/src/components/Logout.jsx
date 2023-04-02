import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"


function Logout() {
    const navigate=useNavigate()
    
    let handleLogout=()=>{
      localStorage.removeItem("token")
     
        
    }
  return (
    <div>
      <Menu >
        <MenuButton colorScheme='teal' variant='solid' as={Button} >
          Logout
        </MenuButton>
        <MenuList bg={"black"}>
          <MenuItem color={"black"}>Download</MenuItem>
          <MenuItem color={"black"}>Create a Copy</MenuItem>
          <MenuItem color={"black"}>Mark as Draft</MenuItem>
          <MenuItem color={"black"}>Delete</MenuItem>
          <MenuItem onClick={handleLogout} color={"black"}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
export default Logout
