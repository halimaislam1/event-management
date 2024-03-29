import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import swal from 'sweetalert';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const { login ,loginWithGoogle} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('login page location:', location);
     

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        if (password.length < 6) {
            swal('Password should be at least 6 charecters')
            return;
        } else if (!/[A-Z]/.test(password)) {
            swal('Password should be at least one uppercase')
            return;
        } else if (!/[#?!@$%^&*-]/.test(password)) {
            swal('Password should be at least one special charecter')
            return;
        }

        login(email, password)
            .then(result => {
                console.log(result.user);
                swal({
                    text: "login successful",
                    timer: 1000
               })

                navigate(location?.state ? location.state : '/')
            })

            .catch(error => {
                console.error(error);
                swal({
                    text: "Invalid mail or password,please try again",
                    timer: 4000
                })
            })
    }
      const handleGoogleSignIn = () => {
        loginWithGoogle()
        .then(result => {
            console.log( result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>console.error(error))
       }

    return (

        <div className='mb-20'>
        
            <div className=" ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl text-fuchsia-700 font-bold mb-2">Please Login!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md  bg-base-500">
                        <div className="card-body bg-fuchsia-100 rounded-xl">

                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-purple-700">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Enter your email" className="input input-bordered text-sm
                                border border-fuchsia-700 " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-purple-700">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Enter your password" className="input input-bordered text-sm border border-fuchsia-700" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>

                                </div>
                                <div className="form-control mt-3">
                                    <button className="btn text-white bg-fuchsia-900 font-semibold 
                                    hover:bg-fuchsia-400">Login</button>
                                </div>
                            </form>
                            <p className="text-center mt-2">Do not have an account? <Link className="text-violet-800 font-bold" to='/register'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <button  onClick={handleGoogleSignIn}  className='flex items-center btn-outline p-4 bg-slate-300 mx-auto'><FcGoogle></FcGoogle>Login with google</button>
            
        </div>
        
    );
};

export default Login; 