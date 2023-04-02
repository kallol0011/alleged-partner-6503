import { useEffect, useState } from 'react';
import { Box, Button, Flex, Image, Table, Tbody, Th, Thead, Tr, useToast } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import "../Styles/Order.css"
import { MdDeleteForever } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';






const getData=()=>{
  return fetch(`https://strange-crown-worm.cyclic.app/admin/getorder`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":localStorage.getItem("token")
    }
  })
  
  .then((res)=>res.json())

}



const Orders = () => {


  const [data, setdata] = useState([])

  const [loading,setLoading]=useState(true)


  const toast = useToast()

  useEffect(()=>{
    getData().then((res)=>{
      setdata(res)
    setLoading(false)
    })
  },[data])

// console.log(data)


const OrderDone=()=>{
  toast({
    title: 'Oeder Done.',
    description: " Order Conformation is Done ",
    status: 'success',
    duration: 9000,
    position:"top",
    isClosable: true,
  })

}


const deleteProduct=(id)=>{
  // 
  console.log(id)
  fetch(`https://strange-crown-worm.cyclic.app/admin/deleteorder/${id}`,{
    method:"DELETE",
    headers:{
      "Content-Type":"application/json",
      "Authorization":localStorage.getItem("token")
    }

  })
  .then((res)=>res.json())
  .then((res)=>{console.log(res)
    toast({
      title: 'Delete.',
      description: "Order is deleted successfully",
      status: 'success',
      duration: 9000,
      position:"top",
      isClosable: true,
    })
  })

}


    return (
      <Flex marginTop="60px" className='mainbox' >
            
      <Box>
        <Sidebar />
      </Box>
      
        
        <Box matgin="auto" >
            {
                loading ? (<Box marginLeft="342%" marginTop="230px">
                <Loader />
              </Box>) : (
         <>
          <Box margin="auto" width={{base:"80vw",lg:"80vw",sm:"95vw"}} marginTop="18px">
          <Table variant="simple" width="100%">
            <Thead>
              <Tr>
                <Th>image</Th>
                <Th width="42vw" >title</Th>
                <Th>category</Th>
                <Th>User ID</Th>
                <Th>price</Th>
                <Th width="25vw">Oeder Date</Th>
                <Th width="150px">Order time</Th>
                <Th>discount</Th>
                <Th  >rating</Th>
                <Th  w={"1vw"} ></Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                data?.map((el) => {
                  
                    return (
                      <Tr key={el._id} >
                        <Th> <Image src={el.image} alt={el.title} /> </Th>
                        <Th> {el.title} </Th>
                        <Th> {el.category} </Th>
                        <Th> {el._id} </Th>
                        <Th>${el.price}</Th>
                        <Th>{el.date}</Th>
                        <Th>{el.time}</Th>
                        <Th>{el.discount}</Th>
                        <Th  >{el.rating}⭐ </Th>
                        <Th  >
                          <Flex gap={"4%"} >
                          <Button onClick={OrderDone} >
                          <AiFillCheckCircle color="green"  />  
                          </Button>
                          
                          <Button onClick={()=>deleteProduct(el._id)} >
                          <MdDeleteForever color="green"  />      
                          </Button>
                          </Flex>
                        </Th>
                      </Tr>
                    );
                  
                })}
            </Tbody>
          </Table>
        </Box>
   </>
                )
            }
        </Box>

    </Flex>
    );
};

export default Orders;