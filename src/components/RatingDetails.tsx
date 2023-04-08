import { Text, View } from 'react-native';
import React from 'react';
import { generalstyles } from '../generalstyles/generalstyles';
import { theme } from '../theme/theme';
import { ProgressBar } from 'react-native-paper';

const RatingDetails = () => {
  return (
    <View
      style={[
        generalstyles.flexStyles,
        { alignItems: 'center', justifyContent: 'space-evenly' },
      ]}
    >
      <View style={{ marginHorizontal: 20, marginTop: -35 }}>
        <Text
          style={{
            fontSize: 90,
            fontWeight: 'bold',
            color: theme.colors.white,
          }}
        >
          4.6
        </Text>
      </View>
      <View>
        <View>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <View
                style={[generalstyles.flexStyles, generalstyles.centerContent]}
              >
                <Text style={{ color: theme.colors.white, marginRight: 10 }}>
                  {index + 1}
                </Text>
                <ProgressBar
                  progress={Math.random()}
                  color={theme.colors.white}
                  style={{
                    width: 120,
                    borderRadius: 10,
                    backgroundColor: theme.colors.placeholder,
                  }}
                />
              </View>
            ))}
        </View>
        {/* total number of ratins */}
        <View style={[generalstyles.centerContent, { marginRight: -30 }]}>
          <Text style={{ color: theme.colors.white, fontSize: 20 }}>
            174 ratings
          </Text>
        </View>
        {/* total number of ratings */}
      </View>
    </View>
  );
};

export default RatingDetails;
