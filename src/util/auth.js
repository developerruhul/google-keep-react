import { firebaseAuth, storage } from "../config/firebase";

export const signup = ({ name, pw, email, imgBlob }) => {
  return firebaseAuth()
    .createUserWithEmailAndPassword(email, pw)
    .then(({ user }) => saveImg(imgBlob, user))
    .then(({ url }) => updateProfile(name, url));
};

// storage
export const saveImg = (img, user) =>
  storage
    .ref(`${user.uid}/${img.name}`)
    .put(img)
    .then(fileSnap =>
      fileSnap.ref.getDownloadURL().then(url => ({ url, user }))
    );

// update profile
function updateProfile(name, imgURL) {
  const user = firebaseAuth().currentUser;

  user.updateProfile({
    displayName: name,
    photoURL: imgURL
  });
}

// login
export const login = ({ pw, email }) =>
  firebaseAuth().signInWithEmailAndPassword(email, pw);

// logout
export const logOut = () => firebaseAuth().signOut();
