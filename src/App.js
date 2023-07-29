import styled from 'styled-components/macro'
import Card from './components/Card';
import {HipsterButton} from './components/Buttons';
import Navbar from './components/Navbar';
import Products from './components/Products';
//import List from './components/List';
import Form from './components/Form'
import Product from './components/Product';
import Info from './components/Info';
import { Container, Box} from '@mui/system';
import { blue } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import Tour from './components/Tour';
import Tours from './components/Tours';

import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project';



  function App(){


    const [isLoading, setIsLoading]= useState(true)
    const [tours, setTours]= useState([])

    
    const fetchTours = async () =>{
      setIsLoading(true);
      try{
        const response = await fetch(url);
        const tours = await response.json();
        setTours(tours);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false)

    };

    useEffect(()=>{
      fetchTours();
     }, []);

     if(isLoading){
      return <main>
        <Loading/>
      </main>
     }
    return (

      <div>
      <Navbar/>
      <br></br>
      <h2>tours starter</h2>
      {/* <Box display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'} backgroundColor={'#B2AC88'}> <Card/> </Box>
      <br></br>
      <Box display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}> <Info/> <Maincard/> </Box>
      <Form /> */}
      {/* <HipsterButton as="a" href='https://www.sonicdrivein.com/'>click me</HipsterButton>
      <HipsterButton large>click me</HipsterButton>
      <HipsterButton>click me</HipsterButton>
      <div css={`color:green`}>
        <h2>hello world</h2>
      </div> */}
    </div>
    )
}


export default App;

