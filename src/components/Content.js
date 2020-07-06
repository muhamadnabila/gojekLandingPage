import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image
} from 'react-native';
import styled from 'styled-components/native'
import style from '../../style'
import contentData from './contentData'

const Card = styled.View`
    height: ${({isSmallCard})=> isSmallCard ? '170' : '300'}px;
    width: ${({isSmallCard})=> isSmallCard ? '130' : '300'}px;
    margin-right: 15px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #ededed;
    `
const CardImageBackground = styled.Image`
    height: ${({isSmallCard, isFullSize})=> isFullSize ? '100' : isSmallCard ? '70' : '50'}%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px
`
const CardDescriptionWrapper = styled.View`
    height: ${({isSmallCard})=> isSmallCard ? '30' : '50'}%;
    flex: 1;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-vertical: 10px;
    padding-horizontal: 10px;

`
function Content({content}) {
    

    return (
            <View style={style.contentWrapper}>
                {content.tag && <Text style={style.contentTagText}>{content.tag}</Text>}
                {content.title && <Text style={style.contentTitleText}>{content.title}</Text>}
                {content.description && <Text style={style.contentDescriptionText}>{content.description}</Text>}
                <FlatList 
                    data={content.cards}
                    horizontal={true}
                    keyExtractor={(item) => item.cardId}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <Card isSmallCard={content.cardSize == 'small'}>
                            <CardImageBackground 
                                source={{uri: 'https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80'}} 
                                alt="cardBackgroundImage" 
                                isFullSize={!item.cardDescription && !item.cardTitle}
                                isSmallCard={content.cardSize == 'small'} />
                            <CardDescriptionWrapper style={style.cardDescriptionWrapper}>
                                {item.cardTitle && <Text numberOfLines={1} style={style.cardTitle}>{item.cardTitle}</Text>}
                                {item.cardDescription && <Text numberOfLines={5} style={style.cardDescription}>{item.cardDescription}</Text>}
                            </CardDescriptionWrapper>
                        </Card>
                    )}
                />
            </View>
    )
}
export default Content;