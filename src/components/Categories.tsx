import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { theme } from '../theme/theme'
import { generalstyles } from '../generalstyles/generalstyles';

const Categories = () => {

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Clothes",
      image: "https://media.istockphoto.com/id/1415539642/photo/vertical-shot-of-a-stack-of-folded-clothes.jpg?b=1&s=170667a&w=0&k=20&c=Xsjae-AWRltveHYRLvHviypNpE8PQH6oBhr5kwEQDeY="
    },
    {
      id: 2,
      name: "Food",
      image: "https://media.istockphoto.com/id/1415539642/photo/vertical-shot-of-a-stack-of-folded-clothes.jpg?b=1&s=170667a&w=0&k=20&c=Xsjae-AWRltveHYRLvHviypNpE8PQH6oBhr5kwEQDeY="
    },
    {
      id: 3,
      name: "Electronics",
      image: "https://media.istockphoto.com/id/1415539642/photo/vertical-shot-of-a-stack-of-folded-clothes.jpg?b=1&s=170667a&w=0&k=20&c=Xsjae-AWRltveHYRLvHviypNpE8PQH6oBhr5kwEQDeY="
    },
    {
      id: 4,
      name: "Clothes",
      image: "https://media.istockphoto.com/id/1415539642/photo/vertical-shot-of-a-stack-of-folded-clothes.jpg?b=1&s=170667a&w=0&k=20&c=Xsjae-AWRltveHYRLvHviypNpE8PQH6oBhr5kwEQDeY="
    },
    {
      id: 5,
      name: "Furniture",
      image: "https://media.istockphoto.com/id/1415539642/photo/vertical-shot-of-a-stack-of-folded-clothes.jpg?b=1&s=170667a&w=0&k=20&c=Xsjae-AWRltveHYRLvHviypNpE8PQH6oBhr5kwEQDeY="
    },
    {
      id: 6,
      name: "Clothes",
      image: "https://media.istockphoto.com/id/1415539642/photo/vertical-shot-of-a-stack-of-folded-clothes.jpg?b=1&s=170667a&w=0&k=20&c=Xsjae-AWRltveHYRLvHviypNpE8PQH6oBhr5kwEQDeY="
    }
  ])


  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        categories.map(item => (
          <View>
            <TouchableOpacity style={styles.categoryContainer}>
              <Image style={styles.categoryImage} source={{ uri: item?.image }} />
              <Text style={styles.categoryName}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))
      }
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
  flatlistContainer: {
    marginHorizontal: 10
  },
  categoryContainer: {
    marginHorizontal: 10,
    marginVertical: 5
  },
  categoryImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 20
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.colors.white
  },
});