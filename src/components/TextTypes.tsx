import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { generalstyles } from '../generalstyles/generalstyles';
import { IconButton } from 'react-native-paper';
import { theme } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';

const TextTypes = ({ text , screen}: any) => {
    const navigation =  useNavigation<any>();
    return (
        <View style={styles.containerStyles}>
            <View style={[generalstyles.flexStyles, {justifyContent:"space-between", alignItems:"center"}]}>
                <View>
                    <Text style={styles.textStyles}>{text}</Text>
                </View>
                <IconButton
                    icon="arrow-right"
                    iconColor={theme.colors.white}
                    size={30}
                    onPress={() => navigation.navigate(screen)}
                />
            </View>

        </View>
    )
}

export default TextTypes

const styles = StyleSheet.create({
    textStyles: {
        color:theme.colors.white,
        fontWeight:"bold",
        fontSize:18
    },
    containerStyles:{
       marginHorizontal:10,
       marginVertical:10
    }
})