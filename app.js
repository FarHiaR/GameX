//useless 

//On your App.js file
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);
//Paste below the Back4App Application ID AND the JavaScript KEY
Parse.initialize('HtdonF7Ky6A40GMT9kgpXvTtfxl1a7uTDQhrdkag', 'Ag0Qommcd9onbsDE4zTfU1ksMLM2H2CDRD9gBchh');
//Point to Back4App Parse API address 
Parse.serverURL = 'https://parseapi.back4app.com/'