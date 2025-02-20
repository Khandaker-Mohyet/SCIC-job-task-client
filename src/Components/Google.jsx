import { Link } from "react-router-dom";


const Google = () => {
  return (
    <p className="text-center my-4">
            <Link to="/home"><button  className='btn btn-outline btn-success'>Google login</button></Link>
            </p>
  );
};

export default Google;