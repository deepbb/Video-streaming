import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState,useEffect } from 'react'
import YoutubePlayer from "react-native-youtube-iframe";
import Color from '../Shared/Color';
const playerWidth=Dimensions.get('screen').width

export default function YTPlayer({param}) {
  console.log(param);
  const [playing,setPlaying]=useState(false)
  // const [videoData,setVideoData]=useState([]);
  // useEffect(()=>{
  //     console.log("Param:",param);
  //     setVideoData(param.videoData);
  // },[])



    const onStateChange = useCallback((state) => {
        if (state === "ended") {
          setPlaying(false);
           Alert.alert("video has finished playing!");
        }
      }, []);
  return (
    <View style={styles.webviewContainer}>
   <YoutubePlayer
        height={200}
        play={playing}
        videoId={param.itemId}
        onChangeState={onStateChange}
      />

    <Text style={styles.title}>{param.name}</Text>
    
    </View>

  )
}

const styles = StyleSheet.create({
  webviewContainer:{
      width:"100%",
      height:150,
      marginTop:20
  },
  title:{
      color:Color.primaryColor,
      fontSize:20,
      fontWeight:'bold',
      marginTop:10
  }

})
