import React from 'react';
import {Dimensions, FlatList, SafeAreaView, Text, View} from 'react-native';
import Button from '/component/base/Button';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';

const Home: React.FC = () => {
  const {width: windowWidth} = Dimensions.get('window');

  const data = [];

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 12,
        }}>
        <FastImage
          source={require('/asset/images/puros.png')}
          resizeMode="cover"
          style={{
            width: windowWidth * 0.25,
            aspectRatio: 1.51,
          }}
        />
        <Icon
          name="person"
          size={24}
          style={{
            padding: 12,
            borderRadius: 24,
            overflow: 'hidden',
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}
        />
      </View>
      <FlatList
        data={data}
        scrollEnabled={data.length > 0}
        renderItem={() => <ReviewItem />}
        ListEmptyComponent={EmptyState}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 12,
        }}
      />
    </SafeAreaView>
  );
};

const ReviewItem: React.FC = () => {
  return null;
};

const EmptyState: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{width: '70%'}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          marginBottom: 16,
        }}>
        Welcome to{' '}
        <Text
          style={{
            fontFamily: 'Lora',
            fontWeight: 'bold',
            fontSize: 24,
          }}>
          Puros
        </Text>
      </Text>
      <Button
        title="Start a review"
        buttonStyle={{
          width: '100%',
        }}
        onPress={() => navigation.navigate('NewReview')}
      />
    </View>
  );
};

export default Home;
