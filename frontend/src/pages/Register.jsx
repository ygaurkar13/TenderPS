import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Eye,EyeOff} from "lucide-react";
const Register=({setUser})=>{
    const [formData,setFormData]=useState({
        username:"",
        email:"",
        role:"",
        password:"",
    });

    const [error,setError]=useState('');
    const [showPassword,setShowPassword]=useState(false);
    const navigate=useNavigate();

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await axios.post("/api/auth/register",formData);
            localStorage.setItem("token",res.data.token);
            console.log(res.data);
            setUser(res.data);
            navigate('/'); 
        }catch(err){
            setError(err.response?.data?.message || "Registration Failed");
        }
    }

    return (<div className="min-h-screen flex items-center justify-center bg-gray-200">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-300">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                        Register
                    </h2>
                    {error && <p className="text-red-500 mb-4 text-sm">{error}
                    </p>}
                    <form onSubmit={handleSubmit}>
                        {/*Username*/}
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-1">Username</label>
                            <input 
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200" 
                                type="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter your Username"
                                autoComplete='off'
                                required 
                            />
                        </div>
                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-1">
                                Email</label>
                            <input 
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200" 
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your Email"
                                autoComplete='off'
                                required 
                            />
                        </div>

                        {/* Role Dropdown */}
                        <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Role</label>

                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">Select your Role</option>
                            <option value="coordinator">Coordinator</option>
                            <option value="dean">Dean</option>
                            <option value="director">Director</option>
                            <option value="registrar">Registrar</option>
                            <option value="admin">Admin</option>
                            <option value="contractor">Contractor</option>
                        </select>
                        </div>

                        {/* Password with Eye */}
                                                <div className="mb-6 relative">
                                                    <label className="block text-gray-600 text-sm font-medium mb-1">
                                                    Password
                                                    </label>
                        
                                                    <input
                                                    className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200"
                                                    type={showPassword ? "text" : "password"}
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    placeholder="Enter your Password"
                                                    required
                                                    />
                        
                                                    <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                                                    >
                                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                    </button>
                                                </div>
                        <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-800">Register</button>
                    </form>
                </div>
            </div>)
};
 
export default Register;
