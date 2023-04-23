import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import CameraRoll from '@react-native-community/cameraroll';
import { RNCamera } from 'react-native-camera';
import { DocumentScanner } from 'react-native-document-scanner';

const ScannerScreen = () => {
  const [scanOptions, setScanOptions] = useState({});
  const cameraRef = useRef(null);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Permission to use camera',
            message: 'App needs permission to use camera',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission granted');
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const takePicture = async () => {
    try {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      await CameraRoll.save(data.uri, { type: 'photo', album: 'TestAlbum' });
      console.log('Image saved to camera roll');
    } catch (err) {
      console.log('Error taking picture:', err);
    }
  };

  const scanDocument = async () => {
    try {
      const options = {
        quality: 0.8,
        base64: true,
        resultType: 'base64',
      };
      const data = await DocumentScanner.scanDoc(options);
      setScanOptions({
        detectedDocument: 'data:image/jpeg;base64,' + data,
      });
      console.log('Document scanned successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const pickImage = async () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        setScanOptions({
          detectedDocument: response.uri,
        });
        console.log('Image picked successfully');
      }
    });
  };

  const saveDocument = async () => {
    try {
      await CameraRoll.save(scanOptions.detectedDocument);
      console.log('Image saved to camera roll!');
      Alert.alert('Success', 'Document saved successfully!');
    } catch (err) {
      console.log('Error saving image to camera roll:', err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Document Scanner</Text>
      </View>
      <View style={styles.imageContainer}>
        {scanOptions.detectedDocument ? (
          <Image
            style={styles.image}
            source={{ uri: scanOptions.detectedDocument }}
          />
        ) : (
          <Text>No image detected</Text>
        )}
      </View>
      <View style={styles.cameraContainer}>
        <RNCamera
          ref={cameraRef}
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.captureButton}
            onPress={takePicture}
          >
            <Text style={styles.buttonText}>Take photo</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={scanDocument}>
          <Text style={styles.buttonText}>Scan document</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={pickImage}>
          <Text style={styles.buttonText}>Pick image</Text>
        </TouchableOpacity>
        {scanOptions.detectedDocument && (
          <TouchableOpacity style={styles.actionButton} onPress={saveDocument}>
            <Text style={styles.buttonText}>Save document</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 100,
    backgroundColor: '#00ccff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  image: {
    width: '100%',
    height: 400,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    backgroundColor: '#00ccff',
    padding: 15,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  actionButton: {
    backgroundColor: '#00ccff',
    padding: 15,
    borderRadius: 10,
  },
});

export default ScannerScreen;