import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import styles from './styles';



export default function StyleButton(props) {

    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;
    
    // E6 destructuring of const type to enable all be in 1 line
    const { type, content, onPress } = props

    
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20'


    return (
        <View style={styles.container}>
            <Pressable
               style={[styles.button, {backgroundColor: backgroundColor}]}
               onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}