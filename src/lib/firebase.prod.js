import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCsSObqSVK74iYPSIKcbnliN60SX3QXJIg",
  authDomain: "netflix-c953e.firebaseapp.com",
  projectId: "netflix-c953e",
  storageBucket: "netflix-c953e.appspot.com",
  messagingSenderId: "42097446724",
  appId: "1:42097446724:web:bb123821065d2da8865111"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
