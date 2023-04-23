import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableHighlight, Dimensions,Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Button, Avatar } from 'react-native-paper';

const { width } = Dimensions.get('window');
const imageSize = width - 40;

export default function Add() {
    const [galleryPermission, setGalleryPermission] = useState(null);
    const [imageUri, setImageUri] = useState(null);

    useEffect(() => {
        getGalleryPermission();
    }, []);

    const getGalleryPermission = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        setGalleryPermission(status === 'granted');
    };

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });
        if (!result.cancelled) {
            setImageUri(result.uri);
        }
    };

    const removeImage = () => {
        setImageUri(null);
    };

    return (
        <View style={styles.container}>
            <TouchableHighlight
                onPress={selectImage}
                underlayColor={'transparent'}>
                <View style={[styles.imageContainer, { borderColor: imageUri ? '#C5E9C4' : '#C5E9C4' }]}>
                    {
                        imageUri &&
                        <Image source={{ uri: imageUri }} style={styles.image} />
                    }
                </View>
            </TouchableHighlight>

            <View style={styles.buttonsContainer}>
                <Button mode="contained" onPress={selectImage} style={styles.button}>
                    Добавить фото
                </Button>
                <Button mode="contained" onPress={removeImage} style={[styles.button, { marginLeft: 10, color:"#C5E9C4",}]}>
                   Удалить фото
                </Button>

            </View>                

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        color:"#C5E9C4",

    },
    imageContainer: {
        width: imageSize / 2,
        height: imageSize / 2,
        borderWidth: 1,
        borderColor: '#C5E9C4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: imageSize / 2 - 4,
        height: imageSize / 2 - 4,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20,
        color:"#C5E9C4",

    },
    button: {
        color:"#C5E9C4",
        width: 188
    }
});