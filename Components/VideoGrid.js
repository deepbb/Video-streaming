import { useNavigation } from '@react-navigation/native'
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Color from '../Shared/Color'

const VideoGrid = () => {
    const navigation = useNavigation()
    const VideoList=[
        {
            id:1,
            name:'Coke Studio season 9',
            imageUrl:'https://i.ytimg.com/vi/I3tS2oTUvHI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB52C9T5Dkc8vjtLYsPDM-c07xTVA',
            url:'I3tS2oTUvHI'
        },
        {
            id:2,
            name:'Lagoons of Thailand',
            imageUrl:'https://i.ytimg.com/vi/eLETc01pEAM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJpP8h4T-gE836v1lf6SH8Tw5LZQ',
            url:'eLETc01pEAM'

        },
        {
            id:3,
            name:'World war1',
            imageUrl:'https://i.ytimg.com/an_webp/d7gxZOQZfWQ/mqdefault_6s.webp?du=3000&sqp=CNjJ558G&rs=AOn4CLDcvfw4SXrNhLNyRXIvVKxk3tjhcQ',
            url:'d7gxZOQZfWQ'
        }
    ]


  return (
    <View>
      <Text style={styles.heading}>Popular Videos</Text>
      <FlatList 
        data={VideoList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>
        <TouchableOpacity onPress={()=> navigation.navigate("PlayVideo",{itemId:item.url,name:item.name})}>
            <Image style={styles.image} source={{uri:item.imageUrl}} />
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
        }/>
    </View>
  )
}

export default VideoGrid

const styles = StyleSheet.create({
    image:{
        width:180,
        height:100,
        // borderRadius:10,
        marginRight:5,
        marginTop:5,
        resizeMode: 'stretch',
    },
    text:{
        marginTop:10,
        color:Color.primaryColor,
        fontSize:10,
        fontWeight:"500"
    },
    heading:{
        fontSize:20,
        color:Color.white,
        fontWeight:"700"
    },
})