import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handelRegistration = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(name, email, photo, password);

        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
       


}
    return (
        <div>
        <Navbar></Navbar>
        <h2 className="text-3xl text-center my-10">Please Registration</h2>
        <form onSubmit={handelRegistration} className=" md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo Url"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                  <button type="submit"  className="btn btn-primary">Register</button>
                </div>
              </form>
              <p className="text-center mt-10">
                  Already have an account? pls 
                  <Link className="font-semibold text-blue-400" to='/login'> Login</Link>
              </p>
      </div>
    );
};

export default Register;