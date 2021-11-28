import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItems from '../CarItems/Index';


export default function CarsList(){
    return (
        <View style={styles.container}>
            <FlatList
              data={cars}
              renderItem={({item}) => <CarItems car={item}/>} 
              showsVerticalScrollIndicator={false}
              snapToAlignment={'start'}
              decelerationRate={'fast'}
              snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}