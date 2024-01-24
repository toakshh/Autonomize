import { useParams } from "react-router-dom";

const Detail = () => {
  const { repoName } = useParams();
  //   console.log(repoName);
  return <div>Detail</div>;
};

export default Detail;
