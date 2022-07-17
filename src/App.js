// import { useState, useEffect } from 'react';
import './App.css';
// import { db } from './firebase-config';
// import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { firebase } from 'firebase'
import { auth } from 'firebaseui';


function App() {
  // const [users, setUsers] = useState([]);
  // const usersCollectionRef = collection(db, 'users');

  // const createUser = async () => {
  //   // await addDoc(usersCollectionRef, { name: 'Mark Dumalaon', position: 'Manager' })
  // }

  // const updateUser = async (id) => {
  //   const userDoc = doc(db, 'users', id);
  //   const newFields = { name: 'new Name' };
  //   // await updateDoc(userDoc, newFields)
  // }
  // const deleteUser = async (id) => {
  //   const userDoc = doc(db, 'users', id);
  //   await deleteDoc(userDoc)
  // }

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  //   }

  //   getUsers();
  // }, []);
  const ui = new auth.AuthUI(firebase.auth());

  ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Other config options...
  });

  return (
    <div className="App">
    </div>
  );
}

export default App;
