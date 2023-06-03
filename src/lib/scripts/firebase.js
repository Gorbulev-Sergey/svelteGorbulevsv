import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyD6Kt5YR1p15_C4E5ATsOSTCYmAOM20FoM',
	authDomain: 'androidshare-ef0f9.firebaseapp.com',
	databaseURL: 'https://androidshare-ef0f9-default-rtdb.firebaseio.com',
	projectId: 'androidshare-ef0f9',
	storageBucket: 'androidshare-ef0f9.appspot.com',
	messagingSenderId: '394066692680',
	appId: '1:394066692680:web:ae5488d351708a3942e67d',
	measurementId: 'G-Z6Q9JWJRD0'
};

let app = initializeApp(firebaseConfig);
export let db = getDatabase(app);
