import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { generalstyles } from '../../generalstyles/generalstyles'
import Categories from '../../components/Categories'
import TextTypes from '../../components/TextTypes'
import { ScrollView } from 'react-native-gesture-handler'
import Donaters from '../../components/Donaters'
import SearchComponent from '../../components/SearchComponent'
import { theme } from '../../theme/theme';
import ScrollCard from '../../components/ScrollCard'


const HomeScreeen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <SafeAreaView style={generalstyles.container}>

      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingBottom: 100 }}>
              {/* search component */}
      <View style={[generalstyles.centerContent]}>
        <SearchComponent
          placeholder="search for properties"
          value={searchQuery}
          searchStyles={{
            elevation: 4,
            borderRadius: 25,
            marginTop: 15,
            marginBottom: 5,
            height: 55,
            backgroundColor: theme.colors.darkBlack,
            color: `${theme.colors.white}`,
            width: theme.dimensions.width / 1.05,
          }}
          onSearchChange={(query: any) => {

            setSearchQuery(query);
          }}
        />
      </View>
      {/* search component */}
        {/* categories */}
        <TextTypes text="Your Favourites" />
        <Categories />
        {/* categories */}

        {/* most receommended */}
        <TextTypes text="Our Recommendations"  />
         <ScrollCard
             
          />
        {/* most recommended */}

        {/* popular */}
        <TextTypes text="Most Popular" />
        <ScrollCard/>
        {/* popular */}

        {/* nearby */}
        <TextTypes text="Near by You" />
        <ScrollCard/>
        {/* nearby */}

        {/* nearby */}
        <TextTypes text="Most Searched" />
        <ScrollCard/>
        {/* nearby */}

        {/* top donaters */}
        <TextTypes text="Top Donaters"  screen="AllDonaters"/>
        <Donaters />
        {/* top donaters */}

      </ScrollView>


    </SafeAreaView>
  )
}

export default HomeScreeen

const styles = StyleSheet.create({})