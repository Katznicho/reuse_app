import { View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../../../theme/theme';
import { generalstyles } from '../../../generalstyles/generalstyles';
import SearchComponent from '../../../components/SearchComponent';
import ProfileDetailsCard from '../../../components/ProfileCardDetails';


const Language = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [language, setLanguages] = useState([
    {
      id: 1,
      name: 'English',
      value: true,
    },
    {
      name: 'French',
      id: 2,
      value: false,
    },

    {
      id: 3,
      name: 'Chinese',
      value: false,
    },
    {
      id: 4,
      name: 'Vibrate',
      value: false,
    },

    {
      id: 5,
      name: 'German',
      value: false,
    },
    {
      id: 6,
      name: 'Russian',
      value: false,
    },
    {
      id: 7,
      name: 'Portugese',
      value: false,
    },
    {
      id: 8,
      name: 'Spanish',
      value: false,
    },
  ]);
  const onSetNotification = (id: number) => {
    const newNotifications = language.map(item => {
      if (item.id === id) {
        return {
          ...item,
          value: !item.value,
        };
      }
      return {
        ...item,
        value: false,
      };
    });
    setLanguages(newNotifications);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      {/* search component */}
      <View style={[generalstyles.centerContent]}>
        <SearchComponent
          placeholder="search languages"
          value={searchQuery}
          searchStyles={{
            elevation: 4,
            borderRadius: 25,
            marginTop: 5,
            marginBottom: 10,
            marginLeft: -5,
            marginRight: 5,
            height: 42,
            backgroundColor: theme.colors.darkBlack,

            color: `${theme.colors.white}`,
            width: theme.dimensions.width / 1.2,
          }}
          onSearchChange={(query: any) => {
            if (query.length > 0) {
              const filteredGyms = language.filter((item: any) =>
                item.name.toLowerCase().includes(query.toLowerCase()),
              );
              setLanguages(filteredGyms);
            } else {
              setLanguages(language);
            }
            setSearchQuery(query);
          }}
        />
      </View>
      {/* search component */}
      {/* profile details */}
      <ProfileDetailsCard
        details={language}
        showSwitch={true}
        onSetNotification={onSetNotification}
        showCheckBox={true}
      />
      {/* profile details */}
    </SafeAreaView>
  );
};

export default Language;
