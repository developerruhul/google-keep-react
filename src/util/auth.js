import { firebaseAuth, ref, storage } from "../config/firebase";

// declare a method that'll be responsible for signing user up
export const signup = ({ name, pw, email, imgBlob }) => {
  // create user with email and password first to get the user ID
  return firebaseAuth().createUserWithEmailAndPassword(email, pw);
  // then () => store the prof_pic to firebase storage and get the download url
  // .then(({ user }) => saveImg(imgBlob, user))
  // then () => save the user data to realtime database === prof_pic, name
  // .then(({ user, url }) => saveUser(user, name, url))
  // catch () => if something goes wrong
  // .catch(err => {
  // we delete the current account by firebase.auth().currentUser.delete().then().catch()
  // try {
  //   firebaseAuth()
  //     .currentUser.delete()
  //     .catch(err => console.log(err.message));
  // } catch (error) {}
  // and return the error to show to the screen
  // return err.message;
  // })
};

export const saveImg = (img, user) =>
  storage
    .ref(`${user.uid}/${img.name}`)
    .put(img)
    .then(fileSnap =>
      fileSnap.ref.getDownloadURL().then(url => ({ url, user }))
    )
    .catch(err => err);

function saveUser(user, name, imgURL) {
  console.log(Array.slice(arguments, 0));
  return ref
    .child(`users/${user.uid}/`)
    .set({
      name,
      email: user.email,
      imgURL
    })
    .then(_ => ({ user, name, imgURL }))
    .catch(err => err);
}
