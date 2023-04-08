import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    ImageBackground,
  } from 'react-native';
  import React from 'react';
  import { useNavigation, useRoute } from '@react-navigation/native';
  import { IconButton, Button } from 'react-native-paper';
import { theme } from '../../theme/theme';
import { generalstyles } from '../../generalstyles/generalstyles';
import SimiliarProducts from '../../components/SimiliarProducts';

  
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
          <View style={{ marginHorizontal: 10 }}>
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
            <View>
              <Text
                style={{
                  fontSize: 12,
                  marginHorizontal: 10,
                  color: theme.colors.buttonColor,
                }}
              >
                {params.item.sessions} work out sessions
              </Text>
            </View>
          </View>
          {/* header section */}
  
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                pariatur nostrum incidunt nobis sunt quam cumque, quae ducimus
                facere modi.
              </Text>
            </View>
          </View>
          {/* description card */}
  
          {/* hotel access card */}
          <SimiliarProducts/>
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
  