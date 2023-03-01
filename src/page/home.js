import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [id, setId] = useState(0);

  const updateId = (update) => {
    setId(update.target.value);
  }

  const navigate = useNavigate();

  return (
    <div className="home">
      <h3>Wellcome Our Fashion Store!</h3>
      <input type={Number} onChange={updateId} placeholder="Enter ID" />
      <div>
        <button onClick={() => navigate(`/Product/${id}`)} className="btn">Search</button>
      </div>
    </div>
  );
};
export default Home;