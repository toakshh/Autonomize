import { useSelector } from "react-redux";
import { setUser } from "../../redux/features/user/userSlice";

const Body = () => {
  const userDetail = useSelector(setUser);
  console.log(userDetail.payload.user.data);
  return <div>body</div>;
};

export default Body;
