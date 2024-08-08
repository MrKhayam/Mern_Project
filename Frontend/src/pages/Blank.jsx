import { useEffect, useState } from "react";
import Input from "../components/Input";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logUser, regUser, reset } from "../features/authenticate/authSlice";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Blank = () => {
  const [isSign, setIsSign] = useState(false);
  const [isLog, setIsLog] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { isLoading, isError, message, user } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [navigate, user]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isError]);

  const handleSignup = () => {
    setIsSign(true);
  };
  const handleLogin = () => {
    setIsLog(true);
  };
  const handleClose = () => {
    setIsLog(false);
    setIsSign(false);
  };

  const handleclick = () => {
    const data = {
      name,
      email,
      password,
    };
    dispatch(regUser(data));
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleLoginClick = () => {
    const data = {
      email,
      password,
    };
    dispatch(logUser(data));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="w-full h-screen bg-white flex justify-center items-center">
        <div
          className={`items-center justify-center ${
            isSign ? "flex" : "hidden"
          } signUp w-full h-screen fixed top-0 bg-[#00000068]`}
        >
          <IoIosCloseCircle
            onClick={handleClose}
            className="text-white absolute top-[4%] cursor-pointer text-3xl right-[2%]"
          />

          <div className="card w-[20%] p-7 h-[50%] rounded-lg flex flex-col bg-white shadow-md">
            <h1 className="text-center text-lg font-semibold">
              Create New Account
            </h1>
            <Input
              onChange={(e) => setName(e.target.value)}
              autoComp="name"
              value={name}
              label="Name"
              pholder="Enter Your Name..."
              idFor="name"
            />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              autoComp="email"
              value={email}
              label="Email"
              pholder="Enter Your Email..."
              idFor="email"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              autoComp="password"
              value={password}
              label="Password"
              pholder="Enter Your Password..."
              idFor="pass"
            />
            <button
              onClick={handleclick}
              className="w-full mt-10 font-semibold bg-black text-white py-4 rounded-full"
            >
              {isLoading ? (
                <BeatLoader color="white" size={10} />
              ) : (
                "Create New Account"
              )}
            </button>
          </div>
        </div>

        <div
          className={`items-center justify-center ${
            isLog ? "flex" : "hidden"
          } signUp w-full h-screen fixed top-0 bg-[#00000068]`}
        >
          <IoIosCloseCircle
            onClick={handleClose}
            className="text-white absolute top-[4%] cursor-pointer text-3xl right-[2%]"
          />

          <div className="card w-[20%] p-7 h-[40%] rounded-lg flex flex-col bg-white shadow-md">
            <h1 className="text-center text-lg font-semibold">
              Login to Your Account
            </h1>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              label="Email"
              pholder="Enter Your Email..."
              idFor="loginEmail"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              label="Password"
              pholder="Enter Your Password..."
              idFor="loginPassword"
            />
            <button
              onClick={handleLoginClick}
              className="w-full mt-10 font-semibold bg-black text-white py-4 rounded-full"
            >
              Login
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center justify-center">
          <button
            onClick={handleSignup}
            className="px-8 font-semibold py-3 text-white bg-black rounded-full"
          >
            Create New Account
          </button>
          <button
            onClick={handleLogin}
            className="px-20 font-semibold py-3 text-white bg-black rounded-full"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Blank;
