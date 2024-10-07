import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  buttonContainer: {
    marginBottom: 10, 
    width: '100%', 
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
  },
  itemContainer1: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%',
  },
  registerText: {
    color: 'blue',
    marginTop: 20,
    textDecorationLine: 'underline',
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',  
  },
  status: {
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
  },
  description: {
    flex: 1,
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
  },
  infoContainer: {
    backgroundColor: 'white',
    flex: 0,
  },
  favoriteContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',  
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',  
  },
  birthDate: {
    fontSize: 16,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',  
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  picker: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },
  purchaseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,  
    marginLeft: 10,
    marginRight: 10,  
    backgroundColor: 'white',
    borderRadius: 10,
  },
  offerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  discount: {
    fontSize: 14,
    color: 'red',
  },
  forgotPassword: {
    marginTop: 15,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    marginVertical: 10,
  },
});