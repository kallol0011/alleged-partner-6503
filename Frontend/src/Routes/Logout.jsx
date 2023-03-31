import {useState} from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';

const Logout = () => {

  const [loading,setLoading]=useState(true)


    return (
        <Flex marginTop="60px" className='mainbox' >
            
      <Box>
        <Sidebar />
      </Box>
      <Box margin="auto"> 
        {loading ? (
          <Loader />
        ) : (
          <>
              
          </>
        )}

       </Box>
    </Flex>
    );
};

export default Logout;