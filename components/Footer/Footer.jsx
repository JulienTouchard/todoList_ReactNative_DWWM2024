/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import { FooterStyle } from './FooterStyle';

const Footer = () => {
    return (
        <View style={FooterStyle.footer}>
            <Text style={FooterStyle.txtFoot}>CEPPIC International DWWM 2024</Text>
        </View>
    );
};

export default Footer;
