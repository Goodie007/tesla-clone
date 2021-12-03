import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StyleButton from '../StyledButton';
import styles from './styles';

export default function CarItem() {
  return (
      <View style={styles.carContainer}>
        <ImageBackground source={require('../../assets/images/ModelX.jpeg')}
           style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at 150,000</Text>
        </View>

        <View style={styles.buttonContainer}>
          <StyleButton
            type="primary"
            content={"Custom Order"}
            onPress={() => {
              console.warn("Custom Order was pressed");
            }}
          />

          <StyleButton
            type="secondary"
            content={"Existing Inventory"}
            onPress={() => {
              console.warn("Existing Inventory was pressed");
            }}
          />
        </View>


      </View>

  );
}
