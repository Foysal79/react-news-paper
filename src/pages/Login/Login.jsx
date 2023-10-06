import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

   const handelLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
     const password = form.get('password');
    console.log(email, password);

    signIn(email, password)
    .then(result => {
        console.log(result.user);
        /// navigate after login
         navigate(location?.state ? location.state : '/')

    })
    .catch(error => {
        console.log(error);
    })


   }


  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-3xl text-center my-10">Please login</h2>
      <form onSubmit={handelLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit"  className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mt-10">
                do not have account? pls <Link className="font-semibold text-blue-400" 
                to='/register'> Resister</Link>
            </p>
    </div>
  );
};

export default Login;
