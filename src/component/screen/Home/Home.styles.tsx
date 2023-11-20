import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  logo: {
    aspectRatio: 1.51,
  },
  profile: {
    padding: 12,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  listContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  emptyState: {
    width: '70%',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 16,
  },
  bold: {
    fontFamily: 'Lora',
    fontWeight: 'bold',
    fontSize: 24,
  },
  startReview: {
    width: '100%',
  },
});
