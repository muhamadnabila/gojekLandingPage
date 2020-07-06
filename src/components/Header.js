import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight
} from 'react-native';
import styled from 'styled-components/native'
import style from '../../style'

function Header() {
    return (
        <View style={style.header}>
            <TextInput 
                style={style.searchInput}
                placeholder="🔍 Where do you want to go?"
            />
            <TouchableHighlight 
                style={style.buttonPromo}
            >
                <Text style={style.promoText}>💛 Promos</Text>
            </TouchableHighlight>
        </View>
    )
}
export default Header