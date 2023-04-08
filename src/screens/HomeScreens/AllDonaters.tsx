import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { generalstyles } from '../../generalstyles/generalstyles';
import { donaters } from '../../fakedata/data';
import DonaterCard from '../../components/DonaterCards';

const AllDonaters = () => {
  return (
    <View style={generalstyles.container}>
    <FlatList
      data={donaters}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <DonaterCard
          item={item}
          key={item.id}
          //   showAvailable={true}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  </View>
  )
}

export default AllDonaters

const styles = StyleSheet.create({})