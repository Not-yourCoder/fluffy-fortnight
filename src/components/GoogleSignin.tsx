import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../firebase"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { images } from "../constants/images"




const GoogleSignin = () => {
    const navigate = useNavigate()
    const signUpGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            toast.success("Signed In")
            navigate("/home", {
                replace: true
            })
        } catch (error) {
            toast.error(String(error))
        }
    }
    return (
        <div onClick={signUpGoogle}>
            <img src={images.google} className="mx-auto"/>
        </div>
    )
}

export default GoogleSignin