import React from 'react';
import {Auth} from './Setup';

export const SignUpUser = (email, password) => {
    return new Promise(function(resolve, reject){
       Auth().createUserWithEmailAndPassword(email, password).then(()=>{
           resolve('Signup Succesfully')
       }).catch((error)=>{
           reject(error)
       })
    })
}


export const SignInUser = (email, password) => {
    return new Promise(function(resolve, reject){
       Auth().signInWithEmailAndPassword(email, password).then(()=>{
           resolve('SignIn Succesfully')
       }).catch((error)=>{
           reject(error)
       })
    })
}

export const SignOutUser = () => {
    return new Promise(function(resolve, reject){
       Auth().signOut().then(()=>{
           resolve('Signed Out Succesfully')
       }).catch((error)=>{
           reject(error)
       })
    })
}