import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  function navigationHandler() {
    navigate("products");
  }

  return (
    <>
      <h1>My home page.</h1>
      <p>
        Go to <Link to="products">the list of products</Link>.
      </p>
      <button onClick={navigationHandler}>Navigate</button>
    </>
  );
};

export default HomePage;
