import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation
} from './styles';

export default function Main() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Container>
        <Header />

        <Content>
          <Card>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666"/>
              <Icon name="visibility-off" size={28} color="#666"/>
            </CardHeader>
            <CardContent>
              <Title>Balance Avaliable</Title>
              <Description>€ 7,123.22</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transf of € 100.00 recived from Cristian Fernands.
              </Annotation>
            </CardFooter>
          </Card>
        </Content>

        <Tabs />
      </Container>
    </>
  );
}
