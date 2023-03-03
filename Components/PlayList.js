import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Color from '../Shared/Color'

const PlayList = () => {
    const courseList=[
        {
            id:1,
            name:'Ultimate Angular Tutorial',
            imageUrl:'https://i.ytimg.com/vi/NlGkd7TlBDs/maxresdefault.jpg'
        },
        {
            id:2,
            name:'Figma UI/UX Tutorial',
            imageUrl:'https://i.ytimg.com/vi/YLypVu78YTU/maxresdefault.jpg',
        },
        {
            id:3,
            name:'React Tutorial',
            imageUrl:'https://i.ytimg.com/vi/nXyQYpalYgg/maxresdefault.jpg',
        }
    ]

  return (
    <View style={styles.playlist}>
      <Text style={styles.heading}>PlayLists</Text>
      <FlatList
      data={courseList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=> 
      <View>
        <Image style={styles.courseImage} source={{uri:item.imageUrl}} />
        <Text style={[styles.courseheading]}>{item.name}</Text>
      </View>
      }
       />
    </View>
  )
}

export default PlayList

const styles = StyleSheet.create({
    playlist:{
        marginTop:10
    },
    heading:{
        fontSize:20,
        color:Color.white,
        fontWeight:"700"
    },
    courseImage:{
        width:250,
        height:160,
        marginTop:10,
        padding:10,
        borderRadius:10,
        marginRight:20,
        resizeMode: 'stretch',
    },
    courseheading:{
        fontSize:10,
        color:Color.primaryColor,
        fontWeight:"500",
        marginTop:10,
    },
})