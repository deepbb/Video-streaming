import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Color from '../Shared/Color'
import { useNavigation } from '@react-navigation/native'

const RecentVideos= () => {
    const navigation = useNavigation()
    const VideoList=[
        {
            id:1,
            name:'Make Video Using ChatGPT',
            imageUrl:'https://i.ytimg.com/vi/N7xEs9E9Y4A/maxresdefault.jpg',
            url:'N7xEs9E9Y4A'
        },
        {
            id:2,
            name:'UI Design Tutorial',
            imageUrl:'https://i.ytimg.com/vi/P1_ciTwn6fE/maxresdefault.jpg',
            url:'P1_ciTwn6fE'

        },
        {
            id:3,
            name:'The Sahara Railway',
            imageUrl:'https://i.ytimg.com/an_webp/8t5ZkVdXjrE/mqdefault_6s.webp?du=3000&sqp=CIXf558G&rs=AOn4CLAsrmmdYVdJ9cCnDL8VQgQgTi2Cqw',
            url:'jEo-ykjmHgg'
        }
    ]


  return (
    <View style={styles.recent}>
      <Text style={styles.heading}>Recently Viewed</Text>
      <FlatList 
        data={VideoList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>
        <TouchableOpacity onPress={()=>navigation.navigate("PlayVideo",{itemId:item.url,name:item.name})}>
            <Image style={styles.image} source={{uri:item.imageUrl}} />
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
        }/>
    </View>
  )
}

export default RecentVideos

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
        marginBottom:20,
        color:Color.primaryColor,
        fontSize:10,
        fontWeight:"500"
    },
    heading:{
        fontSize:20,
        color:Color.white,
        fontWeight:"700"
    },
    recent:{
        paddingBottom:20
    }
})