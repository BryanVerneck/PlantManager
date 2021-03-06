import React from  'react';

import { StyleSheet, Text, Image, View } from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface PlaceProps extends RectButtonProps {
    data: {
        name: string;
        icon: string;
        place_id: string;
        photos: {
          photo_reference: string;
        };
      recomendar: string;    
    }
} 

// https://maps.googleapis.com/maps/api/place/photo?maxwidth=960&photoreference="+ photoRef +"&key=AIzaSyBp0cy7ti0z5MJMAwWiPMNvbJobmWYGyv4' alt=''

export const PlaceCardPrimary = ({ data, ...rest} : PlaceProps) => {
    return(
        <RectButton {...rest}>
            <View style={data.recomendar == "True" ? styles.RecomendationContainer : styles.container}>

              <Image style={styles.image} source={{ uri: data.icon }} />
      
              <Text style={styles.text}>
                  {data.name}
              </Text>

            </View>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      maxWidth: '100%',
      borderRadius: 5,
      paddingVertical: 15,
      alignItems: 'flex-start',
      paddingHorizontal: 10,
      marginBottom: 5,
      borderWidth: 1,
      borderColor: colors.shape
    },
    RecomendationContainer : {
      flexDirection: 'row',
      maxWidth: '100%',
      borderRadius: 5,
      paddingVertical: 15,
      alignItems: 'flex-start',
      paddingHorizontal: 10,
      marginBottom: 5,
      borderWidth: 1,
      borderColor: colors.main,
    },
    text: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: 5,
        marginLeft: 10
    },
    image: {
        width: 20,
        height: 20,
        marginTop: 5
    },
})
