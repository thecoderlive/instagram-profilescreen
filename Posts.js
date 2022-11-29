import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const postsItem = ({ item }) => (
<View style={styles.posts_item}>
<Image
    style={styles.post_image}
    source={{uri: item.post_image}}
    />
</View>
  );

const Posts = ({ item }) => (
<FlatList
    style={styles.posts}
    data={item}
    renderItem={postsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default Posts;

const styles = StyleSheet.create({
    'post_image': {
        'width': '30vw',
        'height': '30vw',
        'margin': 4
    }
});