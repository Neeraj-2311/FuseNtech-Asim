'use client';
import React, {useState}from 'react'
import { Box, Button, Typography , createMuiTheme, ThemeProvider, Link, Select, MenuItem, InputLabel, FormControl, OutlinedInput, FormLabel} from '@mui/material'
import { Instagram, Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import { motion } from "framer-motion";




const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#673DE6',
    }
  }
})


const fadeIn = {
  initial: {
    opacity: 0,
    y:100,
  },
  animate: {
    opacity: 1,
    y:0,
    transition: {
      duration: 0.4,
    },
  },
};

const page = () => {

  const [otherClicked,setOtherClicked] = useState(false);

  const optionHandle = () => {
    setOtherClicked(true);
  }

  const submitAction = (e) => {
    e.preventDefault();
  }

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true
        }}      
      >
        
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} width={"100%"} minHeight={'100dvh'}>

        <Box width="100%" textAlign="center" mt={2} mb={3}>
          <Typography variant="h2" component="h1" sx={{ fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`, fontWeight: 'normal', letterSpacing: 
            '-4px' }}>
              How Can We Assist You?
          </Typography>
        </Box>

        <Box component={"form"} height={{xs:'850px', md:"600px"}} width={'min(1000px, 100vw)'} display={'flex'} flexDirection={{xs:'column', md:'row'}} flexWrap={'nowrap'} p={2} bgcolor="white" borderRadius="1rem" boxShadow='0px 4px 10px gray' gap={2}>

              <Box width={{xs:'100%', md:'45%'}} minHeight={240} borderRadius={2} display={'flex'} alignItems={'flex-end'} justifyContent={'flex-start'} p={2}
                sx={{
                  backgroundImage: `url('/Navy & White Modern Personal LinkedIn Banner.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
                <Box display={'flex'} flexWrap={'nowrap'} gap={{xs:2, lg:3}}>
                  <SocialLink
                    href={'#'}
                    Icon={<Instagram color='inherit'/>}
                  />
                  <SocialLink
                    href={'#'}
                    Icon={<Facebook color='inherit'/>}
                  />
                  <SocialLink
                    href={'#'}
                    Icon={<LinkedIn color='inherit'/>}
                  />
                  <SocialLink
                    href={'#'}
                    Icon={<Twitter color='inherit'/>}
                  />
                </Box>
              </Box>

              <Box width={{xs:'100%', md:'55%'}}>

              <FormControl style={{backgroundColor:"#F9F6EE"}} fullWidth sx={{ mt:1, mb: 3 }}>

                <InputLabel>Query type</InputLabel>

                <Select label="Query type">
                  <MenuItem value={10} style={{backgroundColor:"#F9F6EE"}}>Feedback</MenuItem>
                  <MenuItem value={20} style={{backgroundColor:"#F9F6EE"}}>Contact us</MenuItem>
                  <MenuItem value={20} style={{backgroundColor:"#F9F6EE"}} onClick={optionHandle}>Other</MenuItem>
                </Select>
              </FormControl>
                {otherClicked === true && (
                  <FormControl style={{backgroundColor:"#F9F6EE"}} fullWidth sx={{ mt:1, mb: 3 }}>
                    <InputLabel>Subject</InputLabel>
                    <Select label="Query type">
                      <MenuItem value={10} style={{ backgroundColor: "#F9F6EE" }}>Inconvenience</MenuItem>
                      <MenuItem value={20} style={{ backgroundColor: "#F9F6EE" }}>Product or Service Inquiries</MenuItem>
                      <MenuItem value={30} style={{ backgroundColor: "#F9F6EE" }}>Technical Support</MenuItem>
                      <MenuItem value={30} style={{ backgroundColor: "#F9F6EE" }}>Billing, Payments, and Orders</MenuItem>
                      <MenuItem value={30} style={{ backgroundColor: "#F9F6EE" }}>Account and Policy Management</MenuItem>
                    </Select>
                  </FormControl>
                )}

              

              <FormControl fullWidth sx={{ mb: 3 }}>

                <FormLabel>Name</FormLabel>

                <OutlinedInput size='small'
                  style={{backgroundColor: "#F9F6EE" }}
                  placeholder='Full name in here'
                  />

              </FormControl>

              <FormControl fullWidth sx={{ mb: 3 }}>

                <FormLabel>Email Address</FormLabel>

                <OutlinedInput size='small'
                  style={{backgroundColor: "#F9F6EE" }}
                  placeholder='Your email address in here'
                  /> 

              </FormControl>

              <FormControl fullWidth sx={{ mb: otherClicked? 2 : 3 }}>

                <FormLabel>Messages</FormLabel>

                <OutlinedInput size='small'
                  style={{backgroundColor: "#F9F6EE" }}
                  multiline
                  rows={5}
                  placeholder='Your email address in here'
                  /> 

              </FormControl>
              
              <Box item xs={12} 
              style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
              }}>
                <Button 
                  type='submit' 
                  variant='contained' 
                  color= 'primary' 
                  style={{ 
                    borderRadius: '2rem', 
                    paddingTop: '10px', 
                    paddingBottom: '10px', 
                    paddingRight: '40px', 
                    paddingLeft: '40px',
                  }}
                  onClick={submitAction}
                >
                  Submit
                </Button>
              </Box>
            </Box>
        </Box>
        </Box>
      </motion.div>
    </ThemeProvider>
  )
}

export default page;

const SocialLink = ({href, Icon}) => {
  return(
    <Link href={href} sx={{
      color:'white',
      transition:'ease-in-out .2s',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'40px',
      height:'40px',
      borderRadius:'50px',
      position:'relative',
      '&::before':{
        content:'""',
        position:'absolute',
        width:'0',
        height: '0',
        left:'50%',
        top:'50%',
        transform:'translate(-50%, -50%)',
        bgcolor:'white',
        transition: 'ease-in-out .2s',
        borderRadius:'inherit',
      },
      '&:hover::before':{
        width:'100%',
        height:'100%'
      },
      '&:hover':{
        color:'black'
      },
      '& svg':{
        position:'relative'
      }
    }}>
      {Icon}
    </Link>
  )
}