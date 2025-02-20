import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Routes/AuthProvider";
import axios from "axios";


const Google = () => {

  const { googleSignIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const handelGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          displayName: result.user?.displayName,
          photoURL: result.user?.photoURL,
        }
        axios.post('http://localhost:4000/user', userInfo)
          .then(res => {
            console.log(res.data)
            navigate('/home')
        })
      })
      .catch(error => console.log('ERROR', error.message))
  }

  return (
    <p className="text-center my-4">
      <button onClick={handelGoogleSignIn} className='btn btn-outline btn-success'>Google login</button>
    </p>
  );
};

export default Google;