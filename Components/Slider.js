import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Slider() {
    const [slider,setSlider] = useState([])
    useEffect(()=> {
        setSlider([
            {
                id:1,
                name:'Slider 1',
                imageUrl:'https://i.ytimg.com/vi/YLypVu78YTU/maxresdefault.jpg'
            },
            {
                id:2,
                name:'Slider 2',
                imageUrl:'https://i.ytimg.com/vi/_5-1wVJvxSY/maxresdefault.jpg'
            }

        ])
    },[])
  return (
    <View>
       <FlatList
        data={slider}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={({item,index})=>
        <View>
            <Image style={styles.slideImage} source={{uri:item.imageUrl}} />
        </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
    slideImage:{
        width:Dimensions.get('screen').width*0.88,
        height:180,
        marginTop:20,
        padding:10,
        borderRadius:10,
        marginRight:10
    },
})