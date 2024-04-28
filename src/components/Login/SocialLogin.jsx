import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin, twitterLogin } = useContext(AuthContext);


//   NAVIGATION
  const navigate = useNavigate();
  const location = useLocation();
  const back = location?.state?.from || "/"; 

  
  const handleSocialLogin = (socialProvider) => {
    socialProvider()
    .then(result =>{
        if(result.user){
            navigate(back)
        }
    })
    .catch((error)=>{
        console.log(error.message);
    });
  };

  return (
    <div className="flex justify-around py-8 ">
      <button
        onClick={() => handleSocialLogin(googleLogin)}
        className="btn bg-[#742437] text-white"
      >
        {" "}
        Google Login
      </button>
      {/* GITHUB */}

      <button
        onClick={() => handleSocialLogin(githubLogin)}
        className="btn bg-black text-white"
      >
        {" "}
        Github Login
      </button>

      {/* TWITTER LOGIN */}
      <button
        onClick={() => handleSocialLogin(twitterLogin)}
        className="btn text-white bg-blue-500"
      >
        Twitter Login
      </button>
    </div>
  );
};

export default SocialLogin;
