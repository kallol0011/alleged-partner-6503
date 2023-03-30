import { Button, Text, useDisclosure ,Icon} from "@chakra-ui/react"
import { useState } from "react"
import Darayer from "./Darayer"
import {ImMenu} from "react-icons/im"
export default function Dra() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')
  
    return (
      <>
       <Text onClick={isOpen?onClose:onOpen}>
       <Icon as={ImMenu}/>
         All
         
        </Text>
       <Darayer isOpen={isOpen} onOpen={onOpen} onClose={onClose} placement={placement} setPlacement={setPlacement}/>
      </>
    )
  }