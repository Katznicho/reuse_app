import { Text, View } from 'react-native';
import React from 'react';
import { generalstyles } from '../generalstyles/generalstyles';
import { Checkbox } from 'react-native-paper';
import { theme } from '../theme/theme';

const CheckBoxComponent = ({ checked, setChecked, text }: any) => {
  return (
    <View
      style={[
        generalstyles.flexStyles,
        { alignItems: 'center', marginHorizontal: 20 },
      ]}
    >
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
        color={theme.colors.buttonColor}
        uncheckedColor={theme.colors.white}
      />
      <View>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

export default CheckBoxComponent;
