import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';
import { theme } from '../theme/theme';
import { generalstyles } from '../generalstyles/generalstyles';

const Subscription = () => {
  return (
    <View>
      {/* details */}
      <View style={[generalstyles.flexStyles, styles.container]}>
        <View>
          <View style={[styles.proStyles]}>
            <Text style={{ fontWeight: 'bold', color: theme.colors.white }}>
              PRO
            </Text>
          </View>
          <View style={[styles.viewStyles]}>
            <Text style={{ fontWeight: 'bold', color: theme.colors.white }}>
              Upgrade to Premium
            </Text>
          </View>
          <View style={[styles.viewStyles]}>
            <Text
              style={{ fontWeight: 'bold', color: theme.colors.placeholder }}
            >
              Subscription is auto renewable
            </Text>
          </View>
        </View>
        <View>
          <IconButton
            icon="chevron-right"
            iconColor={theme.colors.white}
            size={25}
          />
        </View>
      </View>
      {/* details */}
    </View>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.darkBlack,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  proStyles: {
    backgroundColor: theme.colors.red,
    width: 40,
    borderRadius: 5,
    padding: 2,
    marginHorizontal: 10,
  },
  viewStyles: {
    marginHorizontal: 10,
  },
});
