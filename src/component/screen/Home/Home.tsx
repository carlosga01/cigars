import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
} from 'react-native';
import Button from '/component/base/Button';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MainStackScreens} from '/component/navigator/MainStack/MainStack';
import Styles from './Home.styles';

const Home: React.FC = () => {
  const {width: windowWidth} = Dimensions.get('window');

  const data = [];

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <Image
          source={require('/asset/images/puros.png')}
          resizeMode="cover"
          style={[
            Styles.logo,
            {
              width: windowWidth * 0.25,
            },
          ]}
        />
        <Icon name="person" size={24} style={Styles.profile} />
      </View>
      <FlatList
        data={data}
        scrollEnabled={data.length > 0}
        renderItem={() => <ReviewItem />}
        ListEmptyComponent={EmptyState}
        contentContainerStyle={Styles.listContainer}
      />
    </SafeAreaView>
  );
};

const ReviewItem: React.FC = () => {
  return null;
};

const EmptyState: React.FC = () => {
  const {navigate} = useNavigation<MainStackScreens>();

  return (
    <View style={Styles.emptyState}>
      <Text style={Styles.emptyText}>
        Welcome to <Text style={Styles.bold}>Puros</Text>
      </Text>
      <Button
        title="Start a review"
        buttonStyle={Styles.startReview}
        onPress={() => navigate('NewReview')}
      />
    </View>
  );
};

export default Home;
