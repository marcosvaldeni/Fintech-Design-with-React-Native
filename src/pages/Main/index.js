import React from 'react';
import { StatusBar } from 'react-native';

import Header from '~/components/Header';

import { Container } from './styles';

export default function Main() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Container>
        <Header />
      </Container>
    </>
  );
}
