import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Button from '/component/base/Button';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const data = [];

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          padding: 12,
        }}>
        <Text
          style={{
            fontFamily: 'Lora',
            fontWeight: 'bold',
            fontSize: 32,
          }}>
          My Reviews
        </Text>
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
