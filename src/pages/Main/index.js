import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

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

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event) {

  }

  return (
    <Container>
      <Header />


      <Content>
        <Menu translateY={translateY}/>

        <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}
          >
          <Card style={{
                transform: [{
                    translateY: translateY.interpolate({
                      inputRange: [-350, 0, 380],
                      outputRange: [-50, 0, 380],
                      extrapolate: 'clamp',
                    })
                  }]
              }}>
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
        </PanGestureHandler>

        </Content>


      <Tabs />
    </Container>
  );
}
