import { useEffect, useState } from 'react';
import { Box, Flex, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import "../Styles/Order.css"






const getData=()=>{
  return fetch(`http://localhost:8080/order`)
  .then((res)=>res.json())
}


const Orders = () => {


  const [data, setdata] = useState([])

  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    getData().then((res)=>setdata(res))
    setLoading(false)
  },[])

console.log(data)



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
                <Th>Product</Th>
                <Th>Product No.</Th>
                <Th>UserID</Th>
                <Th width="150px">Oeder Date</Th>
                <Th width="150px">Delevary Date</Th>
                <Th>Location</Th>
                <Th>Oeder Id</Th>
                <Th>price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                data?.map((el) => {
                  
                    return (
                      <Tr key={el._id} >
                        <Th> {el.title} </Th>
                        <Th> {el._id} </Th>
                        <Th> {el._id} </Th>
                        <Th>{el.order_date}</Th>
                        <Th>{el.delevary_date}</Th>
                        <Th>{el.location}</Th>
                        <Th>{el.order_id}</Th>
                        <Th>${el.price}</Th>
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