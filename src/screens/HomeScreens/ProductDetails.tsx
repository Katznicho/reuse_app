import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { IconButton, Button, Avatar } from 'react-native-paper';
import { theme } from '../../theme/theme';
import { generalstyles } from '../../generalstyles/generalstyles';
import SimiliarProducts from '../../components/SimiliarProducts';
import AntDesign from 'react-native-vector-icons/AntDesign';


const ProductDetails = () => {
    const navigation = useNavigation<any>();
    const { params } = useRoute<any>();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                {/* header section */}
                <ImageBackground
                    source={{ uri: params.item.packageImageUri }}
                    style={{ width: '100%', height: 300 }}
                    resizeMode="cover"
                >
                    <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
                        <IconButton
                            icon="chevron-left"
                            iconColor={theme.colors.white}
                            size={28}
                            onPress={() => navigation.goBack()}
                            containerColor={theme.colors.darkBlack}
                        />
                    </View>
                </ImageBackground>

                <View style={ [generalstyles.flexStyles, { marginHorizontal: 10, marginVertical:10, justifyContent:"space-between", alignItems:"center" }]}>
                    <View>
                        <View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginHorizontal: 10,
                                    color: theme.colors.white,
                                }}
                            >
                                {params.item.name}
                            </Text>
                        </View>
                        <View style={[generalstyles.flexStyles, { marginHorizontal: 10 }]}>
                            {
                                Array(params.item.rating).fill(params.item.rating).map((_, index) => (
                                    <AntDesign
                                        name="star"
                                        color={theme.colors.buttonColor}
                                        size={15}
                                        key={index}
                                    />
                                ))
                            }
                        </View>

                    </View>

                    {/* owner details */}
                    <View>
                        <View style={[{ marginHorizontal: 20 }]}>
                            <Avatar.Image
                                size={40}
                                source={{
                                    uri: 'https://plus.unsplash.com/premium_photo-1665673312765-8e7ae54a5ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                                }}
                            />
                        </View>
                        <View >
                            <Text style={styles.nameStyle}>Owner</Text>
                        </View>

                    </View>
                    {/* owner details */}


                </View>
                {/* header section */}

                {/* more pictures */}
                {/* more pictures */}

                {/* description card */}
                <View
                    style={[
                        generalstyles.centerContent,
                        { marginHorizontal: 10, marginVertical: 20 },
                    ]}
                >
                    <View
                        style={{
                            backgroundColor: theme.colors.darkBlack,
                            elevation: 10,
                            padding: 5,
                            borderRadius: 10,
                        }}
                    >
                        <Text style={{ color: theme.colors.white, padding: 5 }}>
                            {params.item.description}

                        </Text>
                    </View>
                </View>
                {/* description card */}

                {/* hotel access card */}
                <SimiliarProducts />
                {/*  hotel access card*/}

                {/* start out work  out */}

                <Button
                    mode="contained"
                    contentStyle={{
                        flexDirection: 'row-reverse',
                    }}
                    style={{
                        marginHorizontal: 40,
                        marginVertical: 20,
                    }}
                    //  loading={true}
                    buttonColor={theme.colors.buttonColor}
                    textColor={theme.colors.primary}
                    onPress={() => navigation.navigate('Appointment')}
                >
                    Buy
                </Button>
                {/* start work out */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProductDetails;

const styles = StyleSheet.create({
    nameStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: theme.colors.white,
        marginLeft:20
    },
});
