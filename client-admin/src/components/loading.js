import React from 'react'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingScreen() {
  return (
    <Container className='loadingContainer'>
        <Spinner animation="border" className='iconSpinner' role='status'/>
    </Container>
  )
}