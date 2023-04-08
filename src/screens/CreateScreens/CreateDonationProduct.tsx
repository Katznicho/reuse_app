import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { generalstyles } from '../../generalstyles/generalstyles';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { theme } from '../../theme/theme';
import TextArea from '../../components/TextArea';

const CreateDonationProduct = () => {
    const [count, setCount] = useState([1, 2, 3, 4])
    return (
        <SafeAreaView style={generalstyles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* upload area */}
                <TouchableOpacity style={[styles.coverStyles, generalstyles.centerContent]}>
                    <AntDesign
                        name={'plus'}
                        color={theme.colors.white}
                        size={20}
                        style={{
                            borderRadius: 10,
                            padding: 10,
                        }}
                    />
                    <View>
                        <Text>Add cover photos</Text>
                    </View>

                </TouchableOpacity>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                    {
                        count.map((item, index) => (

                            <TouchableOpacity key={index} style={[styles.imageStyles, generalstyles.centerContent]}>
                                <AntDesign
                                    name={'plus'}
                                    color={theme.colors.white}
                                    size={20}
                                    style={{
                                        borderRadius: 10,
                                        padding: 10,
                                    }}
                                />

                            </TouchableOpacity>

                        ))
                    }

                    {/* second one */}
                    {/* second one */}

                </ScrollView>
                {/* upload area */}

                {/* descriptin */}
                 <TextArea/>
                {/* description */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default CreateDonationProduct

const styles = StyleSheet.create({
    coverStyles: {
        borderWidth: 1,
        borderColor: theme.colors.darkBlack,
        width: theme.dimensions.width - 20,
        marginHorizontal: 10,
        marginVertical: 10,
        height: 150,
        borderStyle: "dotted",
        borderRadius: 10
    },
    imageStyles: {
        borderWidth: 1,
        borderColor: theme.colors.darkBlack,
        width: 80,
        marginHorizontal: 5,
        marginVertical: 10,
        height:80,
        borderStyle: "dotted",
        borderRadius: 10
    }
})