import { useSelector } from "react-redux";
import "./UserInfo.css";
import { Link } from "react-router-dom";
const UserInfo = () => {
  const userInfo = useSelector((state) => state.user?.data);
  console.log(userInfo);
  return (
    <div className="userInfoMain">
      {userInfo && (
        <>
          {/* image section */}
          <div>
            <img
              className="userImage"
              src={userInfo.avatar_url}
              alt="user image"
            />
          </div>
          {/* userinfo section */}
          <div>
            <h4>
              {userInfo.name}{" "}
              <span className="userLogin">({userInfo.login})</span>
            </h4>
            <h5>{userInfo.email ? userInfo.email : userInfo.location}</h5>
            <h6>
              Public repos : <b>{userInfo.public_repos}</b>
            </h6>
            <h6>
              <b>Bio: </b>
              {userInfo.bio}
            </h6>
          </div>

          {/* follower button */}
          <div className="followerBtn">
            <Link to={`/followers/${userInfo.login}`}>
              Followers : {userInfo.followers}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default UserInfo;
