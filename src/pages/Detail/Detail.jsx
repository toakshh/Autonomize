import { useParams } from "react-router-dom";
import { useRepoDetailQuery } from "../../redux/features/api/fetchUserData";
import { useSelector } from "react-redux";

const Detail = () => {
  const { repoName } = useParams();
  // console.log(repoName);
  const user = useSelector((state) => state.input.value);
  // console.log(user);
  const { data, isLoading, isError } = useRepoDetailQuery(
    { name: user, repo: repoName },
    {
      skip: !user,
    }
  );
  // console.log(data);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h4>Something went wrong. Please try again.</h4>;

  return (
    <div className="userBox">
      {data && (
        <>
          {/* image section */}
          <div>
            <img
              className="userImage"
              src={data.owner.avatar_url}
              alt="user image"
            />
          </div>
          {/* userinfo section */}
          <div>
            <h4>{data.name}</h4>
            <h5>
              {data.desrcription
                ? data.description
                : "No description as of now."}
            </h5>
            <h6>Languages: {data.language}</h6>
            <h6>forks: {data.forks_count}</h6>
            <h6>visibility: {data.visibility}</h6>
            <h6>branch: {data.default_branch}</h6>
            <a
              className="followerBtn"
              href={data.html_url}
              rel="noreferrer"
              target="_blank"
            >
              Link to github
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
