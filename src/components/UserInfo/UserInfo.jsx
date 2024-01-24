import { useSelector } from "react-redux";
import "./UserInfo.css";
import { Link } from "react-router-dom";
import { useUserDetailQuery } from "../../redux/features/api/fetchUserData";
const UserInfo = () => {
  //   const userInfo = useSelector((state) => state.user?.data);
  const userName = useSelector((state) => state.input.value);
  //   console.log(userName);
  const { data } = useUserDetailQuery(userName, {
    skip: !userName,
  });
  //   console.log(data);
  return (
    <div className="userInfoMain">
      {data && (
        <>
          {/* image section */}
          <div>
            <img className="userImage" src={data.avatar_url} alt="user image" />
          </div>
          {/* userinfo section */}
          <div>
            <h4>
              {data.name} <span className="userLogin">({data.login})</span>
            </h4>
            <h5>{data.email ? data.email : data.location}</h5>
            <h6>
              Public repos : <b>{data.public_repos}</b>
            </h6>
            <h6>
              <b>Bio: </b>
              {data.bio}
            </h6>
          </div>

          {/* follower button */}
          <div className="followerBtn">
            <Link to={`/followers/${data.login}`}>
              Followers : {data.followers}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default UserInfo;
