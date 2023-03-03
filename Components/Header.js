import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../Shared/Color'
import Slider from './Slider'
import VideoGrid from './VideoGrid'
import RecentVideos from './RecentVideos'
import YTPlayer from './YTPlayer'
import PlayList from './PlayList'

const Header = () => {
  return (
    <>
    <View style={styles.container}>
      <View>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.name}>Pradeep</Text>
      </View>
      <Image source={{uri:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}} style={styles.userImage}/>
    </View>
    {/* <Slider />
    <PlayList />
    <VideoGrid />
    <RecentVideos /> */}
   
    </>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:50
    },
    welcome:{
        fontSize:18,
        color:Color.white
    },
    name:{
        fontSize:20,
        color:Color.primaryColor,
        fontWeight:"800"
    }

})