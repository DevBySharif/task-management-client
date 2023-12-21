import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const handleSocialLogin = (media) => {
    media();
  };
  return (
    <div>
      <div className="divider">Continue With</div>
      <div className="flex justify-center">
        <button
          className="font-bold flex justify-center items-center btn glass"
          onClick={() => handleSocialLogin(googleLogin)}
        >
          <FaGoogle></FaGoogle>
          Sign in With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
