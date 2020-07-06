import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    FlatList
} from 'react-native';
import styled from 'styled-components/native'
import style from '../../style'
import Ionicons from 'react-native-vector-icons/Ionicons'

function Service () {
    const services = [
        {
            id: '1',
            name: 'GoRide',
            icon: 'bicycle'        
        },
        {
            id: '2',
            name: 'GoCar',
            icon: 'car'        
        },
        {
            id: '3',
            name: 'Go Food',
            icon: 'fast-food'
        },
        {
            id: '4',
            name: 'GoShop',
            icon: 'basket'        
        },
        {
            id: '5',
            name: 'GoSend',
            icon: 'md-logo-buffer'        
        },
        {
            id: '6',
            name: 'GoMart',
            icon: 'md-cart'        
        },
        {
            id: '7',
            name: 'GoMed',
            icon: 'ios-bandage-outline'        
        },
        {
            id: '8',
            name: 'More',
            icon: 'apps'
        },
    ]

    return (
        <View style={style.serviceWrapper}>
            {
                services.map(service => {
                    return (
                        <TouchableWithoutFeedback key={service.id}>
                            <View style={style.featureBodyServiceWrapper}>
                                <Ionicons name={service.icon} size={30}/>
                            <Text>{service.name}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })
            }
        </View>
    )
}

export default Service;