import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StyleButton from '../StyledButton';
import styles from './styles';




export default function CarItems(props) {

  const { name, tagline, taglineCTA, image } = props.car;


  return (
      <View style={styles.carContainer}>
        <ImageBackground source={image}
           style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}&nbsp;
            <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
          </Text>
        </View>


       <View style={styles.buttonContainer}>
          <StyleButton 
            type="primary"
            content={"Custom Order"}
            onPress={() => {
              console.warn("Custom Order")
            }}
              
          />

          <StyleButton 
            type="secondary"
            content={"Existing Iventory"}
            onPress={() => {
              console.warn("Existing Inventory")
            }}
                
          />
        </View>
      </View>

  );
}
