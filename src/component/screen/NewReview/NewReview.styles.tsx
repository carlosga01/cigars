import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  headerText: {
    fontFamily: 'Lora',
    fontWeight: 'bold',
    fontSize: 24,
  },
  closeButton: {
    padding: 4,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 8,
    overflow: 'hidden',
  },
  dropdownContainer: {
    marginBottom: 24,
    zIndex: 100,
  },
  photoContainer: {
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  imageRemove: {
    position: 'absolute',
    right: -32,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  center: {
    alignItems: 'center',
  },
  centerMarginLeft: {
    alignItems: 'center',
    marginLeft: 16,
  },
  cameraIcon: {
    padding: 8,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 8,
    overflow: 'hidden',
  },
  cameraIconText: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 4,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    width: '100%',
    padding: 16,
    paddingTop: 16,
    borderRadius: 12,
    color: 'black',
  },
  ratingContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  ratingInfoText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  ratingText: {
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    marginLeft: 8,
  },
});
