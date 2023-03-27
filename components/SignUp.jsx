import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Box,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Center,
  FormErrorMessage,
  Heading,
  Text,
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'

export default function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

 
  const navigate = useNavigate()

  const onSubmit = (values) => {
    const { userName, email, password } = values

    // checking all fields are filled or not
    if (!userName||!email ||!password) {
      return
    }

    // implementation of firebase authentication for signUp
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        const user = res.user
        await updateProfile(user, {
          displayName: userName,
        })
        navigate('/home')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
   
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      h='80vh'
     
    >
      <Box
        border='xl'
        boxShadow='2xl'
        p='6'
        borderRadius='md'
        maxW={{ base: '90%', md: '80%', lg: '50%' }}
      >
        <Stack
          spacing={3}
          p={{ base: 4, md: 10 }}
          as='form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl isInvalid={errors.userName}>
            <Heading fontSize={{ base: 'xl', md: '3xl' }} mb='5'>
                <Center> Sign Up</Center>
             
            </Heading>
            <FormLabel>User Name</FormLabel>
            <Input
              type='text'
              placeholder='UserName'
              {...register('userName', { required: 'userName is required' })}
            />
            <FormErrorMessage>
              {errors.userName && errors.userName.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type='email'
              placeholder='abc@gmail.com'
             {...register('email', {
                    required: 'email is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Invalid email address',
                    }})}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              placeholder='Password'
              // mb={{ base: 4, md: 10 }}
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Minimum length should be 6' },
                maxLength: { value: 15, message: 'Password Should not exceed more than 15 character' },
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Stack direction={{ base: 'column', md: 'row' }} justify='space-between' align='center'>
            <Button colorScheme='teal' variant='solid' borderRadius='5' bg='tomato' w='full' isLoading={isSubmitting} type='submit'>  
              Sign Up
            </Button>
          </Stack>
          <Text>
            Already Registered ?<Link to='/'>SignIn</Link> <br />  
          </Text>
        </Stack> 
      </Box>
      </Box>
    
  )}

