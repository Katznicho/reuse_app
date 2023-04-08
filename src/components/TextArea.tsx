import { StyleSheet, View, TextInput } from 'react-native';
import React, { useState } from 'react';
// import Textarea from 'react-native-textarea';
import { theme } from '../theme/theme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TextArea = () => {
    const [text, setText] = useState<any>('');
  return (
    <View style={[styles.textareaContainer]}>
       <TextInput
        style={styles.textInput}
        multiline={true}
        numberOfLines={4}
        placeholder="Type your message here..."
        value={text}
        onChangeText={setText}
      />
    </View>
  );
};

export default TextArea;

const styles = StyleSheet.create({
  textareaContainer: {
    height: 200,
    width: '88%',
    padding: 5,
    backgroundColor: theme.colors.darkBlack,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  textInput: {
    height: 150,
    borderWidth: 0,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,

  },
});
