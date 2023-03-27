


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Flex,
  FormErrorMessage,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link as ReachLink,
  Stack,

  Text,

  Center
} from '@chakra-ui/react';

import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate('/home');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // this useColorModeValue used for providing variable range of color


  return (
    <>
  
      <Flex justify="center" align="center" minH="80vh">
        <Box
          boxShadow="2xl"
          p="6"
          borderRadius="md"
       
          border="xl"
          maxW={{ base: '90%', md: '80%', lg: '50%' }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} p={30}>
              <FormControl isInvalid={errors.email}>
                <Heading mb="5" fontSize={{ base: 'xl', md: '3xl' }} >
                 <Center>Sign In</Center> 
                </Heading>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="abc@gmail.com"
                  {...register('email', {
                    required: 'email is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Invalid email address',
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Password"
                //   mb="5"
                  borderRadius="2"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 6, message: 'Minimum length should be 6' },
                
                  })}
                /> 
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                colorScheme="teal"
                variant="solid"
                borderRadius="5"
                bg="tomato"
                mt="-5"
                w="full"
                isLoading={isSubmitting}
                type="submit"
              >
                Login
              </Button>

              <Text>
                Create an account{' '}
                <Link   color="red" size="50" to="/signUp">
                  SignUp
                </Link>
              </Text>
            </Stack>
          </form>
        </Box>
      </Flex>
    
    </>
  );
}

