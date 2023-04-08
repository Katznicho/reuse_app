import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Appbar, Badge } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../../theme/theme';
import SearchComponent from '../SearchComponent';


const SearchAppBar = ({ navigation, previous, placeholder, onSearchChange, searchValue , searchStyles }: any) => {
  const dispatch = useDispatch()



  return (
    <Appbar.Header
      style={{
        backgroundColor: `${theme.colors.primary}`,
        width: '100%',
        elevation: 0,
      }}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
          color={ theme.colors.textColor}
        />
      ) : null}
      <View style={[{ flex: 1 }]}>
        <SearchComponent
          onChangeSearch={onSearchChange}
          searchStyles={searchStyles}
          placeholder={`${placeholder}`}
          value={searchValue}
        
        />
      </View>
    </Appbar.Header>
  );
};

export default SearchAppBar;
