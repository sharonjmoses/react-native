import * as React from 'react';
import {Content,
  Container,
  Header,
  Body,
  Title,
  ListItem,
  Text} from 'native-base';

export function HomeScreen({navigation}){
    return(
      <Container>
                <Header>
                  <Body>
                    <Title>Home Page</Title>
                  </Body>
                </Header>
     
          <Content>
            <ListItem onPress={()=> navigation.navigate('Auth')}>
              <Text>
                Authenticator
              </Text>
            </ListItem>
          </Content>
  
      </Container>
    )
  }
  