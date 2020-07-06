import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableWithoutFeedback,
    FlatList
} from 'react-native';
import styled from 'styled-components/native'
import style from '../../style'
import Feature from '../components/Feature'
import Service from '../components/Service'
import Header from '../components/Header'
import Content from '../components/Content'
import categoryData from './categoryData'
import contentData from '../components/contentData'

const CategoryButton = styled.View`
    height: 30px;
    margin-right: 10px;
    border-radius: 15px;
    min-width: 40px;
    padding-horizontal: 15px;
    justify-content: center;
    align-items: center;
    border-width: 0.5px;
    border-color: grey;
    background-color: ${({isSelected}) => isSelected ? 'green' : 'white'};
`

const CategoryButton__text= styled.Text`
    color: ${({isSelected}) => isSelected ? 'white' : 'grey'}
`
function Home() {
    
    const [categoryButtonSelected, setCategoryButtonSelected] = useState('1')
    
    return (
        <SafeAreaView>
        <Header/>
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={style.scrollView}>            
                <Feature />
                <Service />
                <View style={style.categoryButton}>
                    <Text style={style.categoryButtonText}>Top picks for you</Text>
                    <FlatList
                        data={categoryData}
                        renderItem={({item}) => (
                            <TouchableWithoutFeedback 
                            onPress={() => setCategoryButtonSelected(item.id)}
                            >
                                <CategoryButton isSelected={item.id === categoryButtonSelected}>
                                    <CategoryButton__text isSelected={item.id === categoryButtonSelected }>{item.categoryName}</CategoryButton__text>
                                </CategoryButton>
                            </TouchableWithoutFeedback>
                    )}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={style.ContainerContent}>
                {
                    contentData.map(content => {
                    return (
                            <Content key={content.categoryId} content={content}/>
                            )
                        })
                }
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home;
