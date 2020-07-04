import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
      <QRCode 
          value="https://www.linkedin.com/in/marcos-v-lucas/"
          size={80}
          color="#8b10ae"
          backgroundColor="#FFF"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Help</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Profile</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Card Sttings</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>App Sttings</NavText>
        </NavItem>
        <NavItem />
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Leave App</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}