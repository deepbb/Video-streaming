import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import PlayList from '../Components/PlayList'
import VideoGrid from '../Components/VideoGrid'
import Color from '../Shared/Color'
import RecentVideos from '../Components/RecentVideos'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Slider />
      <PlayList />
      <VideoGrid />
      <RecentVideos />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:Color.black
  }
})