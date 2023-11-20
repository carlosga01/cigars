import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import TextInput from '/component/base/TextInput';
import {useNavigation} from '@react-navigation/native';
import {Rating} from 'react-native-ratings';
import Button from '/component/base/Button';
import {useQuerySearchCigars} from '/react-query/cigars/cigars';
import {
  Asset,
  CameraOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {ImageLibraryOptions} from 'react-native-image-picker/src/types';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './NewReview.styles';
import {MainStackScreens} from '/component/navigator/MainStack/MainStack';

const Window = Dimensions.get('window');

const NewReview: React.FC = () => {
  const {goBack} = useNavigation<MainStackScreens>();

  const [searchText, setSearchText] = useState('');

  const {
    data: searchResult,
    isLoading: searchIsLoading,
    isRefetching: searchIsRefetching,
  } = useQuerySearchCigars(searchText, {
    enabled: searchText.length >= 3,
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [items, setItems] = useState([]);

  const [rating, setRating] = useState(0);
  const [photo, setPhoto] = useState<Asset>(null);

  const openPhotoLibrary = async () => {
    const result = await launchImageLibrary({
      selectionLimit: 1,
      mediaType: 'photo',
    } as ImageLibraryOptions);

    if (result?.assets?.length) {
      setPhoto(result.assets[0]);
    }
  };

  useEffect(() => {
    if (searchText.length < 3) {
      setItems([]);
    }
  }, [searchText]);

  useEffect(() => {
    if (searchResult?.length) {
      setItems(
        searchResult?.map(item => ({
          label: item.name,
          value: item.id,
        })) || [],
      );
    }
  }, [searchResult]);

  return (
    <KeyboardAvoidingView behavior="padding" style={Styles.wrapper}>
      <SafeAreaView style={Styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: 'flex-end',
              flex: 1,
            }}>
            {/* Header */}
            <View style={Styles.header}>
              <Text style={Styles.headerText}>New Review</Text>
              <Icon
                name="close"
                size={32}
                style={Styles.closeButton}
                onPress={goBack}
              />
            </View>

            {/* Dropdown */}
            <View style={Styles.dropdownContainer}>
              <DropDownPicker
                open={open}
                listMode="SCROLLVIEW"
                theme="LIGHT"
                searchable
                searchPlaceholder="Search for a cigar"
                value={value}
                items={items}
                onChangeSearchText={setSearchText}
                stickyHeader
                placeholder="Select a cigar"
                style={{borderRadius: 12}}
                dropDownContainerStyle={{
                  maxHeight: 300,
                }}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                ListEmptyComponent={
                  searchIsLoading || searchIsRefetching
                    ? () => (
                        <ActivityIndicator
                          style={{
                            paddingVertical: 16,
                          }}
                        />
                      )
                    : searchText.length < 3
                    ? () => null
                    : () => <Text style={{padding: 16}}>No results</Text>
                }
              />
            </View>

            {/* Photo */}
            <View style={Styles.photoContainer}>
              {photo?.uri ? (
                <View style={Styles.row}>
                  <Image source={{uri: photo.uri}} style={Styles.image} />
                  <Icon
                    name="close"
                    size={32}
                    style={Styles.imageRemove}
                    onPress={() => setPhoto(null)}
                  />
                </View>
              ) : (
                <>
                  <Text style={Styles.text}>Upload a photo</Text>
                  <View style={Styles.row}>
                    <View style={Styles.center}>
                      <Icon
                        name="camera"
                        size={32}
                        style={Styles.cameraIcon}
                        onPress={() =>
                          launchCamera({cameraType: 'front'} as CameraOptions)
                        }
                      />
                      <Text style={Styles.cameraIconText}>Camera</Text>
                    </View>
                    <View style={Styles.centerMarginLeft}>
                      <Icon
                        name="image"
                        size={32}
                        style={Styles.cameraIcon}
                        onPress={openPhotoLibrary}
                      />
                      <Text style={Styles.cameraIconText}>Library</Text>
                    </View>
                  </View>
                </>
              )}
            </View>

            {/* Text input */}
            <View style={Styles.inputContainer}>
              <TextInput
                multiline
                placeholder="Write your review here..."
                placeholderTextColor="black"
                inputStyle={Styles.inputStyle}
                containerStyle={Styles.row}
              />
            </View>

            {/* Rating */}
            <View style={Styles.ratingContainer}>
              <Rating
                tintColor="rgb(242,242,242)"
                startingValue={0}
                fractions
                jumpValue={0.5}
                onSwipeRating={setRating}
                onFinishRating={setRating}
                imageSize={Window.width / 8}
                style={{
                  height: Window.width / 8,
                  width: (Window.width / 8) * 5,
                  marginBottom: 8,
                }}
              />
              <View style={[Styles.row, Styles.center]}>
                <Text style={Styles.ratingInfoText}>My rating:</Text>
                <Text style={Styles.ratingText}>{rating}</Text>
              </View>
            </View>

            <Button title="Save" buttonStyle={{marginBottom: 16}} />
            <View style={{flex: 1}} />
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default NewReview;
