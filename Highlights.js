import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const highlightsItem = ({ item }) => (
<View style={styles.highlights_item}>
<Image
    style={styles.highlight_image}
    source={{uri: item.highlight_image}}
    />
<Text style={styles.hightlight_title}>{item.hightlight_title}</Text>
</View>
  );

const Highlights = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.highlights}
    data={item}
    renderItem={highlightsItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default Highlights;

const styles = StyleSheet.create({
    'highlight_image': {
        'width': '20vw',
        'height': '20vw',
        'borderRadius': 50,
        'marginTop': 8,
        'marginHorizontal': 8,
        'borderColor': '#979595',
        'borderWidth': 2,
        'padding': 10
    },
    'hightlight_title': {
        'color': '#080707',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'alignSelf': 'center',
        'marginTop': 5
    }
});