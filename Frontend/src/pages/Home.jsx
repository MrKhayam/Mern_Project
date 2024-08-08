import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/authenticate/authSlice";
import toast from "react-hot-toast";
import SideLeft from "../components/SideLeft";
import SideRight from "../components/SideRight";
import Mid from "../components/Mid";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <>
      <div className="w-full h-screen">
        

        <div className="main flex w-[100%] mx-auto h-full">
          <div className="sidebarLeft w-[20%] h-full border-r">
            <SideLeft />
          </div>
          <div className="mid w-[56%] border-x h-full border">
            <Mid />
          </div>
          <div className="sidebarRight w-[24%] h-full border">
            <SideRight />
          </div>
        </div>
        
        
        
        
        
        
        
        
        {/* <button
          onClick={() => {
            dispatch(logout());
            navigate('/')
            toast.success('User Logged Out Successfully');
          }}
          className="bg-white text-black px-7 py-4 rounded-full text-lg font-semibold"
        >
          Logout
        </button> */}
      </div>
    </>
  );
};

export default Home;
