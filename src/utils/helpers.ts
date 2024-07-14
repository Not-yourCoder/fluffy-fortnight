import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { NavigateFunction } from "react-router-dom";
import { auth } from "../firebase";

export const logOut = async (navigate:NavigateFunction) => {
  
  await signOut(auth);
  toast.success("Logged out success");
  navigate("/login", { replace: true });
  return true;
};
