import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  upperContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  lowerContainer: {
    flex: 1,
    width: '90%',
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    borderColor: '#0000001A',
    borderWidth: 2,
    backgroundColor: '#0000001A',
    width: '100%',
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 100,
    width: '100%',
    alignItems: 'center',
  },
  buttonSecondary: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
    padding: 12,
    borderRadius: 100,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textSecondary: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
