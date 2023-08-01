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
import Tours from './components/Tours';
import Hero from './components/Hero';
import Loading from './Loading';

// const url = 'https://course-api.com/react-tours-project';

const url = 'packagesData.json';

  function App(){


    const [isLoading, setIsLoading]= useState(true)
    const [tours, setTours]= useState([])

    const removeTour = (id) => {
      const newTours = tours.filter((tour) => tour.id !== id);
      setTours(newTours);
    };
    
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

     if(tours.length === 0){
      return <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button type='button' style={{marginTop:'2rem'}}
          className='buttonReadMore' onClick={()=> fetchTours()}
          >
            Refresh
          </button>
        </div>
      </main>
     }


    return (

      <div>
      <Navbar/>
      <Hero/>
      <br></br>
      <Tours tours={tours} removeTour={removeTour} />
      {/* <Tours tours={tours}/> */}
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


