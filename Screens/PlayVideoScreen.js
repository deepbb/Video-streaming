import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import PlayList from '../Components/PlayList'
import RecentVideos from '../Components/RecentVideos'
import VideoGrid from '../Components/VideoGrid'
// import SubscribeSection from '../Components/SubscribeSection'
import YTPlayer from '../Components/YTPlayer'
import Color from '../Shared/Color'

function PlayVideoScreen() {
  const param=useRoute().params;
  useEffect(()=>{
      
  },[])

  return (
    <View style={{ backgroundColor:Color.black,flex:1}}>
        <YTPlayer param={param}/>
        <View style={{marginTop:100}}>
           <RecentVideos />
        </View>
    </View>
  )
}

export default PlayVideoScreen
