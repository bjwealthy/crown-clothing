import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore()
firestore.collection('users').doc('a7w3bmuS5Vpe5BXNEEKd').collection('cartItems').doc('zLFNAn77oqPhkefqRdRz');
firestore.doc('/users/a7w3bmuS5Vpe5BXNEEKd/cartItems/zLFNAn77oqPhkefqRdRz')
firestore.collection('/users/a7w3bmuS5Vpe5BXNEEKd/cartItems');