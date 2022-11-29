import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import Highlights from './Highlights'
import Posts from './Posts'

const Home = () => (
<ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
<Highlights item={item.highlights}/>
<Posts item={item.posts}/>
</ScrollView>
)

export default Home;

const styles = StyleSheet.create({
    
});