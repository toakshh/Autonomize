import "./Body.css";
import { useSelector } from "react-redux";
import { useUserRepoQuery } from "../../redux/features/api/fetchUserData";

const Body = () => {
  const userInput = useSelector((state) => state.input.value);
  console.log(userInput);
  const { data, isLoading, isError } = useUserRepoQuery(userInput, {
    skip: !userInput,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h4>Something went wrong. Please try again.</h4>;

  return (
    <div>
      {data?.map((repo) => {
        return (
          <div className="repoBoxes" key={repo.id}>
            {repo.name}
          </div>
        );
      })}
    </div>
  );
};

export default Body;
