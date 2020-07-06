import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback,
    FlatList
} from 'react-native';
import styled from 'styled-components/native'
import style from '../../style'
import Ionicons from 'react-native-vector-icons/Ionicons'

function Feature () {
    return (
        <View style={style.featureWrapper}>
            <View style={style.featureHeader}>
                <Text style={style.featureHeaderText}>👝 gopay</Text>
                <Text style={style.featureHeaderText}>Rp0</Text>
            </View>
            <View style={style.featureBody}>
                <TouchableWithoutFeedback>
                    <View style={style.featureBodyButtonWrapper}>
                        <Ionicons name='arrow-up-circle' size={30} color="white"/>
                        <Text style={style.text_white}>Pay</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={style.featureBodyButtonWrapper}>
                        <Ionicons name='cut' size={30} color="white"/>
                        <Text style={style.text_white}>Promo</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={style.featureBodyButtonWrapper}>
                        <Ionicons name='add-circle' size={30} color="white"/>
                        <Text style={style.text_white}>Top Up</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={style.featureBodyButtonWrapper}>
                        <Ionicons name='apps' size={30} color="white"/>
                        <Text style={style.text_white}>More</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default Feature;