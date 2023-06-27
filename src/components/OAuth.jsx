import { FcGoogle } from "react-icons/fc";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { toast } from "react-toastify";
import { db } from "../firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";

export default function OAuth() {
  const navigate = useNavigate()
 async function onGoogleClick(event) {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth , provider);
      const user = result.user

      //check for the user
      const docRef = doc(db,"users",user.uid)
     const docSnap = await getDoc(docRef)
        
     if(!docSnap.exists()){
      setDoc(docRef,{name : user.displayName , email : user.email , timestamp : serverTimestamp()})
     }
     navigate("/")
    } catch (error) {
      toast.error("could not authorize with google");
    }
  }
  return (
    <button
      type="button"
      className="flex justify-center items-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition-all duration-150 ease-in-out rounded"
      onClick={onGoogleClick}
    >
      <FcGoogle className=" text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
}
