import * as React from 'react';
import {Content,
  Container,
  Header,
  Body,
  Title,
  Input,
  Label,
  Item,
  Text,
  Form,
Left,
Icon,
Button,
Right} from 'native-base';

import { Auth } from '../Setup';
import { SignUpUser, SignInUser, SignOutUser } from '../apiService';

export function AuthScreen({navigation}){
    const [state, setState] = React.useState({
        emailAddress : '',
        password : ''
    })

    const [user, setUser] = React.useState();

    const signOut  = () => {
        SignOutUser().then((data)=>{
            // console.log(data)
            alert(data)
        }).catch((error)=>{
            alert(error)
        });
    }
    const signUp = () =>{
        SignUpUser(state.emailAddress, state.password).then((data)=>{
            // console.log(data)
            alert(data)
        }).catch((error)=>{
            alert(error)
        });
        // alert(JSON.stringify(state));
    }
    const signIn = () => {

        SignInUser(state.emailAddress, state.password).then((data)=>{
            // console.log(data)
            alert(data)
        }).catch((error)=>{
            alert(error)
        });

    }

    const onAuthStateChanged=user=>{
        setUser(user);
    }
    React.useEffect(()=>{
        const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [])
    return(
      <Container>
                <Header>
                    <Left>
                        <Button transparent icon onPress={()=> navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                  <Body>
                    <Title>Authentication</Title>
                  </Body>

                  <Right>
                  {
                      user && (
                        <Button transparent icon onPress={signOut}>
                             <Icon name="log-out" />
                             </Button>
                      )
                  }
                   </Right>
                 
                        
                           
                       
                   
                </Header>
     
          <Content padder>
            <Form>
                <Item floatingLabel>
                    <Label>Email Address</Label>
                    <Input keyboardType="email-address" value={state.emailAddress}
                    onChangeText = {(text => setState({...state, emailAddress: text}))}/>
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input SecureTextEntry value={state.password}
                     onChangeText = {(text => setState({...state, password: text}))}/>
                </Item>
                <Button block onPress={signUp}>
                    <Text>Sign Up</Text>
                </Button>
            </Form>


            <Form>
                <Item floatingLabel>
                    <Label>Email Address</Label>
                    <Input keyboardType="email-address" value={state.emailAddress}
                    onChangeText = {(text => setState({...state, emailAddress: text}))}/>
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input SecureTextEntry value={state.password}
                     onChangeText = {(text => setState({...state, password: text}))}/>
                </Item>
                <Button block onPress={signIn}>
                    <Text>Sign In</Text>
                </Button>
            </Form>
          </Content>
  
      </Container>
    )
  }
  