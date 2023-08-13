
"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../app/AuthContext';
import Image from 'next/image';
const LoginForm = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        login();
        router.push('/products');
        // Handle successful login here
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError('An error occurred');
    }
  };

  return (
    <form className='' onSubmit={handleSubmit}>
      <h1 className='text-2xl text-center'>
        Login Page
      </h1>
      <div className='px-2 flex'>
      <div className='lg:w-1/2  w-[100%] border rounded-lg  my-10'>
      <div className='flex justify-center'>
      <input
      className='lg:w-2/3 w-11/12  m-auto dark:bg-gray-700 bg-gray-200 p-4 mt-12 mb-6 rounded-lg '
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      <div className='flex justify-center'>
      <input
            className='lg:w-2/3 w-11/12  dark:bg-gray-700 bg-gray-200 p-4 mt-12 mb-6 rounded-lg'


        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <button type="submit" className="relative hover:scale-110 lg:mx-32 mx-36 my-6 transition transform duration-500 inline-flex items-center justify-center px-4 py-1.5 overflow-hidden cursor-pointer text-white bg-[#c60000] rounded-lg group">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
<span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 "></span>
<span className="relative text-lg text-white">Login</span>
</button>
      
      {error && <p className='mx-32 text-[#c60000]'>{error}</p>}
      </div>
<div className='mx-8 my-16 lg:block hidden'>
  <Image src="/images/loginImage.webp" width={500} height={500} alt="login image" className='w-full rounded-lg' />
</div>
</div>
    </form>
  );
};

export default LoginForm;





  